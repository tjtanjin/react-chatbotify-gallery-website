const handleLogin = (redirect_uri?: string) => {
	const client_id = import.meta.env.VITE_GITHUB_APP_CLIENT_ID

	let final_redirect_uri = redirect_uri as string
	if (!redirect_uri) {
		final_redirect_uri = window.location.href
	}

	// todo: abstract magic strings into a constants file
	localStorage.setItem('login_redirect_uri', final_redirect_uri)
	window.location.href = `https://github.com/login/oauth/authorize?client_id=${client_id}`
}

export { handleLogin }
