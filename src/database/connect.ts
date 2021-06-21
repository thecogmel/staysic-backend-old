import { createConnection, ConnectionOptions } from 'typeorm';

createConnection(<ConnectionOptions>{
  type: 'postgres',

  // We need add the extra SSL to use heroku on localhost
  extra: {
    ssl: true,
  },

  // Change the next line to use the Heroku postgresql from other environment like localhost, remenber that heroku changes this data periodically for security reasons
  url:
    process.env.DATABASE_URL ||
    'postgres://postgres:memphis2108@localhost:5432/staysic',
  subscribers: [],
  synchronize: true,
})
  .then(() => console.log('Conectado ao banco!'))
  .catch(error => console.log(error));
