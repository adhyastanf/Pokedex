import './App.css';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <div className='App'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/details/:id' element={<Details />} />
            </Routes>
          </div>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
