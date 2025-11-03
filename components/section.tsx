import type React from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  innerClassName?: string
}

export function Section({ children, className, id, innerClassName }: SectionProps) {
  return (
    <section id={id} className={cn("py-12 md:py-20", className)}>
      <div className={cn("mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8", innerClassName)}>{children}</div>
    </section>
  )
}
