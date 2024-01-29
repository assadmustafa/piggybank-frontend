describe('Login', () => {
  it('Should login as Melvin', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('[data-cy="login"]').click();
    });
})

