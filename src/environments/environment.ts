export const environment = {
  production: false,
  version: '0.1',
  name: 'ENV_NAME',
  locale: 'en',
  homeRoot: '/home',
  providers: {
    api: {
      url: 'https://api.dirox.dev',
      auth: {
        type: 'Bearer'
      }
    }
  }
};