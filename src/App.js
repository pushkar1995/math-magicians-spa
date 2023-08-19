import './App.css';
import Calculator from './components/calculator';
import FetchedQuotesFromApi from './components/api';

function App() {
  return (
    <div className="app">
      <Calculator />
      <div className="quotes-container">
        <FetchedQuotesFromApi />
      </div>
    </div>
  );
}

export default App;
