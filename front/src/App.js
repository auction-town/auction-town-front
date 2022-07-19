import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Mypage from './pages/Mypage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/Mypage" element={<Mypage />}></Route>
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
