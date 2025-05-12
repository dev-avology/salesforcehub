export default ({ env }) => ({
  'upload-plugin': {
    config: {
      serverUrl: env('PUBLIC_URL'),
    },
  },
});
