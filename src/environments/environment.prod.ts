export const environment = {
  production: false,
  version: '0.1',
  name: 'ENV_NAME',
  locale: 'en',
  homeRoot: '/',
  providers: {
    api: {
      url: 'https://api.dirox.app',
      auth: {
        type: 'Bearer'
      }
    }
  }
};