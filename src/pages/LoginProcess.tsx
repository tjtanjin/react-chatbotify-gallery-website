import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginProcessPage = () => {
	const { setUserData, setIsLoggedIn } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const queryParams = new URLSearchParams(location.search);
		const uuid = queryParams.get('uuid');
		const type = queryParams.get('type')
		const fetchUserData = async () => {
			// todo: abstract into a constants file
			const url = `https://rcb-gallery-api.tjtanjin.com/api/v1/auth/login/process?type=${type}&uuid=${uuid}`;
			const response = await fetch(url, {
				method: 'GET',
				credentials: 'include'
			});

			if (!response.ok) {
				throw new Error('Failed to fetch user data');
			}
			
			setUserData(await response.json());
			setIsLoggedIn(true);

			const redirectUri = localStorage.getItem("login_redirect_uri");
			if (redirectUri) {
				window.location.href= redirectUri
			} else {
				navigate("/themes");
			}
		}
		fetchUserData();
	}, [navigate]);

	// todo: render a loading spinner in the middle of the screen
	return null;
};

export default LoginProcessPage;