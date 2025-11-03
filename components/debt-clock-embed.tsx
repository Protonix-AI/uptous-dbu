"use client"

import { useEffect, useState } from "react"
import { ExternalLink, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function DebtClockEmbed() {
  const [failed, setFailed] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Failover timeout if iframe doesn't load
    const timeout = setTimeout(() => {
      setFailed(true)
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])

  const handleIframeLoad = () => {
    setLoading(false)
  }

  const handleIframeError = () => {
    setFailed(true)
    setLoading(false)
  }

  if (failed) {
    return (
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="text-card-foreground">Live U.S. Debt Clock</CardTitle>
          <CardDescription>
            The source blocks embedding in some browsers. Open the live dashboard to view real-time fiscal data.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-muted p-6">
            <p className="mb-2 text-sm font-medium text-card-foreground">Current U.S. National Debt</p>
            <p className="text-3xl font-bold text-card-foreground">$36+ Trillion</p>
            <p className="mt-2 text-xs text-muted-foreground">
              Updated continuously. Visit the live clock for real-time data.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button asChild className="flex-1">
              <a
                href="https://www.us-debt-clock.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Open Live U.S. Debt Clock
                <span className="sr-only">(opens in new tab)</span>
              </a>
            </Button>
            <Button variant="outline" onClick={() => window.location.reload()} className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4" />
              Refresh
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="relative min-h-[clamp(320px,50vw,720px)] overflow-hidden rounded-xl border border-border bg-card">
      {loading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-card">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      )}
      <iframe
        title="U.S. Debt Clock"
        src="https://www.us-debt-clock.com/"
        className="h-[clamp(320px,50vw,720px)] w-full"
        onLoad={handleIframeLoad}
        onError={handleIframeError}
      />
    </div>
  )
}
