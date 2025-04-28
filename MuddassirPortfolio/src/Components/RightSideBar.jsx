import React from 'react'

function RightSideBar() {
  return (

    <>

    <div className="responsive-sidebar-menu">
    <div className="overlay" />
    <div className="sidebar-menu-inner">
      <div className="menu-wrap">
        <p>Menu</p>
        <ul className="menu scroll-nav-responsive d-flex">
          <li>
            <a className="scroll-to" href="#home">
              <i className="las la-home" /> <span>Home</span>
            </a>
          </li>
          <li>
            <a className="scroll-to" href="#about">
              <i className="lar la-user" /> <span>About</span>
            </a>
          </li>
          <li>
            <a className="scroll-to" href="#resume">
              <i className="las la-briefcase" /> <span>Resume</span>
            </a>
          </li>
          <li>
            <a className="scroll-to" href="#services">
              <i className="las la-stream" /> <span>Services</span>
            </a>
          </li>
          <li>
            <a className="scroll-to" href="#skills">
              <i className="las la-shapes" /> <span>Skills</span>
            </a>
          </li>
          <li>
            <a className="scroll-to" href="#portfolio">
              <i className="las la-grip-vertical" /> <span>Portfolios</span>
            </a>
          </li>
          <li>
            <a className="scroll-to" href="#testimonial">
              <i className="lar la-comment" /> <span>Testimonial</span>
            </a>
          </li>
          <li>
            <a className="scroll-to" href="#contact">
              <i className="las la-envelope" /> <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebar-social">
        <p>Social</p>
        <ul className="social-links d-flex align-items-center">
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
        </ul>
      </div>
    </div>
  </div>


<ul className="menu scroll-nav d-flex">
<li>
  <a className="scroll-to" href="#home">
    <span>Home</span> <i className="las la-home" />
  </a>
</li>
<li>
  <a className="scroll-to" href="#about">
    <span>About</span> <i className="lar la-user" />
  </a>
</li>
<li>
  <a className="scroll-to" href="#resume">
    <span>Resume</span> <i className="las la-briefcase" />
  </a>
</li>
<li>
  <a className="scroll-to" href="#services">
    <span>Services</span> <i className="las la-stream" />
  </a>
</li>
<li>
  <a className="scroll-to" href="#skills">
    <span>Skills</span> <i className="las la-shapes" />
  </a>
</li>
<li>
  <a className="scroll-to" href="#portfolio">
    <span>Portfolios</span> <i className="las la-grip-vertical" />
  </a>
</li>
<li>
  <a className="scroll-to" href="#testimonial">
    <span>Testimonial</span> <i className="lar la-comment" />
  </a>
</li>
<li>
  <a className="scroll-to" href="#contact">
    <span>Contact</span> <i className="las la-envelope" />
  </a>
</li>
</ul>

</>
  
  )
}

export default RightSideBar