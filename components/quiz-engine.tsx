"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle2, XCircle, Share2, RotateCcw } from "lucide-react"
import { ScoreBadge } from "@/components/score-badge"

export interface QuizQuestion {
  id: string
  prompt: string
  choices: Array<{
    id: string
    label: string
  }>
  answer: string
  rationale: string
}

interface QuizEngineProps {
  questions: QuizQuestion[]
}

export function QuizEngine({ questions }: QuizEngineProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  // Load saved score from localStorage
  useEffect(() => {
    const savedScore = localStorage.getItem("quiz-last-score")
    if (savedScore && !showResults) {
      // Don't override if we're currently showing results
    }
  }, [showResults])

  const currentQuestion = questions[currentIndex]
  const progress = ((currentIndex + 1) / questions.length) * 100

  const handleAnswer = (answerId: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answerId,
    }))
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      // Calculate score
      const correctCount = questions.filter((q) => selectedAnswers[q.id] === q.answer).length
      const finalScore = Math.round((correctCount / questions.length) * 100)
      setScore(finalScore)
      setShowResults(true)
      localStorage.setItem("quiz-last-score", finalScore.toString())
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  const handleRetake = () => {
    setCurrentIndex(0)
    setSelectedAnswers({})
    setShowResults(false)
    setScore(0)
    localStorage.removeItem("quiz-last-score")
  }

  const handleShare = async () => {
    const shareText = `I scored ${score}% on the UpToUs Fiscal Policy Quiz! Test your knowledge at ${window.location.href}`

    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Fiscal Policy Quiz Score",
          text: shareText,
        })
      } catch (err) {
        // User cancelled or error occurred
        console.log("Share cancelled")
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(shareText)
      alert("Results copied to clipboard!")
    }
  }

  if (showResults) {
    return (
      <div className="space-y-6">
        <Card className="border-2 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-card-foreground">Quiz Complete!</CardTitle>
            <CardDescription>Here's how you did</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-center">
              <ScoreBadge score={score} />
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button onClick={handleRetake} variant="outline" className="flex-1 bg-transparent">
                <RotateCcw className="mr-2 h-4 w-4" />
                Retake Quiz
              </Button>
              <Button onClick={handleShare} className="flex-1">
                <Share2 className="mr-2 h-4 w-4" />
                Share Results
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Review Your Answers</h3>
          {questions.map((question, idx) => {
            const userAnswer = selectedAnswers[question.id]
            const isCorrect = userAnswer === question.answer
            const correctChoice = question.choices.find((c) => c.id === question.answer)
            const userChoice = question.choices.find((c) => c.id === userAnswer)

            return (
              <Card key={question.id}>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    {isCorrect ? (
                      <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="mt-1 h-5 w-5 text-red-600" />
                    )}
                    <div className="flex-1">
                      <CardTitle className="text-base text-card-foreground">Question {idx + 1}</CardTitle>
                      <CardDescription className="mt-1">{question.prompt}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-card-foreground">Your answer:</p>
                    <p className={`text-sm ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                      {userChoice?.label || "No answer selected"}
                    </p>
                  </div>
                  {!isCorrect && (
                    <div>
                      <p className="text-sm font-medium text-card-foreground">Correct answer:</p>
                      <p className="text-sm text-green-600">{correctChoice?.label}</p>
                    </div>
                  )}
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm text-muted-foreground">{question.rationale}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            Question {currentIndex + 1} of {questions.length}
          </span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-card-foreground">{currentQuestion.prompt}</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={selectedAnswers[currentQuestion.id] || ""}
            onValueChange={handleAnswer}
            className="space-y-3"
          >
            {currentQuestion.choices.map((choice) => (
              <div
                key={choice.id}
                className="flex items-center space-x-3 rounded-lg border border-border p-4 transition-colors hover:bg-muted"
              >
                <RadioGroupItem value={choice.id} id={choice.id} />
                <Label
                  htmlFor={choice.id}
                  className="flex-1 cursor-pointer text-sm leading-relaxed text-card-foreground"
                >
                  {choice.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      <div className="flex gap-2">
        <Button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          variant="outline"
          className="flex-1 bg-transparent"
        >
          Previous
        </Button>
        <Button onClick={handleNext} disabled={!selectedAnswers[currentQuestion.id]} className="flex-1">
          {currentIndex === questions.length - 1 ? "Finish" : "Next"}
        </Button>
      </div>
    </div>
  )
}
