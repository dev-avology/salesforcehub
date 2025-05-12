// path: config/plugins.js

export default () => ({
    'users-permissions': {
      config: {
        providers: {
          google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            redirectUri: 'http://localhost:1337/api/connect/google/callback',
            scope: ['email', 'profile'],
          },
        },
      },
    },
  });
  