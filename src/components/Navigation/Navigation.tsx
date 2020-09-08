import React from 'react';
import css from './Navigation.module.css';
import { BsCloud, BsBell, BsSearch, BsFillPersonFill, BsColumns } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Navigation: React.FC = () => (
  <div className={`${css.Navigation} d-none d-sm-block`}>
    <div className={css.Header}>
      <img src="https://via.placeholder.com/50" alt="Company" className={css.Logo}/>&nbsp;Company
    </div>
    <ul className={css.List}>
      <li><Link to={'/'}><BsColumns className={css.Icon} />&nbsp;Dashboard</Link></li>
      <li><Link to={'/search'}><BsSearch className={css.Icon} />&nbsp;Search test</Link></li>
      <li><Link to={'/profile'}><BsFillPersonFill className={css.Icon} />&nbsp;Profile</Link></li>
      <li><Link to={'/settings'}><BsCloud className={css.Icon} />&nbsp;Settings</Link></li>
      <li><Link to={'/notifications'}><BsBell className={css.Icon} />&nbsp;Notifications</Link></li>
    </ul>
    <div className={css.Footer}>
      Company 2020
    </div>
  </div>
);
