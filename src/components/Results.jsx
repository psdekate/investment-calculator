import { calculateInvestmentResults, formatter } from "../investment";

export function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment =
    resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;
  console.log(resultsData);
  return (
    <table>
      <tr>
        <th>Year</th>
        <th>Invested Capital</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
      </tr>

      <tbody>
        {resultsData.map((item) => {
          const totalInterest =
            item.valueEndOfYear - item.annualInvestment * item.year - initialInvestment;
          const totalAmountInvested = item.valueEndOfYear - totalInterest;

          return (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
