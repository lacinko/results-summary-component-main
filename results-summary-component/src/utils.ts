export function getFinalScore(
  sumOfScores: number,
  categoriesNum: number
): number {
  return +((sumOfScores / (categoriesNum * 100)) * 100).toFixed(0)
}
