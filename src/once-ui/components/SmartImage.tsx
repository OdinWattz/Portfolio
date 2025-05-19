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
  const imageRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (enlarge) setIsEnlarged(prev => !prev);
  };

  // ESC + scroll sluiten
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsEnlarged(false);
    };
    const handleWheel = () => {
      if (isEnlarged) setIsEnlarged(false);
    };

    document.addEventListener("keydown", handleEscape);
    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isEnlarged]);

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = isEnlarged ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isEnlarged]);

  // Bereken vergroting
  const calculateTransform = () => {
    if (!imageRef.current) return {};
    const rect = imageRef.current.getBoundingClientRect();
    const scale = Math.min(
      window.innerWidth / rect.width,
      window.innerHeight / rect.height
    ) * 0.9;

    const translateX = (window.innerWidth - rect.width) / 2 - rect.left;
    const translateY = (window.innerHeight - rect.height) / 2 - rect.top;

    return {
      transform: isEnlarged
        ? `translate(${translateX}px, ${translateY}px) scale(${scale})`
        : "translate(0, 0) scale(1)",
      transition: "all 0.3s ease-in-out",
    };
  };

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

  return (
    <>
      {!isEnlarged && (
        <Flex
          ref={imageRef}
          fillWidth
          overflow="hidden"
          cursor={enlarge ? "interactive" : ""}
          style={{
            height: aspectRatio ? undefined : height ? `${height}rem` : "100%",
            aspectRatio,
            isolation: "isolate",
            borderRadius: isEnlarged ? "0" : undefined,
            ...calculateTransform(),
          }}
          onClick={handleClick}
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
            <Image
              src={src}
              alt={alt}
              priority={priority}
              sizes={sizes}
              unoptimized={unoptimized}
              fill
              style={{ objectFit }}
            />
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
              cursor: "interactive",
              transition: "macro-medium",
            }}
            background="overlay"
            vertical="center"
            horizontal="center"
            zIndex={10}
            onClick={() => setIsEnlarged(false)}
          >
            <Flex
              position="relative"
              onClick={e => {
                e.stopPropagation();
                setIsEnlarged(false);
              }}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                width: "auto",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "interactive",
              }}
            >
              {isVideo ? (
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
                    opacity: isEnlarged ? 1 : 0,
                    transform: isEnlarged ? "scale(1)" : "scale(0.95)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                  }}
                />
              ) : (
                <Image
                  src={src}
                  alt={alt}
                  width={1200}
                  height={800}
                  sizes="90vw"
                  unoptimized={unoptimized}
                  style={{
                    maxWidth: "90vw",
                    maxHeight: "90vh",
                    objectFit: "contain",
                    borderRadius: "1rem",
                    width: "auto",
                    height: "auto",
                    opacity: isEnlarged ? 1 : 0,
                    transform: isEnlarged ? "scale(1)" : "scale(0.95)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
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
