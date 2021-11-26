import './App.scss';
import Header from './components/Header/Header';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ProductData from './ProductData/ProductData'

function App() {
  return (
    <div className="App">
      <Header />
      <ProductDetail {...ProductData}/>
    </div>
  );
}

export default App;
