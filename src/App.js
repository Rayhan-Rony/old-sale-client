import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';

function App() {
  return (
    <div className='bg-slate-300'>
      <div className='w-11/12 mx-auto'>
        <RouterProvider router={router}></RouterProvider>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </div>
    </div>

  );
}

export default App;
