import logo from './logo.svg';
import './App.css';
import Friends from './Components/Friends/Friends';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Notfound from './Components/Notfound/Notfound';
import Header from './Components/Header/Header';
import FriendDetails from './Components/FriendDetails/FriendDetails';
import Culture from './Components/Culture/Culture';

function App() {
  return (
    <div className="App">
     <Header></Header>

      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="friends" element={<Friends />} />
        <Route path="/friend/:friendId" element={<FriendDetails />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<Notfound />} />
        <Route exact path="about/culture" element={<Culture />} />
      </Routes>
    </div>
  );
}

export default App;
