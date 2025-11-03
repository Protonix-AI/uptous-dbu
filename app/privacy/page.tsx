import type { Metadata } from "next"
import { Section } from "@/components/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy Policy | UpToUs Campus Fiscal Awareness",
  description: "Our commitment to protecting your privacy and data.",
}

export default function PrivacyPage() {
  return (
    <main className="pb-16 md:pb-20">
      <Section className="pt-20 pb-12 md:pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground">Privacy Policy</h1>
          <p className="mt-4 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="mt-12 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">Our Commitment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  UpToUs is committed to protecting your privacy. This policy explains what information we collect, how
                  we use it, and your rights regarding your data.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">When you sign our petition, we collect:</p>
                <ul className="list-inside list-disc space-y-2 pl-4">
                  <li>Your name</li>
                  <li>Email address</li>
                  <li>Campus affiliation (optional)</li>
                </ul>
                <p className="leading-relaxed">
                  We use Plausible Analytics for website analytics, which does not collect personally identifiable
                  information or use cookies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">We use your information solely to:</p>
                <ul className="list-inside list-disc space-y-2 pl-4">
                  <li>Count petition signatures</li>
                  <li>Send occasional updates about our campaign (you can opt out anytime)</li>
                  <li>Demonstrate student support to policymakers</li>
                </ul>
                <p className="leading-relaxed">
                  We never sell, rent, or share your personal information with third parties for marketing purposes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">You have the right to:</p>
                <ul className="list-inside list-disc space-y-2 pl-4">
                  <li>Request a copy of your data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt out of email communications</li>
                  <li>Update your information</li>
                </ul>
                <p className="leading-relaxed">
                  To exercise these rights, email us at{" "}
                  <a href="mailto:privacy@uptous.org" className="text-primary hover:underline">
                    privacy@uptous.org
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">Data Security</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="leading-relaxed">
                  We use industry-standard security measures to protect your information. Our petition form is hosted on
                  Jotform, which maintains SOC 2 Type II compliance and uses encryption to protect data in transit and
                  at rest.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="leading-relaxed">
                  Questions about this privacy policy? Contact us at{" "}
                  <a href="mailto:privacy@uptous.org" className="text-primary hover:underline">
                    privacy@uptous.org
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </main>
  )
}
