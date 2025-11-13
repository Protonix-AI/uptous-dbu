import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DebtClockEmbed } from "@/components/debt-clock-embed"
import { PetitionCTA } from "@/components/petition-cta"
import { Section } from "@/components/section"
import { KPIStat } from "@/components/kpi-stat"
import { ArrowRight, BookOpen } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HomePage() {
  return (
    <main className="pb-24 md:pb-0">
      {/* Hero Section */}
      <Section className="pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-8 max-w-xl">
            <Image
              src="/up-to-us-logo.jpg"
              alt="Up to Us DBU logo"
              width={1024}
              height={585}
              priority
              sizes="(max-width: 768px) 90vw, 480px"
              className="h-auto w-full"
            />
          </div>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            It's Up To Us: Learn the Facts. Take Action.
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground/80">
            Join students across the country in understanding U.S. fiscal policy and advocating for a sustainable
            economic future.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/petition">
                Sign the Petition
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/quiz">Take the Quiz</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Why This Matters */}
      <Section className="bg-card">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-balance text-center text-3xl font-bold text-card-foreground">Why This Matters</h2>
          <p className="mt-4 text-pretty text-center text-muted-foreground">
            Understanding fiscal policy is crucial for our generation's future. The decisions made today will impact our
            economic opportunities for decades to come.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <KPIStat label="National Debt" value="$36T+" description="And growing every second" />
            <KPIStat label="Interest Payments" value="$1T+" description="Annual cost of servicing debt" />
            <KPIStat label="Debt per Citizen" value="$100K+" description="Your share of the national debt" />
          </div>
        </div>
      </Section>

      {/* Debt Clock Section */}
      <Section id="debt-clock">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <h2 className="text-balance text-3xl font-bold text-foreground">Live U.S. Debt Clock</h2>
            <p className="mt-4 text-pretty text-foreground/80">
              Watch the national debt grow in real-time. This third-party visualization updates continuously with
              official Treasury data.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Note: This embeds content from us-debt-clock.com, an independent third-party site.
            </p>
          </div>
          <DebtClockEmbed />
        </div>
      </Section>

      {/* Petition CTA Section */}
      <Section className="bg-card">
        <div className="mx-auto max-w-2xl">
          <PetitionCTA />
        </div>
      </Section>

      {/* Quiz CTA Section */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <Card className="overflow-hidden border-2 border-primary/20">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl text-card-foreground">Test Your Fiscal Policy Fluency</CardTitle>
              <CardDescription>
                Take our 10-question quiz to see how much you know about U.S. fiscal policy. Get instant feedback and
                learn from detailed explanations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild size="lg" className="w-full">
                <Link href="/quiz">Start the Quiz</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* FAQs */}
      <Section className="bg-card">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-balance text-center text-3xl font-bold text-card-foreground">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="mt-8">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-card-foreground">What is UpToUs?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                UpToUs is a national campus initiative that empowers students to engage with fiscal policy issues and
                advocate for sustainable economic solutions. We provide education, resources, and opportunities for
                civic engagement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-card-foreground">Why should I sign the petition?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Your signature demonstrates student support for responsible fiscal policy. Collective action from young
                people sends a powerful message to policymakers about the economic future we want to see.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-card-foreground">Is my information private?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. We collect only essential information for the petition and never sell or share your data with third
                parties. See our privacy policy for full details.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-card-foreground">How can I get more involved?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Visit our About page to learn about campus chapters, events, and volunteer opportunities. You can also
                follow us on social media for updates and ways to take action.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
        <Button asChild size="lg" className="w-full">
          <Link href="/petition">Sign the Petition</Link>
        </Button>
      </div>
    </main>
  )
}
