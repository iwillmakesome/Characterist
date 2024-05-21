
import ReactDOM from 'react-dom/client'
import GlobalStyles from "./styles/globalStyles.js";
import {RouterProvider} from "react-router-dom";
import {router} from './pages/router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyles />
    <RouterProvider router={router} />
  </>,
)
