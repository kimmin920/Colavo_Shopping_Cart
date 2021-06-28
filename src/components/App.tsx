import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import Cart from './pages/Cart';
import Item from './pages/ItemList';
import Discount from './pages/DiscountList';
import { fetchSalonData } from '../store/salonSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getItems() {
      await dispatch(fetchSalonData());
    }

    getItems();
  }, [dispatch]);

  return (
    <AppContainer>
      <Router>
        <Switch>
          <Route exact path='/' component={Cart} />
          <Route exact path='/items' component={Item} />
          <Route exact path='/discount' component={Discount} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 400px;
  height: 600px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow};

  & > * {
    ${({ theme }) => css`
      animation: ${theme.keyframes.fadeInUp} .5s ease-in-out;
    `};
  }
`;
