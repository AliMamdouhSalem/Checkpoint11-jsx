import './App.css';
import './styles.css'
import cat from "./imageInSrc.jfif"
import video from "./myVideo.mp4"
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <>
      <div style={{border: "solid 1px black", maxWidth:"100vw"}}>
        <h1 className='title red'>Ali Mamdouh</h1>
        <br>
        </br>
        <img src={cat} alt="cat"/>
        <br>
        </br>
        <img src="/imageInPublic.jfif" alt="catto"/>
      </div>
      <video width="320" height="240" controls>
        <source src={video} type="video/mp4"/>
      </video>
      </>
      </header>
    </div>
  );
}

export default App;
