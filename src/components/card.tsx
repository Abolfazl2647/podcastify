import { twMerge } from "tailwind-merge";

interface Card {
  className?: string;
  children: React.ReactNode;
}

export default function Card(props: Card) {
  return (
    <div className={twMerge("bg-foreground rounded-lg", props.className)}>
      {props.children}
    </div>
  );
}
