import { configureStore } from '@reduxjs/toolkit';
import furniture from './createslice/furnitureslice';
import Session from './createslice/SessionSlice';

const store = configureStore({
  reducer: {
    furniturestate: furniture,
    sessionUser: Session,
  },
});

export default store;
