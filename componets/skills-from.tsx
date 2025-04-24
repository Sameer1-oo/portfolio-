import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  name: string
  className?: string
}

export default function SkillBadge({ name, className }: SkillBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center px-4 py-2 rounded-md bg-background border hover:border-primary transition-colors",
        className,
      )}
    >
      <span className="font-medium">{name}</span>
    </div>
  )
}
