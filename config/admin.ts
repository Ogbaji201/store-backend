

// config/admin.js
// export default ({ env }) => ({
//   auth: {
//     secret: env('ADMIN_JWT_SECRET'),
//     // Optional: remove your old expiresIn config elsewhere; use sessions if you want.
//     sessions: {
//       maxSessionLifespan: '7d',
//       maxRefreshTokenLifespan: '30d',
//     },
//   },

//   secrets: {
//     encryptionKey: env('ADMIN_ENCRYPTION_KEY'),
//   },

//   apiToken: {
//     salt: env('API_TOKEN_SALT'),
//   },
//   transfer: {
//     token: {
//       salt: env('TRANSFER_TOKEN_SALT'),
//     },
//   },
// });

// config/admin.js
export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    sessions: {
      // values are in SECONDS
      maxSessionLifespan: env.int('ADMIN_MAX_SESSION_LIFESPAN', 60 * 60 * 24 * 7),          // 7 days
      maxRefreshTokenLifespan: env.int('ADMIN_MAX_REFRESH_TOKEN_LIFESPAN', 60 * 60 * 24 * 30), // 30 days
    },
  },

  secrets: {
    encryptionKey: env('ADMIN_ENCRYPTION_KEY'),
  },

  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
});

