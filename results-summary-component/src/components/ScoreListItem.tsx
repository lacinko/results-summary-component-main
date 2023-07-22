import { ScoreCategoryItem } from "../types";

function ScoreListItem({
  icon,
  category,
  score,
  color,
}: ScoreCategoryItem): JSX.Element {
  return (
    <div
      className={`flex justify-between p-4 bg-${color} bg-opacity-10 rounded-lg`}
    >
      <div className="flex gap-2">
        <img src={icon} alt={category} />
        <p className={`text-${color}`}>{category}</p>
      </div>
      <p>
        {score} <span className="text-gray-400"> / 100</span>
      </p>
    </div>
  );
}

export default ScoreListItem;
