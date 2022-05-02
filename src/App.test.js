import React from 'react'
import { mount } from '@cypress/react'
import { BrowserRouter } from 'react-router-dom'

// Component Imports
import Home from './components/Home'
import About from './components/About'
import Calculator from './components/Calculator'

// Home Component Tests

describe('Home Component Check', () => {
  it("checks to see if the home component loads correctly", () => {
    mount(<BrowserRouter><Home /></BrowserRouter>)
  })

  it('checks to see if the button works', () => {
    mount(<BrowserRouter><Home /></BrowserRouter>)
    cy.get("#button").click()
  })
});

describe('About Component Check', () => {
  it("checks to see if the about component loads correctly", () => {
    mount(<BrowserRouter><About /></BrowserRouter>)
  })
});

describe('Calculator Component Check', () => {
  it("checks to see if the calculator component loads correctly", () => {
    mount(<BrowserRouter><Calculator /></BrowserRouter>)
  })

  it("checks to see if 8 x 9 = 72", () => {
    mount(<BrowserRouter><Calculator /></BrowserRouter>)
    cy.contains("8").click()
    cy.contains("X").click()
    cy.contains("9").click()
    cy.contains("=").click()
    cy.contains("72")
  })
})



