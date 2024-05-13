import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import AuthConfiguration from './assets/Components/Layout/Authconfiguration/Authconfiguration';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { HelmetProvider } from 'react-helmet-async';
// ..
AOS.init();
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
    <AuthConfiguration>
    <RouterProvider router={router} />
    </AuthConfiguration>
    </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
