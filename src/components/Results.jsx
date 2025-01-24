import { calculateInvestmentResults } from "../investment";

export function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  console.log(resultsData);
  return <></>;
}
