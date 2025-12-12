import Parent from '../src/Parent/Parent.jsx';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { CharacterStats } from '../src/CharacterStats/CharacterStats.jsx';
import Home from '../src/Home/Home.jsx';
import { Missions } from './Missions/Missions.jsx';
import { Achievements } from './Achievements/Achievements.jsx';
import { Gallery } from './Gallery/Gallery.jsx';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Parent />,
      children: [{
        index: true,
        element: <Home />
      },
      {
        path: 'character-stats',
        element: <CharacterStats />
      },
      {
        path: 'missions',
        element: <Missions />
      },
      {
        path: 'achievements',
        element: <Achievements />
      },{
        path:'gallery',
        element:<Gallery/>
      }]
    }

  ], {
    basename: '/Portfolio'
  })

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
