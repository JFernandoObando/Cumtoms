import packageInfo from '../../package.json';

export const environment = {
  appVersion: packageInfo.version,
  production: true,
  URL_BACKEND: 'http://127.0.0.1:8000/',
  URL_SERVICIOS: 'http://127.0.0.1:8000/api',
  URL_FRONTEND: 'http://localhost:4200'
};
