import './App.css';
import Anticipation from './components/Anticipation';
import InfoForm from './components/InfoForm';
import { CentralizedDiv } from './components/StyledComponents/centralizedDiv';

function App() {
  return (
    <div className="App-header">
      <CentralizedDiv>
        <InfoForm />
        <Anticipation />
      </CentralizedDiv>
    </div>
  );
}

export default App;
