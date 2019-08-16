const fetch = window.fetch;

const API_BASE = process.env.API_BASE;

export const executeRequest = ({ url, ...request }) => (
  fetch(`${API_BASE}${url}`, request)
  .then(response => response.json())
);
