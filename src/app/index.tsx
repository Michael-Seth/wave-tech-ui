import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Auth = lazy(() => import('features/auth/views/Auth'));

function App() {
  return (
    <Routes>
      <Route
        path="/auth/*"
        element={
            <Auth />
        }
      />
      <Route path="/" element={<Navigate to="/auth" />} />
    </Routes>
  );
}

export default App;
