import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
import ParticlesBg from './Components/ParticlesBg';


function App() {
  const router = routes
  return (
    <div className="App">
      <ParticlesBg></ParticlesBg>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
