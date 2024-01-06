/* eslint-disable react/react-in-jsx-scope */
import {Provider} from 'react-redux';
import Routes from './src/navigation';
import 'react-native-gesture-handler';
import {store} from './src/store';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
