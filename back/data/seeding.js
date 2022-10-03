require('dotenv').config();
const data = require('./data.json');
const db = require('../app/db/pg');

async function insertTicket() {
  await db.query('TRUNCATE TABLE "ticket" RESTART IDENTITY CASCADE');
  const values = data.ticket.map(
    item => `(
        '${item.title}',
        '${item.content}',
        '${item.status}',
        '${item.client_id}',
    )`
  );
  const queryStr = `
        INSERT INTO "ticket"
        (
            "title",
            "content",
            "status",
            "client_id",  
        )
        VALUES ${values}
        RETURNING id
    `;
  const result = await db.query(queryStr);
  return result.rows.map(item => item.id);
}

async function insertClient() {
  await db.query('TRUNCATE TABLE "client" RESTART IDENTITY CASCADE');
  const values = data.client.map(
    item => `(
        '${item.email}',
        '${item.company}'
    )`
  );
  const queryStr = `
        INSERT INTO "client"
        (
            "email",
            "company", 
        )
        VALUES ${values}
        RETURNING id
    `;
  const result = await db.query(queryStr);
  return result.rows.map(item => item.id);
}

async function insertEmployee() {
  await db.query('TRUNCATE TABLE "employee" RESTART IDENTITY CASCADE');
  const values = data.employee.map(
    item => `(
        '${item.firstname}',
        '${item.lastname}',
        '${item.email}',
        '${item.password}'
        '${item.role}',
    )`
  );
  const queryStr = `
        INSERT INTO "employee"
        (
            "firstname",
            "lastname",
            "email",
            "password",
            "role", 
        )
        VALUES ${values}
        RETURNING id
    `;
  const result = await db.query(queryStr);
  return result.rows.map(item => item.id);
}
