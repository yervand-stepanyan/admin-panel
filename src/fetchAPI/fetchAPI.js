async function request({ routeAPI, url, method, body, id }) {
  const fetchData = body
    ? {
        body: JSON.stringify(body) || '',
        headers: {
          'Content-Type': 'application/json',
        },
        method,
      }
    : {
        method,
      };

  const response = await fetch(
    `${routeAPI}/api/${url}${id ? `/${id}` : ''}`,
    fetchData
  );

  return response.json();
}

const API = {
  get: (routeAPI, url) => request({ routeAPI, url, method: 'GET' }),
  post: (routeAPI, url, body) =>
    request({ routeAPI, url, method: 'POST', body }),
  delete: (routeAPI, url, id) =>
    request({ routeAPI, url, method: 'DELETE', id }),
};

export default API;
