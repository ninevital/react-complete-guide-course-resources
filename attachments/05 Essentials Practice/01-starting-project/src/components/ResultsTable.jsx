import { formatter, calculateInvestmentResults } from '../util/investment';

// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
//       interest: interestEarnedInYear, // the amount of interest earned in this year
//       valueEndOfYear: investmentValue, // investment value at end of year

export default function ResultsTable({data}) {
    const calculatedData = calculateInvestmentResults(data);
    const initialInvestment = data.initialInvestment || 0;

    return (
        <table id="result">
        <thead>
            <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {calculatedData.map((row) => (
                <tr key={row.year}>
                    <td>{row.year}</td>
                    <td>{formatter.format(row.valueEndOfYear)}</td> 
                    <td>{formatter.format(row.interest)}</td>
                    <td>{formatter.format(row.valueEndOfYear - row.annualInvestment * row.year - initialInvestment)}</td>
                    <td>{formatter.format(row.valueEndOfYear - (row.valueEndOfYear - row.annualInvestment * row.year - initialInvestment))}</td>
                </tr>
            ))}
        </tbody>
        </table>
    )
}