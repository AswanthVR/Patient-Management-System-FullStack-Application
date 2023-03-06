import React from 'react'
import { Link } from 'react-router-dom'
import './css/home.css'
import img from '../images/delete.png'
import bg from '../images/bg.jpg'

// function home() {
//   return (
//     <div className='page'>
//         <div>
//            <Link to='/add-patient/_add'><buttomn>
//                 ADD PATIENTS
//             </buttomn></Link> 
//         </div>
//         <div>
//            <Link to='/updatepatients'><buttomn>
//                 update
//             </buttomn></Link> 
//         </div>
//         <div>
//            <Link to='/deletepatients'><buttomn>
//                delete
//             </buttomn></Link> 
//         </div>
//         <div>
//            <Link to='/patientlist'><buttomn>
//                 list
//             </buttomn></Link> 
//         </div>
        
//     </div>
//   )
// }

// export default home
import add from '../images/add.png';
import update from '../images/update.png';
import list from '../images/list.png'

const items = document.querySelectorAll(".nav-item");
const ind = document.querySelector(".indicator");
const colorPallette = [
  { background: "#264653", foreground: "#ffffff" },
  { background: "#f4a261", foreground: "#000000" },
  { background: "#2a9d8f", foreground: "#ffffff" },
  { background: "#e9c46a", foreground: "#000000" },
  { background: "#e76f51", foreground: "#ffffff" }
];

function handleIndicator(el) {
  ind.style.backgroundColor = el.dataset.bcolor;
  el.style.color = el.dataset.fcolor;
  ind.style.width = el.offsetWidth + "px";
  ind.style.left = el.offsetLeft + "px";
}

items.forEach((item, index) => {
  item.dataset.bcolor = colorPallette[index].background;
  item.dataset.fcolor = colorPallette[index].foreground;
  item.addEventListener("mousemove", (e) => {
    handleIndicator(e.target);
  });
  item.addEventListener("click", (e) => {
    items.forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    document
      .querySelector(".active")
      .style.setProperty("--bc", e.target.dataset.bcolor);
  });
  item.addEventListener("mouseleave", (e) => {
    e.target.style.color = "#000000";
  });
});
function home() {
  return (
    <div>
    <div className='CARDS' style={{height:"100%"}}>


<div class="hcard" >
    <div class="header">
        <div class="img-box">
        <Link to='/patientlist'><img className='addimg' src={list}>
                  </img></Link>
        </div>
        <h1 class="title">VIEW LIST</h1>
    </div>

    <div class="content">
    <Link to='/patientlist'> <p>
           CLICK TO VIEW PATIENTS LIST
        </p></Link>

        
    </div>
</div>


<div class="hcard">
    <div class="header">
        <div class="img-box">
        <Link to='/add-patient/_add'> <img className='addimg' src={add}>
                  </img></Link>
             
        </div>
        <h1 class="title">ADD</h1>
    </div>

    <div class="content">
<Link to='/add-patient/_add'> <p>
           CLICK TO ADD PATIENTS
        </p></Link>

        
    </div>
</div>


<div class="hcard">
    <div class="header">
        <div class="img-box">
        <Link to='updatepatients'>  <img className='addimg' src={update}>
                  </img></Link>
        </div>
        <h1 class="title">UPDATE</h1>
    </div>

    <div class="content">
    <Link to='updatepatients'> <p>
           CLICK TO UPDATE PATIENTS
        </p></Link>

        
    </div>
</div>


<div class="hcard">
    <div class="header">
        <div class="img-box">
        <Link to='/deletepatients'> <img className='delimg' src={img}>
                  </img></Link>
        </div>
        <h1 class="title">DELETE</h1>
    </div>

    <div class="content">
    <Link to='/deletepatients'> <p>
           CLICK TO DELETE PATIENTS
        </p></Link>

        
    </div>
</div>



    

    </div>
    </div>
  )
}

export default home