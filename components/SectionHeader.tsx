import { ReactNode } from "react";

interface SectionHeaderProps {
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
  align?: "center" | "left";
}

export default function SectionHeader({
  title,
  subtitle,
  className = "",
  align = "center",
}: SectionHeaderProps) {
  return (
    <div className={`mb-10 mx-2 ${align === "center" ? "text-center" : "text-left"} ${className}`}>
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-lg text-gray-700 mt-3 m-auto mx-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}
