import React, { useEffect } from 'react';
import "./layout.css"
import Sidebar from '../sidebar/sidebar';
import Topnav from '../topnav/TopNav';
import { useSelector, useDispatch } from 'react-redux';
import ThemeAction from '../../redux/actions/ThemeAction';
import Dashboard from '../../pages/Dashboard';

const Layout = () => {
  const themeReducer = useSelector(state => state.ThemeReducer)
  const dispatch = useDispatch()
  useEffect(()=>{
    const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

    const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

    dispatch(ThemeAction.setMode(themeClass))
    dispatch(ThemeAction.setColor(colorClass))
  }, [dispatch])
  return (

         <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
              <Sidebar />
           <div className='layout_content'>
             <Topnav />
             <div className='layout_content-main'>
                <Dashboard />
             </div>
           </div>
         </div>
  );
};

export default Layout;
