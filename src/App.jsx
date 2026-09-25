import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { BrowserRouter, Routes, Route} from 'react-router-dom'; // NOVO

// Importando o componente Header
// import Header from './components/Header'; // NOVO
import Home from './pages/Home'; // NOVO

import Login from './pages/Login'; // NOVO
import RecipePage from './pages/RecipePage'
import MainLayout from './layouts/MainLayout'; // NOVO


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recipe" element={<RecipePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
