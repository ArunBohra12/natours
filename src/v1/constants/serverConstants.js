export const SERVER_BASE_URL =
  import.meta.env.MODE === 'production'
    ? import.meta.env.VITE_SERVER_BASE_URL
    : 'http://localhost:3000';