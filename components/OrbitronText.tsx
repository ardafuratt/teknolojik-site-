"use client";

const I_CHARS = /([iIİı])/g;

/**
 * Wraps text and scales down "i" type letters to match other character heights.
 * Orbitron font renders i/I/İ/ı too tall; this component makes them proportionally shorter.
 */
export default function OrbitronText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const text = typeof children === "string" ? children : String(children ?? "");
  const parts = text.split(I_CHARS);

  return (
    <span className={className}>
      {parts.map((part, i) =>
        /^[iIİı]$/.test(part) ? (
          <span
            key={i}
            className="inline-block origin-bottom align-baseline scale-y-[0.72]"
            style={{ fontSize: "0.88em" }}
          >
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
}
