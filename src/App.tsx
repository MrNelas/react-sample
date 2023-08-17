import {Product} from './components/product'
import {Loader} from './components/loader'
import { useProducts } from './hooks/products';
import { ErrorMessage } from './components/errorMessage';
import { Modal } from './components/modal';
import { CreateProduct } from './components/createProduct';


function App() {
  const {loading, error, products} = useProducts()

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader/>}
      { error && <ErrorMessage error={error}/>}
      { products.map(product => <Product product={product} key={product.id}/>) }

      <Modal title="Create new product">
        <CreateProduct/>
      </Modal>
    </div>
  );
}

export default App;
