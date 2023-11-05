//import React from "react";
import { Link } from "react-router-dom";
import style from './landing.module.css'


const LandingPage = () => {
  return (
    <div className={style.container}>
      <Link className={style.link} to='/home'>
        <button className={style.button}>Viajar</button>
      </Link>

    </div>
  );
}

export default LandingPage;
