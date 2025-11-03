import { Card, CardContent } from "@/components/ui/card"

interface KPIStatProps {
  label: string
  value: string
  description?: string
}

export function KPIStat({ label, value, description }: KPIStatProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <p className="mt-2 text-3xl font-bold text-card-foreground">{value}</p>
        {description && <p className="mt-1 text-xs text-muted-foreground">{description}</p>}
      </CardContent>
    </Card>
  )
}
