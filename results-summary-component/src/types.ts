export type SummaryTableListProps = {
  scoreCategory: ScoreCategoryItem[];
};

export type ScoreCategoryItem = {
  icon: string;
  category: string;
  score: number;
  color: string;
};

export enum ScoreCategoryColor {
  "Reaction" = "lightRed",
  "Memory" = "orangeyYellow",
  "Verbal" = "greenTeal",
  "Visual" = "cobaltBlue",
}
