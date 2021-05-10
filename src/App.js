import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { BrowserRouter,HashRouter,Route, Switch } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import Home from './Components/Home/Home';
import Error404 from './Components/Error/404';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import Preloader from './Components/Preloader/Preloader';
import CreateUserContainer from './Components/CreateUser/CreateUserContainer';
import EditUserContainer from './Components/EditUser/EditUserContainer';

window.store = store;
function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <Header/>
          <div className="main">
            
              <Switch>
                <Route path="/user/:id/edit" component={EditUserContainer}/>
                <Route path="/user/:id" component={ProfileContainer}/>
                <Route path="/users" component={UsersContainer}/>
                <Route path="/create" component={CreateUserContainer}/>
                <Route exact  path="/" component={Home}/>
                <Route path="/preloader" component={Preloader}/>
                <Route path="*" component={Error404}/>
                
              </Switch>
              
            
            
          </div>
          <Footer/>
        </div>
      </HashRouter>
    </Provider>
  );
}




export default App;