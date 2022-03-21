import './App.css';
import Card from './Components/Card';
import Map from './Components/Map';
import CardMapping from './Practice/CardMapping';
import ForthPart from './Practice/ForthPart';
import MainPage from './SoloProject/MainPage';
import Nav from './SoloProject/Nav';

function App() {
  return (
    <div className="App">
      <h1>React</h1>
      <Card />
      <div className="main">
        <Nav />
        <MainPage />
      </div>

      {/* <Map/>
      <CardMapping/>
      <ForthPart/> */}
    </div>
  );
}

export default App;
