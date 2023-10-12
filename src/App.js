import logo from './logo.svg';
import './App.css';
import HomeDesktop from './Home/HomeDesktop/Home.js';
import HomePhone from './Home/HomePhone/Home.js';
import { Desktop, Mobile, Tablet } from './MediaQueries.js';
import './Body.css'

function App() {
  return (
    <div className="app">
      <Desktop>
        <HomeDesktop />
      </Desktop>
      <Mobile>
        <HomePhone/>
      </Mobile>
      <Tablet>

      </Tablet>
    </div>
  );
}

export default App;
