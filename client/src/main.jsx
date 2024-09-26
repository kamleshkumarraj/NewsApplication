import ReactDOM from 'react-dom/client';
import { RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import './index.css'
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { router } from './route.jsx';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition = {Bounce}
      bodyClassName="toastBody"
    />
    <RouterProvider  router={router}/>
  </Provider>
);


