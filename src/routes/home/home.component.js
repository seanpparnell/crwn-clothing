import { Outlet } from 'react-router-dom'
import Directroy from '../../components/directory/directory.component';

const Home = () => {
  

  return (

    <div className="">
      <Outlet />
      <Directroy />
    </div>
  )
}

export default Home;
