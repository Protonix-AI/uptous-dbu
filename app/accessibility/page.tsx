import type { Metadata } from "next"
import { Section } from "@/components/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Accessibility | UpToUs Campus Fiscal Awareness",
  description: "Our commitment to making this site accessible to everyone.",
}

export default function AccessibilityPage() {
  return (
    <main>
      <Section className="pt-20 pb-12 md:pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground">Accessibility Statement</h1>
          <p className="mt-4 text-muted-foreground">We're committed to ensuring digital accessibility for all users.</p>

          <div className="mt-12 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">Our Commitment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  UpToUs is committed to ensuring that our website is accessible to people with disabilities. We strive
                  to meet WCAG 2.1 Level AA standards and continuously work to improve the user experience for everyone.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">Accessibility Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">Our website includes:</p>
                <ul className="list-inside list-disc space-y-2 pl-4">
                  <li>Semantic HTML for proper structure and navigation</li>
                  <li>Keyboard navigation support throughout the site</li>
                  <li>ARIA labels and roles for screen reader compatibility</li>
                  <li>Sufficient color contrast (minimum 4.5:1 ratio)</li>
                  <li>Descriptive link text and button labels</li>
                  <li>Alternative text for images</li>
                  <li>Responsive design for various screen sizes</li>
                  <li>Focus indicators for keyboard navigation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">Known Limitations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  The embedded U.S. Debt Clock is a third-party iframe that may have accessibility limitations. We
                  provide a fallback option with a direct link to the source and summary statistics for users who cannot
                  access the embedded version.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">Feedback</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="leading-relaxed">
                  We welcome feedback on the accessibility of our site. If you encounter any barriers or have
                  suggestions for improvement, please contact us at{" "}
                  <a href="mailto:accessibility@uptous.org" className="text-primary hover:underline">
                    accessibility@uptous.org
                  </a>
                </p>
                <p className="mt-4 leading-relaxed">
                  We aim to respond to accessibility feedback within 3 business days.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="leading-relaxed">
                  This website is built with modern web technologies including Next.js, React, and Tailwind CSS. It is
                  designed to be compatible with:
                </p>
                <ul className="mt-4 list-inside list-disc space-y-2 pl-4">
                  <li>Current versions of Chrome, Firefox, Safari, and Edge</li>
                  <li>Screen readers including NVDA, JAWS, and VoiceOver</li>
                  <li>Keyboard-only navigation</li>
                  <li>Browser zoom up to 200%</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </main>
  )
}
