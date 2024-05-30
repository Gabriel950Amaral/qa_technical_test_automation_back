const fs = require('fs');
const faker = require('faker-br');
const url_base = Cypress.config("baseUrl");

describe('Cadastro de Usuario via API', () => {
  beforeEach(() => {
    cy.clearAppCache();
  });
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  it('validando o retorno do status 201 e uma propriedade de token quando a carga for válida', () => {
    const validPayload = {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      document: faker.br.cpf(),
      birthdate: faker.date.past(30, '2000-01-01').toISOString().split('T')[0],
      phone_mobile: faker.phone.phoneNumber('519########'),
      password: faker.internet.password(14),
      terms: true,
    };

    cy.requestWithRetry({
      method: 'POST',
      url: url_base,
      headers: headers,
      body: validPayload,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('token');
      expect(response.body.token).to.not.be.empty;
    });
  });
});

