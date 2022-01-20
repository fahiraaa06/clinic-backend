# First Template To Make Rest Api Using Express.js

## notes for developer
```bash
# create migration
$ npx sequelize-cli model:generate --name user --attributes name:string

# running migration
$ npx sequelize-cli db:migrate

# delete migrations
$ npx sequelize-cli db:migrate:undo:all

# create seeder
$ npx sequelize-cli seed:generate --name user

# runing seeder
$ npx sequelize-cli db:seed:all

# delete seeders
$ npx sequelize-cli db:seed:undo:all

```

## how to deploy this
```bash
$ docker-compose up --build -d
```

## now you can visit this address
1. Rest Api [http://localhost:9000/](http://localhost:9000/)

2. PhpMyAdmin [http://localhost:9001/](http://localhost:9001/)

## only first deploy or developing
```bash
$ docker exec -it danang-express-app bash
$ npx sequelize db:migrate

# optional
$ npx sequelize-cli db:seed:all
```

```bash
$ npx sequelize-cli db:migrate --env production
```
