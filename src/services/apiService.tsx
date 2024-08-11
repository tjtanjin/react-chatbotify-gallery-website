const galleryApiFetch = (url: string, options = {}) => {
  return fetch(url, {
      ...options,
      credentials: 'include', // Always include credentials
  });
}

export {
  galleryApiFetch
}