import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/section"
import { ExternalLink, Users, TrendingUp, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Sign the Petition | UpToUs Campus Fiscal Awareness",
  description: "Add your voice to the movement for responsible fiscal policy. Sign the petition in under 60 seconds.",
}

export default function PetitionPage() {
  return (
    <main className="pb-16 md:pb-20">
      <Section className="pt-20 pb-12 md:pt-32">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Make Your Voice Heard
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground/80">
              Join thousands of students calling for responsible fiscal policy. Your signature matters.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="pt-6 text-center">
                <Users className="mx-auto h-8 w-8 text-primary" />
                <p className="mt-4 text-2xl font-bold text-card-foreground">10,000+</p>
                <p className="text-sm text-muted-foreground">Students signed</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <TrendingUp className="mx-auto h-8 w-8 text-primary" />
                <p className="mt-4 text-2xl font-bold text-card-foreground">200+</p>
                <p className="text-sm text-muted-foreground">Campuses represented</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Shield className="mx-auto h-8 w-8 text-primary" />
                <p className="mt-4 text-2xl font-bold text-card-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Privacy protected</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">What We're Asking For</CardTitle>
              <CardDescription>
                Our petition calls on policymakers to prioritize long-term fiscal sustainability
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-card-foreground">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Transparent reporting of long-term fiscal projections</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Bipartisan solutions to address structural deficits</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Investment in our generation's economic future</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Evidence-based policy decisions on fiscal matters</span>
                </li>
              </ul>

              <div className="rounded-lg bg-muted p-4">
                <p className="text-sm font-medium text-card-foreground">Your Privacy Matters</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  We collect only your name, email, and campus affiliation. No data is sold or shared with third
                  parties. You can request deletion at any time.
                </p>
              </div>

              <Button asChild size="lg" className="w-full">
                <a
                  href="https://uptous.jotform.com/252657891175166"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Sign the Petition Now
                  <ExternalLink className="h-4 w-4" />
                  <span className="sr-only">(opens Jotform in new tab)</span>
                </a>
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Takes less than 60 seconds • No payment required
              </p>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">How to Sign (3 quick steps)</CardTitle>
              <CardDescription>Follow these simple steps to add your signature</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal space-y-3 pl-5 text-card-foreground">
                <li>
                  Click on <span className="font-medium">Sign the Petition</span> above to open the form.
                </li>
                <li>
                  In the college field, select <span className="font-medium">Dallas Baptist University</span>.
                </li>
                <li>
                  Scroll down, enter your email address, and click <span className="font-medium">Submit</span>.
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </Section>
    </main>
  )
}
