module.exports = {
  type: 'postgres',
  url: `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URL}:5432/${process.env.DB_NAME}`,
  synchronize: true,
  logging: false,
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/database/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/database/migration',
    subscribersDir: 'src/subscriber',
  },
};
