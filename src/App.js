import './App.css';
import HomePage from './components/Navigation/HomePage/Home.jsx';
import Pecati from './components/Navigation/Pecati/Pecati.jsx';
import Faq from './components/Navigation/Faq/Faq.jsx';
import Nama from './components/Navigation/oNama/Nama.jsx';
import Korpa from './components/Navigation/Korpa/Korpa';
import NatpisiVrata from './components/Navigation/natpisiVrata/NatpisiVrata.jsx';



import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
    { path: '/', element: <HomePage/>},
    { path: '/natpisi-za-vrata', element: <NatpisiVrata/>},
    { path: '/pecati', element: <Pecati/>},
    { path: 'o-nama', element: <Nama/>},
    { path: '/faq', element: <Faq/>},
    { path: '/korpa', element: <Korpa/>}
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
