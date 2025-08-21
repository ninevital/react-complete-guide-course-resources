import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import ResultsTable from './components/ResultsTable';
import {calculateInvestmentResults} from './util/investment';

const initialInvestmentsData = {
  initialInvestment: null,
  annualInvestment: null,
  expectedReturn: null,
  duration: null
};

function App() {
  const [investmentsData, setNewData] = useState(initialInvestmentsData);

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
      <ResultsTable data={investmentsData} />
    </>
  )
}

export default App
