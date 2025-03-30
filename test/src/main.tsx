import './main.css'

import ReactDOM from 'react-dom/client'
// import { BrowserRouter, Routes, Route } from 'react-router'

import HomeView from './views/HomeView'
// import CompanyView from './views/CompanyView'
// import AboutView from './views/AboutView'

import MainLayout from './layout/MainLayout'

// import NotFound from './components/NotFound'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HomeView />,
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<MainLayout />}>
  //       <Route index element={<HomeView />} />

  //     </Route>
  //   </Routes>
  // </BrowserRouter>,
)
