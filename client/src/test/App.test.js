// import React from 'react'
// import { render, unmountComponentAtNode, queryAllByTestId } from '@testing-library/react'
// import App from '../App'
// import { act } from 'react-dom/test-utils'
// import testObject from './testObject'


// // test('renders learn react link', () => {
// //   const { getByText } = render(<App />)
// //   const linkElement = getByText(/learn react/i)
// //   expect(linkElement).toBeInTheDocument()
// // })

// describe('TagsTab component', () => {
//   it('should render empty selects and table while loading', async () => {
//     const fakeResponse = testObject

//     jest.spyOn(window, 'fetch').mockImplementation(() => {
//       const fetchResponse = {
//         json: () => Promise.resolve(fakeResponse)
//       }
//       return Promise.resolve(fetchResponse)
//     })

//     const { queryAllByTestId } = render(
//       <App />
//     )

//     expect(queryAllByTestId('cloud-row').length).toBe(30)

//     window.fetch.mockRestore()
//   })
// })
