import React from 'react'
import   './css/nav.css'
  

function Navcomponent() {
  return (
   <>
   <div className='navbar'>
   <nav class="navbar bg-dark text-white">
      <div class="container">
        <ul class="nav-links d-flex m-0">
          <i class="hide-toggle gg-close"></i>
          <il class="nav-link"><a href="http://">Home</a></il>
        </ul>
        <div class="headertitle" >
          <a href="#">Patient Record Management </a>
        </div>
        <div class="menu-toggle">
          <i class="d-sm-block d-sm-none gg-menu-right"></i>
        </div>
      </div>
    </nav>
    </div>
   </>
  )
}

export default Navcomponent