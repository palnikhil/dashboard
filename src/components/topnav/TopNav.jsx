import React from 'react';
import './TopNav.css';
import DropDown from '../dropdown/DropDown';
import notifications from '../../assets/JsonData/notification.json';
import ThemesMenu from '../ThemeMenu/ThemesMenu';
import user_menu from '../../assets/JsonData/user_menus.json';
import user_image from '../../assets/images/nikhil.jpg';
import { Link } from 'react-router-dom';

const current_user = {
   display_name : 'Nikhil Pal',
   display_image : user_image
}

const renderNotificationItems = (item,index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user.display_image} alt=""/>
    </div>
    <div className="topnav__right-user__name">
      {user.display_name}
    </div>
  </div>
)

const renderUserMenu = (item,index) => (
  <Link to='/' key={index}>
   <div className="notification-item">
        <i className={item.icon}></i>
        <span>{item.content}</span>
   </div>
  </Link>
)

const  Topnav = () => {
  return (
         <div className='topnav'>
            <div className='topnav__search'>
               <input type="text" placeholder = "Search..."/>
               <i className='bx bx-search'/>
            </div>
            <div className='topnav__right'>
                <div className='topnav__right-item'>
                    <DropDown
                      customToggle = {() => renderUserToggle(current_user)}
                      contentData = {user_menu}
                      renderItems = {(item,index) => renderUserMenu(item,index)}
                    />
                </div>
                <div className='topnav__right-item'>
                    <DropDown
                      icon = 'bx bx-bell'
                      badge = '12'
                      contentData = {notifications}
                      renderItems = {(item,index) => renderNotificationItems(item,index)} 
                      renderFooter = {() => <Link to= '/'> View All </Link>}
                    />
                </div>
                <div className='topnav__right-item'>
                    <ThemesMenu />
                </div>
            </div>
         </div>
  );
};

export default Topnav;
