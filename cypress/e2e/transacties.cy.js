describe('View Transactions', () => {
    it('Should view all transactions of logged in user', () => {
      cy.visit('http://localhost:3000/login')
      cy.get('[data-cy="login"]').click()
      cy.visit('http://localhost:3000/transactions')
      });
  })
  
  