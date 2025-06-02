
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CityList from "./components/CityList";
import CityForecast from "./components/CityForeCast";
import './App.css'

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<CityList />} />
            <Route path="/forecast/:cityName" element={<CityForecast />} />
          </Routes>
        </Router>
    </div>
  )
}

export default App;