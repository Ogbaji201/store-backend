
// export default [
//   'strapi::errors',
//   'strapi::security',
//   {
//     name: 'strapi::cors',
//     config: {
//       origin: [
//         'https://cheryblisshealth.com',
//         'https://store-backend-production-0858.up.railway.app',
//         // add your Vercel frontend too:
//         // 'https://your-frontend.vercel.app',
//       ],
//       headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
//       credentials: true,
//       methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
//     },
//   },
//   'strapi::poweredBy',
//   'strapi::logger',
//   'strapi::query',
//   'strapi::body',
//   'strapi::session',
//   'strapi::favicon',
//   'strapi::public',
// ];


export default [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'res.cloudinary.com'  // Add Cloudinary
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'res.cloudinary.com'  // Add Cloudinary
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:1338',
        'http://localhost:3001',
        'https://cheryblisshealth.com',
        'https://store-backend-production-0858.up.railway.app',
      ],
      headers: [
        'Content-Type',
        'Authorization',
        'Origin',
        'Accept',
        'X-Requested-With',
        'Access-Control-Allow-Headers'
      ],
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];