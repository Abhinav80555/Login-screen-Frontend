import { useEffect } from "react";

const ORIGIN = window.location.origin;
export const AUTH_BG_IMG = `${ORIGIN}/assets/images/auth_bg_img.jpg`;
export const LOGO = `${ORIGIN}/assets/images/logo.png`;
export const CASET = `${ORIGIN}/assets/images/caset.png`;
export const MAN = `${ORIGIN}/assets/images/man.png`;

// Custom hook to manage document title
export function Helmet(title) {
  useEffect(() => {
    document.title = `${title} | Paperflite`;

    return () => {
      document.title = "Paperflite";
    };
  }, [title]);
}
