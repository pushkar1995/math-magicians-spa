import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import FetchedQuotesFromApi from './components/api';
import NavigationBar from './components/Navbar/Navbar';
import HomePage from './components/home';

function App() {
  return (
    <Router>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100vw',
        }}
      >
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quotes" element={<FetchedQuotesFromApi />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
