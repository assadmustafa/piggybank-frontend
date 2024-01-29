import React from 'react'
import Transfer from './Transfer'

describe('<Transfer />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Transfer />)
  })
})