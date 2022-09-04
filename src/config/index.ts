const BASE_API_URL = process.env.REACT_APP_API_URL;
if (!BASE_API_URL) throw Error('No REACT_APP_API_URL in .env presented');

export {
  BASE_API_URL,
};
