//react stuff
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//import Cookies from 'universal-cookie';

import './App.css';
import Home from './Home/home';
import Pricing from './Pricing/pricing';
import Stylists from './Stylists/stylists';
import Site from './Site/site';
import Appointments from './Appointments/appointments';
import Inspiration from './Inspiration/inspiration';


const App = () => {
  <style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
  </style>

  /*const cookies = new Cookies();
  cookies.set('myCat', 'Pacman', { path: '/' });
  console.log(cookies.get('myCat'));
*/


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/stylists' component={Stylists} />
        <Route path='/pricing' component={Pricing} />
        <Route path='/appointments' component={Appointments} />
        <Route path='/inspiration' component={Inspiration} />
        <Route path='/site' component={Site} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
