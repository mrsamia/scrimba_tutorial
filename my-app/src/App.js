import './App.css';
import Card from './Components/Card';
import Map from './Components/Map';
import Header from './MemeGenerator/Header';
import CardMapping from './Practice/CardMapping';
import FifthPart from './Practice/FifthPart';
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

<div>
  <Header/>
</div>
      {/* <Map/>
      <CardMapping/>
      <ForthPart/>
      <FifthPart/>
      <ForthPart/> */}

    </div>
  );
}

export default App;
