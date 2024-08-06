import ReactDOM from 'react-dom/client'; // تغییر import به react-dom/client  
import App from './App';  
import './index.css';  

const root = ReactDOM.createRoot(document.getElementById('root')); // ایجاد ریشه  
root.render(<App />); // استفاده از متد render بر روی ریشه