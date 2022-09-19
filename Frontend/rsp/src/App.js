// import { Button } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn.jsx';
import Requests from './pages/Requests.jsx';
 
function App() {
  return (
    <div className="">
    <Router>
          <Routes>
              <Route path='/' element={<SignIn />} />
              <Route path='/requests' element={<Requests/>}/>
          </Routes>
      </Router>
  </div>
  );
}

export default App;
