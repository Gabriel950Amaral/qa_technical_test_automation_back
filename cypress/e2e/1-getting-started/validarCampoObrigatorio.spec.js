const fs = require('fs');
const faker = require('faker-br');
const url_base = Cypress.config("baseUrl");

describe('Validar cenários de excessão na api de cadastro de usuario', () => {
  beforeEach(() => {
    cy.clearAppCache();
  });
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  it('Validar status 422 e uma mensagem de erro quando o documento estiver faltando', () => {
    const invalidPayload = {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      birthdate: faker.date.past(30, '2000-01-01').toISOString().split('T')[0],
      phone_mobile: faker.phone.phoneNumber('519########'),
      password: faker.internet.password(14),
      terms: true,
    };
  
    cy.requestWithRetry({
      method: 'POST',
      url: url_base,
      headers: headers,
      body: invalidPayload,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(422);
      expect(response.body).to.have.property('errors');
      expect(response.body.errors).to.have.property('document');
        // Verificando se a mensagem esperada está presente no array de mensagens
    const expectedError = 'O campo CPF é obrigatório.';
    const actualErrors = response.body.errors.document;
    expect(actualErrors).to.include(expectedError);
    });
  });

  it('Validar status 422 e uma mensagem de erro quando o E-mail estiver invalido', () => {
    const invalidPayload = {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: 'emailinvalido.com',
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
      body: invalidPayload,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(422);
      expect(response.body).to.have.property('errors');
      expect(response.body.errors).to.have.property('email');
        // Verificando se a mensagem esperada está presente no array de mensagens
    const expectedError = 'O campo e-mail deve ser um endereço de e-mail válido.';
    const actualErrors = response.body.errors.email;
    expect(actualErrors).to.include(expectedError);
    });
  });

  it('Validar status 422 e uma mensagem de erro quando o Telefone estiver invalido', () => {
    const invalidPayload = {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      document: faker.br.cpf(),
      birthdate: faker.date.past(30, '2000-01-01').toISOString().split('T')[0],
      phone_mobile: '44444444444',
      password: faker.internet.password(14),
      terms: true,
    };
  
    cy.requestWithRetry({
      method: 'POST',
      url: url_base,
      headers: headers,
      body: invalidPayload,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(422);
      expect(response.body).to.have.property('errors');
      expect(response.body.errors).to.have.property('phone_mobile');
        // Verificando se a mensagem esperada está presente no array de mensagens
    const expectedError = 'validation.phone';
    const actualErrors = response.body.errors.phone_mobile;
    expect(actualErrors).to.include(expectedError);
    });
  });

  it('Validar status 422 e uma mensagem de erro quando o campo senha estiver com menos de 12 caracteres', () => {
    const invalidPayload = {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      document: faker.br.cpf(),
      birthdate: faker.date.past(30, '2000-01-01').toISOString().split('T')[0],
      phone_mobile: faker.phone.phoneNumber('519########'),
      password: faker.internet.password(5),
      terms: true,
    };
  
    cy.requestWithRetry({
      method: 'POST',
      url: url_base,
      headers: headers,
      body: invalidPayload,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(422);
      expect(response.body).to.have.property('errors');
      expect(response.body.errors).to.have.property('password');
        // Verificando se a mensagem esperada está presente no array de mensagens
    const expectedError = 'O campo password deve ter pelo menos 12 caracteres.';
    const actualErrors = response.body.errors.password;
    expect(actualErrors).to.include(expectedError);
    });
  });

  it('Validar status 422 e uma mensagem de erro quando o Nome não for enviado', () => {
    const invalidPayload = {
      firstname: "",
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      document: faker.br.cpf(),
      birthdate: faker.date.past(10, '2000-01-01').toISOString().split('T')[0],
      phone_mobile: faker.phone.phoneNumber('519########'),
      password: faker.internet.password(14),
      terms: true,
    };
  
    cy.requestWithRetry({
      method: 'POST',
      url: url_base,
      headers: headers,
      body: invalidPayload,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(422);
      expect(response.body).to.have.property('errors');
      expect(response.body.errors).to.have.property('firstname');
        // Verificando se a mensagem esperada está presente no array de mensagens
    const expectedError = 'O campo firstname é obrigatório.';
    const actualErrors = response.body.errors.firstname;
    expect(actualErrors).to.include(expectedError);
    });
  });

  it('Validar status 422 e uma mensagem de erro quando o Sobrenome não for enviado', () => {
    const invalidPayload = {
      firstname: faker.name.firstName(),
      lastname: "",
      email: faker.internet.email(),    
      document: faker.br.cpf(),
      birthdate: faker.date.past(10, '2000-01-01').toISOString().split('T')[0],
      phone_mobile: faker.phone.phoneNumber('519########'),
      password: faker.internet.password(14),
      terms: true,
    };
  
    cy.requestWithRetry({
      method: 'POST',
      url: url_base,
      headers: headers,
      body: invalidPayload,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(422);
      expect(response.body).to.have.property('errors');
      expect(response.body.errors).to.have.property('lastname');
        // Verificando se a mensagem esperada está presente no array de mensagens
    const expectedError = 'O campo lastname é obrigatório.';
    const actualErrors = response.body.errors.lastname;
    
    expect(actualErrors).to.include(expectedError);
    });
  });
});

