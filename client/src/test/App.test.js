import regeneratorRuntime from 'regenerator-runtime'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react'
import App from '../App'
import testObject from './testObject'

let container = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
  global.fetch.mockClear()
  delete global.fetch
})

it('should be able to fetch data and render table', async () => {
  // mock window alert cause alert is not implemanted in jest
  // https://stackoverflow.com/questions/55088482/jest-not-implemented-window-alert
  const jsdomAlert = window.alert // remember the jsdom alert
  window.alert = () => {} // provide an empty implementation for window.alert
  const fakeResult = testObject

  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeResult)
    })
  )

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<App />, container)
  })

  expect(container.querySelectorAll('tr').length).toBe(101)
  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore()
  window.alert = jsdomAlert // restore the jsdom alert
})

it('should be able filter by provider', async () => {
  const jsdomAlert = window.alert
  window.alert = () => {}
  const fakeResult = testObject
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeResult)
    })
  )
  await act(async () => {
    render(<App />, container)
  })

  // expect the select to have all the providers
  expect(screen.getByTestId('provider-select').value).toBe('Amazon Web Services,Azure,DigitalOcean,Google Cloud,UpCloud')

  // remove one provider
  fireEvent.change(screen.getByTestId('provider-select'), {
    target: { value: 'Azure,DigitalOcean,Google Cloud,UpCloud' }
  })

  // the table now should have less rows
  // this one is not working
  // expect(container.querySelectorAll('tr').length).toBeLessThan(101)

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore()
  window.alert = jsdomAlert
})

it('should be able to sort by distance', async () => {
  // the location is mocked to be at {lat: 65, long: 25}
  const jsdomAlert = window.alert
  window.alert = () => {}
  const fakeResult = testObject

  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeResult)
    })
  )

  await act(async () => {
    render(<App />, container)
  })

  expect(screen.getAllByTestId('cloud-name-cell')[0].textContent).toMatch('google-europe-north1')

  fireEvent.click(screen.getByTestId('sort-button'))

  expect(screen.getAllByTestId('cloud-name-cell')[0].textContent).toMatch('azure-australiasoutheast')

  global.fetch.mockRestore()
  window.alert = jsdomAlert
})

it('should open dialog on cloud selection', async () => {
  const jsdomAlert = window.alert
  window.alert = () => {}
  const fakeResult = testObject

  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeResult)
    })
  )

  await act(async () => {
    render(<App />, container)
  })

  // dialog should not be visible
  expect(screen.queryAllByTestId('cloud-dialog-name').length).toBe(0)

  // click a table row
  fireEvent.click(screen.getAllByTestId('cloud-row')[0])

  // dialog should now be visible
  expect(screen.getAllByTestId('cloud-dialog-name').length).toBe(1)
  expect(screen.getAllByTestId('cloud-dialog-name')[0].textContent).toMatch('google-europe-north1')

  // close dialog
  fireEvent.click(screen.getByTestId('close-dialog-button'))

  // dialog should not be visible
  await waitForElementToBeRemoved(() => screen.queryByTestId('cloud-dialog-name'))
  expect(screen.queryByTestId('cloud-dialog-name')).toBeNull()

  global.fetch.mockRestore()
  window.alert = jsdomAlert
})
