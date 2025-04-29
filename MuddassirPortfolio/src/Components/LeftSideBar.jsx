import React from 'react'

const LeftSideBar = () => {
  return (
    <div className="left-sidebar">
    <div className="sidebar-header d-flex align-items-center justify-content-between">
      <img  style ={{width:"130px"  , height:"70px"}}src="../../public/assets/images/MuddassirLogo1.png" alt="Logo" />
      <span className="designation">MERN STACK DEVELOPER</span>
    </div>
    <img className="me" src="assets/images/me.jpg" alt="Me" />
    <h2 className="email">hello@drake.design</h2>
    <h2 className="address">Base in Los Angeles, CA</h2>
    <p className="copyright">© 2022 Drake. All Rights Reserved</p>
    <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
      <li>
        <a href="#">
          <i className="lab la-twitter" />
        </a>
      </li>
      <li>
        <a href="#">
          <i className="lab la-dribbble" />
        </a>
      </li>
      <li>
        <a href="#">
          <i className="lab la-instagram" />
        </a>
      </li>
      <li>
        <a href="#">
          <i className="lab la-github" />
        </a>
      </li>
    </ul>
    <a href="#" className="theme-btn">
      <i className="las la-envelope" /> Hire Me!
    </a>
  </div>
  
  )
}

export default LeftSideBar