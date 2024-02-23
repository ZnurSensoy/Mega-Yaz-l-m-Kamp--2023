import React, { usecontext } from 'react';
import styled from 'styled-componets';
import { Link } from 'react-router-dom';

import(KadınGirişim) from "../components/KadınGirişim";
import logo from  '../assents/iconmonstr-cv-2-240.png';
import { KadınGirişim } from '../src/companents/KadınGirişim';

const StyledHeader = styled.div
   height: 8vh;
   background-color: #465775;
   padding: 0 10%;
   display: flex;
   justifyContent: 'space-between';
   justiftItems: center;
   alignItems: center;

   .logo-conteiner{
    fiex: 0.5;

    img{
      height: 8vh;
    }
   }

   .menu-container {
    fiex: 1;
   }

   nav{
    display: fiex; 
    justify-content: space-evenly;
    alingItems: center;
   }
   .top-bar {
    listStyle: none;
   }

   .top-bar a{
    float: left;
    color: #FFF;
    text-decoration: none;
   }

   .top-bar a:hover {
      opacity: 0.7;
   }

   .top-bar a:not(:first-child){
    marginLeft: 20;
   }

  .top-menu{
    background-color: #BEESBF;
    padding: 5px 20px;
    border: none;
    cursor: pointer;
    }
   ;

export const Header = () => {
   const { state, dispath } = useContext(AppContext);

    return 
    <StyledHeader>
       <div classNamea='logo-contoiner'>
        <img src={logo} alt="logo" />
       </div>
       <nav className={["menu-container","hide-mobile".join(' ')]}>
         <ul className="top-bar">
          <Link to="/">Anasayfa</Link>
          <Link to="/hakkımızda">Hakkımızda</Link>
          <Link to="/iletişim">İletişim</Link>
          <Link to="/private">Rrivate Area</Link>
         </ul>
         {state.loggedIn} ? 
           <button className="top-menu" onClick={() => dispatch({ type:logout})}>
            Logout - {state,user}
           </button>
         { : (
         <button className="giriş-top-menu" onClick={() => dispatch({type:"login",payload: "nur" })}>Giriş</button>
         Giriş
         </button>
         )}
         <KadınGirişim/>
  };
};