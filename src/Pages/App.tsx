import '../CSS/App.css';
import ThreeScene from '../ThreeJS/TestRender.tsx';

function App() {
  return (
    <>
      <div>
        <div className='introTitle'>
          <h1>Basic 3D Testing</h1>
          <p>Using ThreeJS</p>
        </div>
        <ThreeScene debugMode={false}></ThreeScene>
      </div>
      <div className='mainContent'>
        <h1> -- Page Content -- </h1>
      </div>
    </>
  )
}

export default App;
