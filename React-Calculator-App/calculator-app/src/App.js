import logo from './logo.svg';
import './App.css';
import Disply from './Components/Display';
import ButtonsContainer from './Components/Buttons-Container';

function App() {
  return (
    <>
      <center>
      <div className='calculator'>
        <Disply></Disply>
        <ButtonsContainer></ButtonsContainer>
      </div>
      </center>
    </>
  );
}

export default App;
