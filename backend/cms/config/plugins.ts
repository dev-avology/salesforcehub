export default {
  'upload': {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 100000,
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  'upload-plugin': {
    config: {
      serverUrl: 'https://phpstack-1180784-5492094.cloudwaysapps.com',
    },
  },
};
