import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './error-page.jsx'
import JobDetails, {loader as jobLoader } from './routes/jobDetails.jsx'
import Index from './routes/index.jsx'
import Root from './routes/root.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: 'jobs/:jobId',
        element: <JobDetails />,
        loader: jobLoader,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
