import Image from "next/image";

interface IAvatarProps {
  id: string;
  alt: string;
  className?: string;
}

export default function Avatar({ id, alt, className }: IAvatarProps) {
  return (
    <Image
      className={className}
      src={`/avatars/${id}`}
      alt={alt}
      width="48"
      height="48"
    />
  );
}
