import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import HomePage from './pages/Home'
import reportWebVitals from './reportWebVitals';
import ErrorPage from './pages/NotFound-Page'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from './pages/About';
import UserProfilePage from './pages/UserProfile';

const router = createBrowserRouter([
	{
	  path: "/",
	  element: <HomePage />,
	  errorElement: <ErrorPage />, // For errors displaying web pages or NotFound pages
	},
	{
	  path: "/about",
	  element: <AboutPage />,
	},
	{
	  path: "/UserProfile",
	  element: <UserProfilePage />,
	},
]);

// The above code replaces this code 

// const AppRoutes = () => {
//     return (
//         <Routes>
//             <Route path="/" element={<Home />} />
//         </Routes>
//     );
// };

// const App = () => {
//     return (
//         <div className="App">
//             <Router>
//                 <AppRoutes />
//             </Router>
//         </div>
//     );
// };

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
	  <RouterProvider router={router} />
	</React.StrictMode>
);
reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals