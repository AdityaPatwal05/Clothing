import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';

import Homepage from './pages/homePage/homePage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SingInSignUp from './pages/signInSignUpPage/signInSignUp.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';
import { setCurrentUser} from './redux/user/user.actions.js';

class App extends React.Component {

  unSubscribeFromAuth = null;

  componentDidMount(){

    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot(snapShot => {
          setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
          })
        });        
      }
      
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/Clothing' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route 
            exact 
            path='/signin' 
            render={() => (
              this.props.currentUser ? 
              (<Redirect to='/' />) 
              : 
              (< SingInSignUp />)
              )}
              />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
