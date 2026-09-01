import Image from "next/image";
import type { Missionary } from "@/content/missionaries";

/* Not every missionary sends a photo, and an empty grey box reads as broken.
   Their initials in the display face read as deliberate. */
export function MissionaryPortrait({
  worker,
  sizes,
  priority,
}: {
  worker: Missionary;
  sizes: string;
  priority?: boolean;
}) {
  if (worker.photo) {
    return (
      <Image src={worker.photo} alt={worker.name} fill sizes={sizes} priority={priority} />
    );
  }

  const initials = worker.name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0] ?? "")
    .join("");

  return (
    <span className="portrait-initials" aria-hidden>
      {initials}
    </span>
  );
}
