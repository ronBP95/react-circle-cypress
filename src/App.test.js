import React from 'react'
import { mount } from '@cypress/react'
import Home from './components/Home'
import App from './App'

// Home Component Tests

it('renders learn react link', () => {
  mount(<Home />)
  cy.get('.App').contains('Hello Cypress')
})

it('checks to see if the button can be clicked and if the alert triggers', () => {
  mount(<Home />)
  cy.get('.button').click()
})


