import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import HomePage from './pages/Home'
import reportWebVitals from './reportWebVitals';
import ErrorPage from './pages/NotFound-Page'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from './pages/About';
import ThemesPage from './pages/Themes';
import UserProfilePage from './pages/UserProfile';

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
		errorElement: <ErrorPage />, // For errors displaying web pages or NotFound pages
	},
	{
		path: "/themes",
		element: <ThemesPage />,
	},
	{
		path: "/about",
		element: <AboutPage />,
	},
	// todo: this is a protected route, only for users who are logged in
	{
		path: "/profile",
		element: <UserProfilePage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals