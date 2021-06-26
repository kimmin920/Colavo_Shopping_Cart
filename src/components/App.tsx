import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Cart from './Cart';
import Item from './Item';
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
    <>
      <Cart />
      <Item />
    </>
  );
}

export default App;
