import React from 'react'

const LeftSideBar = () => {
  return (
    <div className="left-sidebar">
    <div className="sidebar-header d-flex align-items-center justify-content-between">
      <img  style ={{width:"130px"  , height:"70px"}}src="../../public/assets/images/MuddassirLogo1.png" alt="Logo" />
      <span className="designation">MERN STACK DEVELOPER</span>
    </div>
    <img  style={{height:"160px"}} className="me" src="assets/images/muddassir.jpg" alt="Me" />
    <h2 style={{fontSize:"20px"}} className="email">muddassirali8089@gmail.com</h2>
    <h2 className="address">Islamabad , Pakistan</h2>
    <p className="copyright">© {new Date().getFullYear()} Muddassir. All Rights Reserved</p>
    <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
    <li>
  <a href="https://wa.me/923305375289" target="_blank" rel="noopener noreferrer">
    <i className="lab la-whatsapp" />
  </a>
</li>

  <li>
    <a href="https://www.linkedin.com/in/muddassir-ali-4ba29b247/" target="_blank" rel="noopener noreferrer">
      <i className="lab la-linkedin" />
    </a>
  </li>
  <li>
    <a href="https://instagram.com/muddassirali8089" target="_blank" rel="noopener noreferrer">
      <i className="lab la-instagram" />
    </a>
  </li>
  <li>
    <a href="https://github.com/muddassirali8089" target="_blank" rel="noopener noreferrer">
      <i className="lab la-github" />
    </a>
  </li>
</ul>

    <a href="#contact" className="theme-btn">
      <i className="las la-envelope" /> Hire Me!
    </a>
  </div>
  
  )
}

export default LeftSideBar