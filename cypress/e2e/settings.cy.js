describe('Change user name', () => {
    it('Should change user name in settings', () => {
      cy.visit('http://localhost:3000/login')
      cy.get('[data-cy="login"]').click()
      cy.visit('http://localhost:3000/settings')
      cy.get('[data-cy="account-name"]').type("Assad")
      cy.get('[data-cy="save"]').click();
      });
  })