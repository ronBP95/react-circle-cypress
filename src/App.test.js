import React from 'react'
import { mount } from '@cypress/react'
import App from './App'

it('renders learn react link', () => {
  mount(<App />)
  cy.get('.App').contains('Hello Cypress')
})

// it('checks to see if the button is working', () => {
//   cy.get("#button").click()
// })