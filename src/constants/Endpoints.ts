// endpoints for making requests
export const Endpoints = {
	fetchApiThemes: `${import.meta.env.VITE_GALLERY_API_URL}/api/v1/themes`,
  fetchUserData: `${import.meta.env.VITE_GALLERY_API_URL}/api/v1/auth/login/process`,
  fetchCacheThemes: import.meta.env.VITE_GITHUB_THEMES_CACHE_URL,
  gitHubLoginUrl: "https://github.com/login/oauth/authorize"
}
