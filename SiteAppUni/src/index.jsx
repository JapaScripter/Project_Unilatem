/* =====Imports===== */
import ReactDOM from 'react-dom';
import App from './App'
import './App.css'
/* =====Imports===== */

/* =====Index===== */
const root = document.querySelector('#root')
/* Método Antigo */
ReactDOM.render(<App />, root);
/* Suportado apenas na versão 18° */
//ReactDOM.createRoot(root).render(<App />)
/* =====Index===== */
