// export default ({ env }) => ({
//   auth: {
//     secret: env('ADMIN_JWT_SECRET'),
//   },
//   apiToken: {
//     salt: env('API_TOKEN_SALT'),
//   },
//   transfer: {
//     token: {
//       salt: env('TRANSFER_TOKEN_SALT'),
//     },
//   },
//   secrets: {
//     encryptionKey: env('ENCRYPTION_KEY'),
//   },
//   flags: {
//     nps: env.bool('FLAG_NPS', true),
//     promoteEE: env.bool('FLAG_PROMOTE_EE', true),
//   },
// });

// config/admin.js
export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    // Optional: remove your old expiresIn config elsewhere; use sessions if you want.
    sessions: {
      maxSessionLifespan: '7d',
      maxRefreshTokenLifespan: '30d',
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
