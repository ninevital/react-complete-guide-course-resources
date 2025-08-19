import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import ResultsTable from './components/ResultsTable';

const initialInvestmentsData = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0
};

function App() {
  const [investmentsData, setNewData] = useState(initialInvestmentsData);
  const [yearData, setNewYearData] = useState([{
    investmentValue: 2,
    interestYear: 2,
    totalInterest: 3,
    toInvestedCapital: 4,
  },
{
    investmentValue: 2,
    interestYear: 2,
    totalInterest: 3,
    toInvestedCapital: 4,
  },
{
    investmentValue: 2,
    interestYear: 2,
    totalInterest: 3,
    toInvestedCapital: 4,
  }]);

  function handleInputChange(event) {
  const { id, value } = event.target;
  setNewData(prevData => ({
    ...prevData,
    [id]: value
  }));
}

  return (
    <div className='main'>
    <Header />
    <UserInput data={investmentsData} handleInputChange={handleInputChange} />
    <ResultsTable data={yearData} />
    </div>
  )
}

export default App
