import '../styles/App.css';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import Addstory from './Addstory';
import Bookmark from './Bookmark';
import Viewstory from './Viewstory';

import { createBrowserRouter, RouterProvider} from 'react-router-dom'
const router = createBrowserRouter([
  {
    path : '/',
    element : <Home></Home>

  },
  {
    path : '/Register',
    element : <Register></Register>
  },
  {
    path : '/Login',
    element : <Login></Login>
  },
  {
    path : '/Dashboard',
    element :<Dashboard></Dashboard>
  },
  {
    path : '/Addstory',
    element :<Addstory></Addstory>
  },
  {
    path : '/Bookmark',
    element :<Bookmark></Bookmark>
  },
  {
    path : '/Viewstory/:index',
    element :<Viewstory></Viewstory>
  },
])
function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App