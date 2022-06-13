import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
//import FooterImport from './components/old_Imports/footerImport/containers/footer'

import Navbar from './components/navbar/Navbar';
import HomeScreens from './components/screens/HomeScreen'
import ProductScreen from './components/screens/ProductScreen'
import Cafeteria from './components/screens/CafeteriaScreen'
import ProductPageScreen from './components/screens/ProductPageScreen'
import LoginScreen from './components/screens/LoginScreen'
import RegisterScreen from './components/screens/RegisterScreen'

//import Bieres from './components/screens/new screens/Vins-folder/bieres'
//import VinRouge from './components/screens/new screens/Vins-folder/vin-rouge'
//import VinBlanc from './components/screens/new screens/Vins-folder/vin-blanc'
//import Champagne from './components/screens/new screens/Vins-folder/champagne'
//import VinRose from './components/screens/new screens/Vins-folder/vin-rose'
//import Autres from './components/screens/new screens/Vins-folder/autres'




function App() {
  return (
    <Router>
      <Navbar/>
      
      <main className="py-3">
          <Switch>
          <Route path='/' component={HomeScreens} exact/>
          <Route path='/login' component={LoginScreen}/>
          <Route path='/register' component={RegisterScreen}/>
          <Route path='/product/:id' component={ProductScreen}/>
          <Route path='/cafeteria' component={Cafeteria}/>
          <Route path='/produits' component={ProductPageScreen}/>

          

          {/*
          <Route path='/Vins' component={VinRouge}/>
          <Route path='/vinrouge' component={VinRouge}/>
          <Route path='/vinblanc' component={VinBlanc}/>
          <Route path='/vinrose' component={VinRose}/>
          <Route path='/champagne' component={Champagne}/>
          <Route path='/bieres' component={Bieres}/>
  <Route path='/autres' component={Autres}/>*/}



          </Switch>
      </main>
      <Footer/>
    </Router>
 
  );
}

export default App;
