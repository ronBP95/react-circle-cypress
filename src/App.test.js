import React from 'react'
import { mount } from '@cypress/react'
import App from './App'

it('renders learn react link', () => {
  mount(<App />)
  cy.get('.App').contains('Hello Cypress')
})

it('checks to see if the button can be clicked and if the alert triggers', () => {
  mount(<App />)
  cy.get('.button').click()
})
