import { Provider } from 'react-redux';
import store from '../store';
import Cart from './Cart';
import Item from './Item';

function App() {
  return (
    <Provider store={store}>
      <Cart />
      <Item />
    </Provider>
  );
}

export default App;
