import FinalScoreBoard from "./components/FinalScoreBoard";
import SummaryTableList from "./components/SummaryTableList";

function App() {
  const scoreCategoryData = [
    {
      iconLink: "./icon-reaction.svg",
      category: "Reaction",
      score: 80,
      color: "lightRed",
    },
    {
      iconLink: "./icon-memory.svg",
      category: "Memory",
      score: 92,
      color: "orangeyYellow",
    },
    {
      iconLink: "./icon-verbal.svg",
      category: "Verbal",
      score: 61,
      color: "greenTeal",
    },
    {
      iconLink: "./icon-visual.svg",
      category: "Visual",
      score: 72,
      color: "cobaltBlue",
    },
  ];
  const sumOfScores = scoreCategoryData.reduce(
    (acc, curr) => acc + curr.score,
    0
  );
  const finalScore = +(
    (sumOfScores / (scoreCategoryData.length * 100)) *
    100
  ).toFixed(0);

  return (
    <div className="md:bg-gray-100 md:py-20 md>px-10">
      <div className="container max-w-[1440px] mx-auto w-full h-full md:flex md:justify-center md:items-center">
        <FinalScoreBoard finalScore={finalScore} />
        <SummaryTableList scoreCategory={scoreCategoryData} />
      </div>
    </div>
  );
}

export default App;
