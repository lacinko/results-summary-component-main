type ScoreListItemProps = {
  iconLink: string
  category: string
  score: number
  color: string
}

function ScoreListItem({
  iconLink,
  category,
  score,
  color,
}: ScoreListItemProps): JSX.Element {
  return (
    <div
      className={`flex justify-between p-4 bg-${color} bg-opacity-10 rounded-lg`}
    >
      <div className="flex gap-2">
        <img src={iconLink} alt={category} />
        <p className={`text-${color}`}>{category}</p>
      </div>
      <p>
        {score} <span className="text-gray-400"> / 100</span>
      </p>
    </div>
  )
}

export default ScoreListItem
