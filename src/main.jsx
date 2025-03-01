import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";



import Layout from './page/header-footer/Layout.jsx';
import AboutPage from './page/AboutPage.jsx';
import '../src/css/style.css'
import UploadPage from './page/UploadPage.jsx';
import ExtractPage from './page/ExtractPage.jsx';
import { AppProvider } from './componen/context/AppProvider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<UploadPage />} />
            <Route path='extract' element={<ExtractPage />} />
            <Route path='about' element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>



  </StrictMode>
)
