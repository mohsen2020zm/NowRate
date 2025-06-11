import './App.css';
import Header from './Components/Header/Header';
import RateList from './Components/RateList/RateList'
import { Provider } from 'react-redux'
import { store } from './Data/Store'

function App() {
  return (
    <>
    <Provider store={store}>
      <Header />
      <main>
        <RateList />
      </main>
    </Provider>
    </>
  );
}

export default App;