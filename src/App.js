import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/login';

function App() {
  return (
    <Router>
			<Routes>
				<Route exact path="/" element={<Login />} />
			</Routes>
	</Router>
  );
}

export default App;
