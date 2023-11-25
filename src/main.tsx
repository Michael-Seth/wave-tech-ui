import 'react-toastify/dist/ReactToastify.css';


import App from 'app';
import ErrorBoundaryFallback from 'app/components/ErrorBoundaryFallback';
import { persistor, store } from 'app/store';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';


const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ToastContainer
            position="top-right"
            autoClose={7000}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            bodyClassName="__toastify"
            theme="colored"
            hideProgressBar
          />
          <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
            <App />
          </ErrorBoundary>
        </BrowserRouter>
    </PersistGate>
  </Provider>
);
