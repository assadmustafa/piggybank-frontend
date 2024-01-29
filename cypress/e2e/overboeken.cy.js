describe('overboeken', () => {
  it('Should login as Melvin and transfer € 100.00 to Sara', () => {
  cy.visit('http://localhost:3000/login')
  cy.get('[data-cy="login"]').click();
  cy.visit('http://localhost:3000/transfer')
  cy.get('[data-cy="selecting-account"]').select("2");
  cy.get('[data-cy="amount"]').type("100");
  cy.get('[data-cy="description"]').type("Cadeau");
  cy.get('[data-cy="submit"]').click();
  });
});