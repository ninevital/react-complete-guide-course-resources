import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import ResultsTable from './components/ResultsTable';
import {calculateInvestmentResults} from './util/investment';

const initialInvestmentsData = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [investmentsData, setNewData] = useState(initialInvestmentsData);

const formIsValid = investmentsData.duration > 0;

function handleInputChange(event) {
    const { id, value } = event.target;
    const numericValue = +value; 

    setNewData(prevData => ({
      ...prevData,
      [id]: numericValue
    }));
  }

  return (
    <>
      <Header />
      <UserInput data={investmentsData} handleInputChange={handleInputChange} />
      {formIsValid ? <ResultsTable data={investmentsData} /> : <p className="center">Please enter positive value for duration field.</p>}
    </>
  )
}

export default App
