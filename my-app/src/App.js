import './App.css';
import Card from './Components/Card';
import MemeGenerator from './MemeGenerator/MemeGenerator';
// import Map from './Components/Map';
// import CardMapping from './Practice/CardMapping';
// import FifthPart from './Practice/FifthPart';
// import ForthPart from './Practice/ForthPart';
import MainPage from './SoloProject/MainPage';
import Nav from './SoloProject/Nav';

function App() {
  return (
    <div className="App">
      <div className="main">
        <Nav />
        <MainPage />
      </div>
      <div className='main'>
       <MemeGenerator/>
      </div>
      <Card />
      {/* <Map/>
      <CardMapping/>
      <ForthPart/>
      <FifthPart/>
      <ForthPart/> */}

    </div>
  );
}

export default App;
