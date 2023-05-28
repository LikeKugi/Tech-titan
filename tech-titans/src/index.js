import React from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider} from "react-query";
import {Provider} from "react-redux";

import './assets/styles/global.css';

import App from "./App";
import {store} from "./store";
import AuthProvider from "./providers/AuthProvider";



const queryClient = new QueryClient()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <AuthProvider>
              <App/>
            </AuthProvider>
          </Provider>
        </QueryClientProvider>
    </React.StrictMode>
);
