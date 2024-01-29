describe('Logout', () => {
    it('Should logout', () => {
      cy.visit('http://localhost:3000/login')
      cy.get('[data-cy="login"]').click();
      cy.get('[data-cy="logout"]').click();
      });
  })