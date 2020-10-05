import { createStore } from 'redux';
import { persistStore } from 'redux-persist';

import rootReducer from './reducers/root-reducer';
import middlewares from './middlewares/middleware';


export const store = createStore(rootReducer, middlewares);

export const persistor = persistStore(store);