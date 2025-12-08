import Parent from '../src/Parent/Parent.jsx';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { MainContent } from '../src/MainContent/MainContent.jsx';
import Home from '../src/Home/Home.jsx';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Parent />,
      children: [{
        path: 'home',
        element: <Home />
      },
      {
        path: 'main-content',
        element: <MainContent />
      }]
    }

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
