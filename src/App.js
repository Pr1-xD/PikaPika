import './App.css';
import Abhinav from './Abhinav';
import pikachuimg from './pikachuimg.png'
import Michelle from './Michelle';
import Keerthana from './Keerthana';
import Adrita from './Adrita';
import Doyel from './Doyel';

function App() {
  return (
    <div className="App">
      <br/><br/><br/>
      <h1>Pika Pika</h1>
      <Abhinav name="Charizard" h="5.07" cat="Flame" w="199.5 lbs" abilities="Blaze"/>
      <Michelle name="Clefairy" h="0.6" cat="Fairy" w="16.5 lbs" abilities="Magic Guard"/>
      <Michelle name="Squirtle" h="0.5" cat="Water" w="19.8 lbs" abilities="Torrent"/>
      {/* <Keerthana/> */}
      {/* <Adrita/> */}
      {/* <Doyel/> */}
      <br/><br/><br/>
      <img src={pikachuimg}/>
    </div>
  );
}

export default App;
