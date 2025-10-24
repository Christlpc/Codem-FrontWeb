"use client";

export function CodemLogo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Chevron avec les couleurs Codem */}
      <path
        d="M 30 20 L 50 50 L 30 80 L 40 80 L 60 50 L 40 20 Z"
        fill="#F7A81B"
      />
      <path
        d="M 45 20 L 65 50 L 45 80 L 55 80 L 75 50 L 55 20 Z"
        fill="#F55D0A"
      />
    </svg>
  );
}

