import React from 'react'
import Flipkart_nav from './Layout/Flipkart_nav'
import Home from './Layout/Home'
import Home_Carsoule from './Layout/Home_Carsoule'
import Nav3 from './Layout/Nav3'
import Nav1 from './Layout/Nav1'
import Nav2 from './Layout/Nav2'
import Nav4 from './Layout/Nav4'
import Rate from './Layout/Rate'


function Layout_Flipkart() {
  return (
    <div>
      

{/* <Flipkart_nav/> */}
 <Flipkart_nav/>
<Nav1/>
<Nav2/>
<Nav3/> 
 <Home_Carsoule/>
<Nav4/>
<Home/> 
<Rate/>

    </div>
  )
}

export default Layout_Flipkart