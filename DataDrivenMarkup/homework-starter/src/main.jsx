import ReactDOM from 'react-dom/client';
import { ProductList } from './ProductList';

import { products } from './products';

import './main.css';

const reactRoot = ReactDOM.createRoot(document.getElementById('root'));

reactRoot.render(<ProductList products={products} />);
