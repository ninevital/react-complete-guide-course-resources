//map ech row of data to a table row with 5 cells

export default function ResultsTable({data}) {
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
            {data.map((row, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{row.investmentValue}</td>
                    <td>{row.interestYear}</td>
                    <td>{row.totalInterest}</td>
                    <td>{row.toInvestedCapital}</td>
                </tr>
            ))}
        </tbody>
        </table>
    )
}