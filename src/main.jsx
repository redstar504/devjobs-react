import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './error-page.jsx'
import JobDetails from './routes/jobDetails.jsx'
import JobListings from './routes/jobListings.jsx'
import Root from './routes/root.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <JobListings />
      },
      {
        path: 'jobs/:jobId',
        element: <JobDetails />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
