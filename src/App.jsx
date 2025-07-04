//import './styles/App.css'
import Header from './components/Header'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./pages/Home"
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      {/*<Main />*/}
      {/*<Footer />*/}
    </Router>
  );
}

export default App;
