import type { Metadata } from "next"
import { Section } from "@/components/section"
import { QuizEngine, type QuizQuestion } from "@/components/quiz-engine"
import quizData from "@/data/quiz.json"

export const metadata: Metadata = {
  title: "Fiscal Policy Quiz | UpToUs Campus Fiscal Awareness",
  description:
    "Test your knowledge of U.S. fiscal policy with our interactive quiz. Get instant feedback and learn from detailed explanations.",
}

export default function QuizPage() {
  // Select a random set of 10 questions and shuffle their order on each render
  const getRandomQuestions = (allQuestions: QuizQuestion[], count = 10): QuizQuestion[] => {
    const copy = [...allQuestions]
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy.slice(0, count)
  }

  const randomTen = getRandomQuestions(quizData as QuizQuestion[], 10)

  return (
    <main>
      <Section className="pt-20 pb-12 md:pt-32">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Test Your Fiscal Policy Knowledge
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground/80">
              Take a randomized 10-question quiz to see how much you know about U.S. fiscal policy. You'll get instant
              feedback with detailed explanations for each question.
            </p>
          </div>

          <QuizEngine questions={randomTen} />
        </div>
      </Section>
    </main>
  )
}
