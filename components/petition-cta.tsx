import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Shield } from "lucide-react"

export function PetitionCTA() {
  return (
    <Card className="overflow-hidden border-2 border-primary/20">
      <CardHeader>
        <CardTitle className="text-2xl text-card-foreground">Join Your Campus Peers</CardTitle>
        <CardDescription>
          Add your name to the petition in under 60 seconds. Your voice matters in shaping fiscal policy.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-3 rounded-lg bg-muted p-4">
          <Shield className="mt-0.5 h-5 w-5 text-primary" />
          <div className="flex-1">
            <p className="text-sm font-medium text-card-foreground">Your Privacy Matters</p>
            <p className="text-xs text-muted-foreground">
              We collect only essential information. No data is sold or shared with third parties.
            </p>
          </div>
        </div>
        <Button asChild size="lg" className="w-full">
          <a
            href="https://uptous.jotform.com/252657891175166"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            Sign the Petition
            <ExternalLink className="h-4 w-4" />
            <span className="sr-only">(opens Jotform in new tab)</span>
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}
