const test = require('ava');
const express = require('express');
const supertest = require('supertest-as-promised');
const acceptsExt = require('../index');


test('it parses out file extensions', (t) => {
  let app = express();
  app.use(acceptsExt);
  t.plan(1);

  app.get('/test', (request, response) => {
    t.is(request.headers['accept'], 'application/json');
    response.send();
  });

  return supertest(app)
    .get('/test.json')
    .expect(200);
});


test('it is fine with no extension', (t) => {
  let app = express();
  app.use(acceptsExt);
  t.plan(1);

  app.get('/test', (request, response) => {
    t.true(request.headers['accept'] == null);
    response.send();
  });

  return supertest(app)
    .get('/test')
    .expect(200);
});