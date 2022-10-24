Pour avoir accès à la BDD, il faut avoir postgreSQL d'installé:
https://postgresapp.com/

MAC:
`brew install postgresql`
`brew services start postgresql`

Linux:
`sudo apt-get install postgresql`

Windows:
https://www.postgresql.org/download/windows/

Puis run la commande suivante:
`npm run initDB`

Pour créer la BDD, il faut se connecter à postgreSQL:
`psql postgres`

Pour les commandes de base:
https://chartio.com/resources/tutorials/how-to-list-databases-and-tables-in-postgresql-using-psql/

Connexion à postgres
`psql postgres`

Connexion à une database avec un user précis
`psql -U <user> <database>`

Liste des bdd
`\l`

Use une bdd
`\c <database>`

Liste des tables de la bdd
`\dt`

Détail d'une table
`\d <database>`

`\q` ou `exit;` => pour sortir
