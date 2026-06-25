// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL = "https://www.odinwattez.nl";

const routes = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": false,
};

// Enable password protection on selected routes
// Set password in the .env file, refer to .env.example
const protectedRoutes = {
  "/work/automate-design-handovers-with-a-figma-to-code-pipeline": true,
};

import { Fraunces } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const headingFont = Fraunces({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const font = {
  primary: headingFont,
  secondary: headingFont,
  tertiary: headingFont,
  code: monoFont,
};

const style = {
  theme: "dark",
  neutral: "sand",
  brand: "yellow",
  accent: "yellow",
  solid: "color",
  solidStyle: "flat",
  border: "playful",
  surface: "translucent",
  transition: "all",
  scaling: "100"
};

const effects = {
  mask: {
    cursor: true,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: true,
    opacity: 30,
    x: 50,
    y: 60,
    width: 100,
    height: 50,
    tilt: 0,
    colorStart: "brand-background-strong",
    colorEnd: "page-background",
  },
  dots: {
    display: false,
    opacity: 80,
    size: "24",
    color: "brand-background-strong",
  },
  grid: {
    display: false,
    opacity: 20,
    color: "neutral-alpha-medium",
    width: "0.25rem",
    height: "0.25rem",
  },
  lines: {
    display: false,
    opacity: 80,
    color: "neutral-alpha-weak",
    size: "16",
    thickness: 1,
    angle: 45,
  },
};

const display = {
  location: false,
  time: true,
  themeSwitcher: true
};

export { routes, protectedRoutes, effects, style, display, baseURL, font };
