import { BrowserRouter, Routes, Route } from "react-router";
import './global.scss'

import MainLayout from './layouts/MainLayout.jsx'

import MainPage from './pages/MainPage.jsx'
import Leetcode from './pages/Leetcode.jsx'
import Codeforces from './pages/Codeforces.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/leetcode" element={<Leetcode />}/>
        <Route path="/codeforces" element={<Codeforces />}/>
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
