import React from 'react';
import './sidebar.css';
import logo from '../../assets/images/logo.png';
import sidebar_items from '../../assets/JsonData/sidebar_routes.json'
import { Link , useLocation} from 'react-router-dom';

const FindLocation = () => {
  const l = useLocation().pathname;
  return l;
}

const SidebarItem = props => {

  const active = props.active ? 'active' : '';
  
  const active_style = `sidebar__item-inner ${active}`;
  
  return (
      <div className="sidebar__item">
         <div className = {active_style}>
              <i className={props.icon}></i>
              <span>
                  {props.title}
              </span>
          </div>
      </div>
  )
}

const Sidebar = ()=> {
  const activeItem = sidebar_items.findIndex(item => item.route === FindLocation());
  return (
    <div className='sidebar'>
       <div className='sidebar__logo'>
          <img src={logo} alt="company logo"/>
       </div>
       {
         sidebar_items.map((items,index)=>(
              
          <Link to={`${items.route}`} key={index}>
             <SidebarItem
                title={items.display_name}
                icon={items.icon}
                active={index === activeItem}
              />
          </Link>
                
         ))
       }
    </div>
  );
};

export default Sidebar;
