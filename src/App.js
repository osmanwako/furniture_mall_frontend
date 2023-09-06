import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Layout from './layout';
import { getSession } from './redux/createslice/SessionSlice';
import getFurnitures from './redux/createslice/furnitureaction';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSession());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFurnitures());
  }, [dispatch]);

  console.log('App.js');

  return (
    <Layout />
  );
}

export default App;
