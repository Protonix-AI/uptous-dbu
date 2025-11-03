interface ScoreBadgeProps {
  score: number
}

export function ScoreBadge({ score }: ScoreBadgeProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-primary"
    return "text-red-600"
  }

  const getScoreLabel = (score: number) => {
    if (score >= 90) return "Excellent!"
    if (score >= 80) return "Great Job!"
    if (score >= 70) return "Good Work!"
    if (score >= 60) return "Not Bad!"
    return "Keep Learning!"
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex h-32 w-32 items-center justify-center rounded-full border-8 border-primary/20 bg-card">
        <span className={`text-4xl font-bold ${getScoreColor(score)}`}>{score}%</span>
      </div>
      <p className="text-lg font-semibold text-card-foreground">{getScoreLabel(score)}</p>
    </div>
  )
}
