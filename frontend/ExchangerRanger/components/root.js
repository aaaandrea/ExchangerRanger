import { Provider } from 'react-redux';
// creates our Redux store (elsewhere)
import Login from './login';
import Register from './register';
import Splash from '../splash';
import configureStore from '../store/store';

const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={Splash}>
          <Route path="/login" component={Login} onEnter={_redirectIfLoggedIn} />
          <Route path="/register" component={Register} onEnter={_redirectIfLoggedIn} />
          </Route>
      </Router>
    </Provider>
  );
};
