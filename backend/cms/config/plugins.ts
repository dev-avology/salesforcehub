// path: config/plugins.js

export default () => ({
    'users-permissions': {
      config: {
        providers: {
          google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            redirectUri:process.env.GOOGLE_CALLBACK_URL,
            scope: ['email', 'profile'],
          },
        },
      },
    },
  });
  