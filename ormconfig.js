module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  synchronize: true,
  logging: false,
  entities: ['**/src/entity/*{.ts,.js}'],
  migrations: ['build/database/migration/**/*.js'],
  subscribers: ['build/subscriber/**/*.js'],
  cli: {
    entitiesDir: 'build/entity',
    migrationsDir: 'build/database/migration',
    subscribersDir: 'build/subscriber',
  },
};
