import Home from '../pages/Home'
import Rooms from '../pages/Rooms'
import SingleRoom from '../pages/SingleRoom'
import ErrorUrl from '../pages/ErrorUrl'

const MainRouter = [
  {title: 'Home', path:'/', component:Home },
  {title: 'Single Room', path:'/single/room' ,component:SingleRoom },
  {title: 'Rooms', path:'/rooms' ,component:Rooms },
  {title: 'Home', path:'/error' ,component:ErrorUrl }
]

export default MainRouter;