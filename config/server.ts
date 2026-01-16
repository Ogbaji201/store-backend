// export default ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
// });


export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337), // keep your Railway port if you want 8080
  url: env('PUBLIC_URL'),
  proxy: true,

  app: {
    keys: env.array('APP_KEYS'),
  },
});