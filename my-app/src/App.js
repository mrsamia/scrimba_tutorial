import './App.css';
import Card from './Components/Card';
import MemeGenerator from './MemeGenerator/MemeGenerator';
import BbcMap from './Practice/BbcMap';
// import Map from './Components/Map';
// import CardMapping from './Practice/CardMapping';
// import FifthPart from './Practice/FifthPart';
// import ForthPart from './Practice/ForthPart';
import MainPage from './SoloProject/MainPage';
import Nav from './SoloProject/Nav';
import Accordion from './UseState/Accordion';
import AccordionThree from './UseState/AccordionThree';
import AccordionTwo from './UseState/AccordionTwo';
import Hook from './UseState/Hook';
import HookFour from './UseState/HookFour';
import HookTest from './UseState/HookTest';
import HookThree from './UseState/HookThree';
import HookTwo from './UseState/HookTwo';

function App() {
  return (
    <div className="App">
      <div className="main">
        <Nav />
        <MainPage />
      </div>
      <div className='main'>
        <MemeGenerator />
      </div>
      <Card />
      <div>
        <h2>React Hook Practice</h2>
        <Hook />
        <HookTwo />
        <HookThree />
        <HookFour/>
        <HookTest/>
        <Accordion/>
        <AccordionTwo/>
        <AccordionThree/>
        
      </div>
      <BbcMap />
     

      {/* <Map/>
      <CardMapping/>
      <ForthPart/>
      <FifthPart/>
      <ForthPart/> */}

    </div>
  );
}

export default App;
