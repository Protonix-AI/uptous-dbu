import type { Metadata } from "next"
import Image from "next/image"
import { Section } from "@/components/section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, Users, Target, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "About | UpToUs Campus Fiscal Awareness",
  description: "Learn about the UpToUs campus initiative and our mission to engage students in fiscal policy.",
}

export default function AboutPage() {
  return (
    <main className="pb-16 md:pb-20">
      <Section className="pt-20 pb-12 md:pt-32">
        <div className="mx-auto max-w-4xl">
          <div className="flex justify-center">
            <Image
              src="/up-to-us-logo.jpg"
              alt="Up to Us DBU logo"
              width={320}
              height={320}
              className="h-32 w-auto rounded-full border border-border/40 bg-white object-contain p-4 shadow-sm sm:h-40"
              priority
            />
          </div>

          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">About UpToUs DBU</h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground/80">
              Empowering students to engage with fiscal policy and advocate for a sustainable economic future.
            </p>
          </div>

          <div className="mt-16 space-y-12">
            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl text-card-foreground">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="leading-relaxed">
                  UpToUs is a national campus initiative that educates and mobilizes students around fiscal policy
                  issues. We believe that young people have a vital stake in the economic decisions being made today,
                  and we're committed to ensuring their voices are heard in the policy process.
                </p>
                <p className="mt-4 leading-relaxed">
                  Through education, advocacy, and civic engagement, we're building a movement of fiscally informed
                  students who are ready to shape the economic future of our country.
                </p>
              </CardContent>
            </Card>

            <div className="grid gap-6 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-card-foreground">Campus Chapters</CardTitle>
                  <CardDescription>Join or start a chapter at your university</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  We have active chapters on over 200 campuses nationwide. Each chapter hosts events, workshops, and
                  advocacy campaigns tailored to their campus community.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-card-foreground">Our Values</CardTitle>
                  <CardDescription>What guides our work</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  We're nonpartisan, evidence-based, and student-led. We believe in civil discourse, long-term thinking,
                  and the power of informed civic engagement.
                </CardContent>
              </Card>
            </div>

            <Card id="team">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Our Team</CardTitle>
                <CardDescription>This campus initiative is led by students, for students</CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="leading-relaxed">
                  Our campus team consists of passionate student leaders from diverse academic backgrounds—economics,
                  political science, public policy, and more. We're united by a shared commitment to fiscal
                  responsibility and intergenerational equity.
                </p>
                <p className="mt-4 leading-relaxed">
                  Want to get involved? We're always looking for motivated students to join our team and help expand our
                  impact.
                </p>
              </CardContent>
            </Card>

            {/*
            <Card id="contact">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl text-card-foreground">Get in Touch</CardTitle>
                <CardDescription>Questions? Want to get involved? We'd love to hear from you.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Email us at{" "}
                  <a href="mailto:campus@uptous.org" className="text-primary hover:underline">
                    campus@uptous.org
                  </a>
                </p>
                <Button asChild>
                  <Link href="/petition">Join the Movement</Link>
                </Button>
              </CardContent>
            </Card>
            */}

            <div className="flex justify-center">
              <Button asChild>
                <Link href="/petition">Join the Movement</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}
