import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-semibold text-card-foreground">About</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-card-foreground">
                  About UpToUs
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="hover:text-card-foreground">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-card-foreground">Take Action</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/petition" className="hover:text-card-foreground">
                  Sign Petition
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="hover:text-card-foreground">
                  Take Quiz
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-card-foreground">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://www.us-debt-clock.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-card-foreground"
                >
                  U.S. Debt Clock
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-card-foreground">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-card-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="hover:text-card-foreground">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} UpToUs Campus Initiative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
