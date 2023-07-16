import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./side-bar.css";

const SideBar = () => {
  const storedValue = window.localStorage.getItem("key");
  const [isActive, setIsActive] = useState(Number(storedValue) || 0);

  useEffect(() => {
    window.localStorage.setItem("key", isActive);
  }, [isActive]);

  const handleClick = (typeIndex): void => {
    setIsActive(typeIndex);
  };

  return (
    <div className="home-container">
      <div className="home-sidebar">
        <nav className="home-nav">
          <Link to="/home" className="home-container-item">
            <span
              key={1}
              className={`home-text ${isActive === 1 ? "active" : undefined}`}
              onClick={() => handleClick(1)}
            >
              Home
            </span>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon">
              <path d="M804.571 566.857v274.286c0 20-16.571 36.571-36.571 36.571h-219.429v-219.429h-146.286v219.429h-219.429c-20 0-36.571-16.571-36.571-36.571v-274.286c0-1.143 0.571-2.286 0.571-3.429l328.571-270.857 328.571 270.857c0.571 1.143 0.571 2.286 0.571 3.429zM932 527.429l-35.429 42.286c-2.857 3.429-7.429 5.714-12 6.286h-1.714c-4.571 0-8.571-1.143-12-4l-395.429-329.714-395.429 329.714c-4 2.857-8.571 4.571-13.714 4-4.571-0.571-9.143-2.857-12-6.286l-35.429-42.286c-6.286-7.429-5.143-19.429 2.286-25.714l410.857-342.286c24-20 62.857-20 86.857 0l139.429 116.571v-111.429c0-10.286 8-18.286 18.286-18.286h109.714c10.286 0 18.286 8 18.286 18.286v233.143l125.143 104c7.429 6.286 8.571 18.286 2.286 25.714z"></path>
            </svg>
          </Link>

          <Link to="" className="home-container-item">
            <span
              key={2}
              className={`home-text ${isActive === 2 ? "active" : undefined}`}
              onClick={() => handleClick(2)}
            >
              Menu
            </span>
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M634 492l-62 62 294 294-60 60-294-294-294 294-60-60 416-416q-24-48-7-112t67-114q62-62 138-71t122 37 37 123-71 139q-50 50-114 66t-112-8zM346 570l-180-180q-50-50-50-120t50-120l300 298z"></path>
            </svg>
          </Link>

          <Link to="/settings" className="home-container-item">
            <span
              key={3}
              className={`home-text ${isActive === 3 ? "active" : undefined}`}
              onClick={() => handleClick(3)}
            >
              Setting
            </span>
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
