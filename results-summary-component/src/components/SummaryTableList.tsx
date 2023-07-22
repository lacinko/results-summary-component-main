import ScoreListItem from './ScoreListItem'

type SummaryTableListProps = {
  scoreCategory: ScoreCategoryItem[]
}

type ScoreCategoryItem = {
  iconLink: string
  category: string
  score: number
  color: string
}

function SummaryTableList({
  scoreCategory,
}: SummaryTableListProps): JSX.Element {
  return (
    <div className="my-6 mx-10">
      <p className="pb-4 font-medium text-lg">Summary</p>
      <ul className="flex flex-col gap-4 pb-4">
        {scoreCategory.map((score) => (
          <ScoreListItem {...score} key={score.category} />
        ))}
      </ul>
      <button className="w-full text-white bg-darkGrayBlue py-4 rounded-full hover:bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue">
        Continue
      </button>
    </div>
  )
}

export default SummaryTableList
