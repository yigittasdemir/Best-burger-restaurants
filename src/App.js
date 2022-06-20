import './Main.css';
import Ankara from './Components/ankara';
import Istanbul from './Components/istanbul';
import Izmir from './Components/izmir';
import Anasayfa from './Components/Anasayfa';
import {Link,Switch,Route,useParams} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header>
        <ul>
          <li><Link to="/">Anasayfa</Link></li>
          <li><Link to="Izmir">İzmir</Link></li>
          <li><Link to="Istanbul">İstanbul</Link></li>
          <li><Link to="Ankara">Ankara</Link></li>
        </ul>
      </header>
      <Switch>
        <Route path='/' exact><Anasayfa/></Route>
        <Route path='/ankara'><Ankara/></Route>
        <Route path='/istanbul'><Istanbul/></Route>
        <Route path='/izmir'><Izmir/></Route>
      </Switch>
    </div>
  );
}

export default App;
