import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import {
  Route,
  Switch,
  Link,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import Cart from './Cart';
import Item from './Item';
import Discount from './Discount';
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
        <Link to='/items'>+ 시술</Link>
        <Link to='/discount'>- 할인</Link>
        <Link to='/'>카트</Link>
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

const ColumnBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const AppContainer = styled.div`
  width: 400px;
  height: 600px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  box-shadow: ${({ theme }) => theme.boxShadow};

  & > div {
    ${({ theme }) => css`
      animation: ${theme.keyframes.fadeInUp} .5s ease-in-out;
    `};
  }
`;
