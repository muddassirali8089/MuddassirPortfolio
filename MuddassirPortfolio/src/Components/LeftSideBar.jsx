import React, { useEffect, useState } from "react";
import axios from "axios";

const LeftSideBar = () => {
  const [profile, setProfile] = useState(null);

  console.log(profile);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await axios.get("http://localhost:8000/api/profile/");
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    }

    fetchProfile();
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="left-sidebar">
      <div className="sidebar-header d-flex align-items-center justify-content-between">
        <img
          src={profile.logo} // Use as-is
          alt="Logo"
          style={{ width: "130px", height: "65px" }}
        />
        <span className="designation">MERN STACK DEVELOPER</span>
      </div>

      <img
        style={{ height: "160px" }}
        className="me"
        src={profile.picture}
        alt="Me"
      />

      <h2 style={{ fontSize: "20px" }} className="email">
        {profile.email}
      </h2>
      <h2 className="address">{profile.address}</h2>

      <p className="copyright">
        © {new Date().getFullYear()} Muddassir. All Rights Reserved
      </p>

      <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
        <li>
          <a
            href={profile.whatsapp_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="lab la-whatsapp" />
          </a>
        </li>
        <li>
          <a
            href={profile.linkedin_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="lab la-linkedin" />
          </a>
        </li>
        <li>
          <a
            href={profile.instagram_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="lab la-instagram" />
          </a>
        </li>
        <li>
          <a
            href={profile.github_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="lab la-github" />
          </a>
        </li>
      </ul>

      <a href="#contact" className="theme-btn">
        <i className="las la-envelope" /> Hire Me!
      </a>
    </div>
  );
};

export default LeftSideBar;
