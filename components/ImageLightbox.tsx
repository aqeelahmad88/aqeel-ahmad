"use client";

import React, { useEffect } from "react";

interface ImageLightboxProps {
  isOpen: boolean;
  imageSrc: string;
  imageAlt?: string;
  onClose: () => void;
}

export default function ImageLightbox({
  isOpen,
  imageSrc,
  imageAlt = "Project Preview",
  onClose,
}: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="custom-lightbox-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="custom-lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="custom-lightbox-close"
          onClick={onClose}
          aria-label="Close image preview"
        >
          &times;
        </button>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="custom-lightbox-img"
        />
      </div>
    </div>
  );
}
