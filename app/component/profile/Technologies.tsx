import { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";

const techItems = [
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, label: "Next.js", color: "#000000" },
  { icon: SiTailwindcss, label: "Tailwind CSS", color: "#38B2AC" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiNodedotjs, label: "Node.js", color: "#339933" },
  { icon: SiExpress, label: "Express.js", color: "#000000" },
];

interface TechItemProps {
  Icon: IconType;
  label: string;
  color?: string;
}

function TechItem({ Icon, label, color }: TechItemProps) {
  return (
    <div className="flex items-center gap-2 transition-transform hover:-translate-y-0.5">
      <Icon size={24} color={color} />
      <span className="text-[var(--color-text)] text-sm font-medium">{label}</span>
    </div>
  );
}

const Technologies = () => {
  return (
    <div className="flex flex-wrap gap-6 mt-4">
      {techItems.map((tech) => (
        <TechItem
          key={tech.label}
          Icon={tech.icon}
          label={tech.label}
          color={tech.color}
        />
      ))}
    </div>
  );
};

export default Technologies;
