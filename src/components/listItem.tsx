import Link from "next/link";
import { twMerge } from "tailwind-merge";

export interface IListItemProps {
  text: string;
  href: string;
  icon: React.ReactNode;
  active?: boolean;
}

export default function ListItem({ icon, text, href, active }: IListItemProps) {
  return (
    <Link href={href}>
      <div
        className={twMerge(
          "min-h-4 flex flex-row p-3 rounded-lg hover:bg-slate-300/[.1]",
          active ? "bg-slate-100/[.4]" : ""
        )}
      >
        <div className="icon w-6 h-6 text-white">{icon}</div>
        <div className="text text-lg ml-4">{text}</div>
      </div>
    </Link>
  );
}
