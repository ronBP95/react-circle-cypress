import React from 'react'
import { mount } from '@cypress/react'
import Home from './components/Home'
import { BrowserRouter } from 'react-router-dom'

// Home Component Tests

describe('Home Component Check', () => {
  it("checks to see if the home component loads correctly", () => {
    mount(<BrowserRouter><Home /></BrowserRouter>)
  })
});



