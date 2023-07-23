import { useEffect, useState } from "react";
import FinalScoreBoard from "./components/FinalScoreBoard";
import SummaryTableList from "./components/SummaryTableList";
import { ScoreCategoryColor, ScoreCategoryItem } from "./types";

function App() {
  const [score, setScore] = useState<ScoreCategoryItem[]>([]);

  async function fetchData() {
    const response = await fetch("./data.json");
    const data = await response.json();

    const scoreCategoryData = data.map((item: ScoreCategoryItem) => {
      const colorName =
        ScoreCategoryColor[item.category as keyof typeof ScoreCategoryColor];
      return {
        icon: item.icon,
        category: item.category,
        score: item.score,
        color: colorName,
      };
    });
    console.log(scoreCategoryData);
    setScore(scoreCategoryData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const sumOfScores = score.reduce((acc, curr) => acc + curr.score, 0);
  const finalScore = +((sumOfScores / (score.length * 100)) * 100).toFixed(0);

  return (
    <div className="md:bg-gray-100 md:py-20 md>px-10">
      <div className="container max-w-[1440px] mx-auto w-full h-full md:flex md:justify-center md:items-center">
        <FinalScoreBoard finalScore={finalScore} />
        <SummaryTableList scoreCategory={score} />
      </div>
    </div>
  );
}

export default App;
