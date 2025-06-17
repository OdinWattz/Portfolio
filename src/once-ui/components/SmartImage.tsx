"use client";

import React, { CSSProperties, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Flex, Skeleton } from ".";

export interface SmartImageProps extends React.ComponentProps<typeof Flex> {
  aspectRatio?: string;
  height?: number;
  alt?: string;
  isLoading?: boolean;
  objectFit?: CSSProperties["objectFit"];
  enlarge?: boolean;
  src: string;
  unoptimized?: boolean;
  sizes?: string;
  priority?: boolean;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  aspectRatio,
  height,
  alt = "",
  isLoading = false,
  objectFit = "cover",
  enlarge = false,
  src,
  unoptimized = false,
  priority,
  sizes = "100vw",
  ...rest
}) => {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0 });
  const [imgSize, setImgSize] = useState({ width: 1, height: 1 });
  const [magnifierSize] = useState(150);
  const [zoomLevel, setZoomLevel] = useState(2);
  const imageRef = useRef<HTMLImageElement>(null);

  const isYouTubeVideo = (url: string) =>
    /(?:youtube\.com|youtu\.be)/.test(url);

  const getYouTubeEmbedUrl = (url: string) => {
    const match = url.match(
      /(?:youtube\.com\/.*[?&]v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? `https://www.youtube.com/embed/${match[1]}` : "";
  };

  const isVideo = src?.endsWith(".mp4");
  const isYouTube = isYouTubeVideo(src);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsEnlarged(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    const preventScroll = (e: WheelEvent) => {
      if (isEnlarged) e.preventDefault();
    };

    if (isEnlarged) {
      document.body.style.overflow = "hidden";
      window.addEventListener("wheel", preventScroll, { passive: false });
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("wheel", preventScroll);
    };
  }, [isEnlarged]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMagnifierPos({ x, y });
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (!showMagnifier) return;
    setZoomLevel((z) => {
      const next = z + (e.deltaY < 0 ? 0.2 : -0.2);
      return Math.max(1, Math.min(next, 15));
    });
  };

  useEffect(() => {
    if (imageRef.current) {
      setImgSize({
        width: imageRef.current.offsetWidth,
        height: imageRef.current.offsetHeight,
      });
    }
  }, [imageRef.current]);

  const handleClick = () => {
    if (enlarge) {
      setIsEnlarged(true);
      setShowMagnifier(false); // reset bij enlarge view
    }
  };

  return (
    <>
      {!isEnlarged && (
        <Flex
          fillWidth
          overflow="hidden"
          cursor={enlarge ? "interactive" : ""}
          style={{
            height: aspectRatio ? undefined : height ? `${height}rem` : "100%",
            aspectRatio,
            isolation: "isolate",
            position: "relative",
          }}
          onClick={handleClick}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => isEnlarged && setShowMagnifier(true)}
          onMouseLeave={() => isEnlarged && setShowMagnifier(false)}
          onWheel={handleWheel}
          {...rest}
        >
          {isLoading && <Skeleton shape="block" />}
          {!isLoading && isVideo && (
            <video
              src={src}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%", height: "100%", objectFit }}
            />
          )}
          {!isLoading && isYouTube && (
            <iframe
              width="100%"
              height="100%"
              src={getYouTubeEmbedUrl(src)}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ objectFit }}
            />
          )}
          {!isLoading && !isVideo && !isYouTube && (
            <>
              <Image
                ref={imageRef as any}
                src={src}
                alt={alt}
                priority={priority}
                sizes={sizes}
                unoptimized={unoptimized}
                fill
                style={{ objectFit }}
              />
              {showMagnifier && (
                <div
                  style={{
                    pointerEvents: "none",
                    position: "absolute",
                    top: `${magnifierPos.y - magnifierSize / 2}px`,
                    left: `${magnifierPos.x - magnifierSize / 2}px`,
                    width: `${magnifierSize}px`,
                    height: `${magnifierSize}px`,
                    borderRadius: "50%",
                    boxShadow: "0 0 8px #0008",
                    border: "2px solid transparent",
                    borderColor: "transparent",
                    background: `url(${src}) no-repeat`,
                    backgroundSize: `${imgSize.width * zoomLevel}px ${imgSize.height * zoomLevel}px`,
                    backgroundPosition: `-${magnifierPos.x * zoomLevel - magnifierSize / 2}px -${magnifierPos.y * zoomLevel - magnifierSize / 2}px`,
                    zIndex: 20,
                  }}
                />
              )}
            </>
          )}
        </Flex>
      )}

      {isEnlarged && enlarge && (
        <Flex
          position="fixed"
          top="0"
          left="0"
          style={{
            width: "100vw",
            height: "100vh",
            backdropFilter: "var(--backdrop-filter)",
            cursor: showMagnifier ? "none" : "zoom-in",
          }}
          background="overlay"
          vertical="center"
          horizontal="center"
          zIndex={10}
          onClick={() => {
            setIsEnlarged(false);
            setShowMagnifier(false);
          }}
          onWheel={handleWheel}
        >
          <Flex
            position="relative"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {!isVideo && !isYouTube && (
              <div
                style={{ position: "relative", display: "inline-block" }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setShowMagnifier(true)}
                onMouseLeave={() => setShowMagnifier(false)}
              >
                <img
                  ref={imageRef}
                  src={src}
                  alt={alt}
                  width={1200}
                  height={800}
                  style={{
                    maxWidth: "90vw",
                    maxHeight: "90vh",
                    objectFit: "contain",
                    borderRadius: "1rem",
                    display: "block",
                    width: "auto",
                    height: "auto",
                  }}
                  draggable={false}
                />
                {showMagnifier && (
                  <div
                    style={{
                      pointerEvents: "none",
                      position: "absolute",
                      top: `${magnifierPos.y - magnifierSize / 2}px`,
                      left: `${magnifierPos.x - magnifierSize / 2}px`,
                      width: `${magnifierSize}px`,
                      height: `${magnifierSize}px`,
                      borderRadius: "50%",
                      boxShadow: "0 0 8px #0008",
                      border: "2px solid #fff",
                      background: `url(${src}) no-repeat`,
                      backgroundSize: `${imgSize.width * zoomLevel}px ${
                        imgSize.height * zoomLevel
                      }px`,
                      backgroundPosition: `-${
                        magnifierPos.x * zoomLevel - magnifierSize / 2
                      }px -${
                        magnifierPos.y * zoomLevel - magnifierSize / 2
                      }px`,
                      zIndex: 20,
                    }}
                  />
                )}
              </div>
            )}
            {isVideo && (
              <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  maxWidth: "90vw",
                  maxHeight: "90vh",
                  objectFit: "contain",
                  borderRadius: "1rem",
                }}
              />
            )}
            {isYouTube && (
              <iframe
                width="90vw"
                height="90vh"
                src={getYouTubeEmbedUrl(src)}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  objectFit: "contain",
                  borderRadius: "1rem",
                }}
              />
            )}
          </Flex>
        </Flex>
      )}
    </>
  );
};

SmartImage.displayName = "SmartImage";
