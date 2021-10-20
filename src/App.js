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
      <Abhinav/>
      {/* <Michelle/> */}
      {/* <Keerthana/> */}
      {/* <Adrita/> */}
      {/* <Doyel/> */}
      <br/><br/><br/>
      <img src={pikachuimg}/>
    </div>
  );
}

export default App;
