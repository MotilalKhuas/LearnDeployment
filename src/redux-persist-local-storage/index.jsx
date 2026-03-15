import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppRoute from './route';
import store, { persistor } from './store/store';

const Index = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
        <AppRoute />
      </PersistGate>
    </Provider>
  );
};

export default Index;
