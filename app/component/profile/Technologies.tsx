import { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMysql,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

const techItems = [
  { icon: SiTailwindcss, label: "Tailwind CSS", color: "#38B2AC" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, label: "Next.js", color: "#6B7280" },
  { icon: SiNodedotjs, label: "Node.js", color: "#339933" },
  { icon: SiExpress, label: "Express.js", color: "#6B7280" },
  { icon: SiNestjs, label: "NestJS", color: "#E0234E" },
  { icon: SiMysql, label: "MySQL", color: "#4479A1" },
  { icon: SiPostgresql, label: "PostgreSQL", color: "#336791" },
  { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
];

interface TechItemProps {
  Icon: IconType;
  label: string;
  color?: string;
}

function TechItem({ Icon, label, color }: TechItemProps) {
  return (
    <div className="flex items-center gap-1.5">
      <Icon size={16} color={color} />
      <span className="text-xs font-medium text-[var(--color-text)]">
        {label}
      </span>
    </div>
  );
}

const Technologies = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-4">
      {techItems.map((tech) => (
        <div
          key={tech.label}
          className={`
              flex items-center
              px-2 py-1.5
              rounded-md
              border border-slate-400/40
              text-slate-700
              bg-slate-400/10
              transition-all
              hover:border-slate-400/70
              hover:-translate-y-0.5
              hover:shadow-sm hover:shadow-slate-400/30
            `}
        >
          <TechItem Icon={tech.icon} label={tech.label} color={tech.color} />
        </div>
      ))}
    </div>
  );
};

export default Technologies;
