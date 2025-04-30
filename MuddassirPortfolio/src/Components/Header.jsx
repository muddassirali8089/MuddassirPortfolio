import React from "react";
import RightSideBar from "./RightSideBar";

function Header() {
  return (
    <>
      <div className="page-loader">
        <div className="bounceball"></div>
      </div>

      <span className="icon-menu">
        <span className="bar"></span>
        <span className="bar"></span>
      </span>
{/* 
      <div className="global-color">
        <span className="setting-toggle">
          <i className="las la-cog" />
        </span>
         <div className="inner">
          <div className="overlay" />
          <div className="global-color-option">
            <span className="close-settings">
              <i className="las la-times" />
            </span>
            <h2>Configuration</h2>
             <div className="global-color-option-inner">
              <p>Colors</p>
              <div className="color-boxed">
                <a href="#" className="clr-active" onClick="color1();" />
                <a href="#" onclick="color2();" />
                <a href="#" onclick="color3();" />
                <a href="#" onclick="color4();" />
                <a href="#" onclick="color5();" />
                <a href="#" onclick="color6();" />
                <a href="#" onclick="color7();" />
                <a href="#" onclick="color8();" />
              </div>
              <p>THREE DIMENSIONAL SHAPES</p>
              <ul className="themes">
                <li>
                  <a href="home1.html">Earth Lines Sphere</a>
                </li>
                <li>
                  <a href="home2.html">3D Abstract Ball</a>
                </li>
                <li>
                  <a href="home3.html">Water Waves</a>
                </li>
                <li>
                  <a href="home4.html">Liquids Wavy</a>
                </li>
                <li>
                  <a href="home6.html">Solid Color</a>
                </li>
                <li>
                  <a href="home5.html">Simple Strings</a>
                </li>
              </ul>
            </div> 
          </div>
        </div> 
      </div> */}
    </>
  );
}

export default Header;
