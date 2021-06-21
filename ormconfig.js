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
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  subscribers: [__dirname + '/subscribers/**/*{.ts,.js}'],
  cli: {
    entitiesDir: 'build/entity',
    migrationsDir: 'build/database/migration',
    subscribersDir: 'build/subscriber',
  },
};
