import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
//import FooterImport from './components/old_Imports/footerImport/containers/footer'

import HomeScreens from './components/screens/HomeScreen'
import ProductScreen from './components/screens/ProductScreen'
import Cafeteria from './components/screens/CafeteriaScreen'
import ProductPageScreen from './components/screens/ProductPageScreen'

function App() {
  return (
    
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
          <Switch>
          <Route path='/' component={HomeScreens} exact/>
          <Route path='/product/:id' component={ProductScreen}/>
          <Route path='/cafeteria' component={Cafeteria}/>
          <Route path='/produits' component={ProductPageScreen}/>
          </Switch>
        </Container>
      </main>
      <Footer/>
    </Router>
 
  );
}

export default App;
