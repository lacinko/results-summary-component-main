import ScoreListItem from "./ScoreListItem";

type SummaryTableListProps = {
  scoreCategory: ScoreCategoryItem[];
};

type ScoreCategoryItem = {
  iconLink: string;
  category: string;
  score: number;
  color: string;
};

function SummaryTableList({
  scoreCategory,
}: SummaryTableListProps): JSX.Element {
  return (
    <div className="my-6 mx-10 md:w-full md:max-w-sm md:rounded-tr-[2rem] md:rounded-br-[2rem] md:p-8 md:pl-12 md:m-0 md:ml-[-1rem] bg-white">
      <p className="pb-4 md:font-bold text-lg md:pb-7 md:text-xl">Summary</p>
      <ul className="flex flex-col gap-4 pb-4 md:pb-9">
        {scoreCategory.map((score) => (
          <ScoreListItem {...score} key={score.category} />
        ))}
      </ul>
      <button className="w-full text-white bg-darkGrayBlue py-4 rounded-full hover:bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue">
        Continue
      </button>
    </div>
  );
}

export default SummaryTableList;
