import React, {useState} from "react";
import styled from "styled-components";
import { Link, useHistory } from 'react-router-dom';

import KadınGirişimIcon from '.../assets/KadınGirişim.png'
import x-markIcon from '.../assets/x-mark.png'

const StyledKadın = styled.div'
position: fixed;
top:0;
left: 0;

display: flex;
align-items: center;
height: 100vh;
width: 100vh;
justify-contect: center;

.background.mask{
    position: fixed;
    top:0;
    left: 0;
    background-color: #c4c4c4;
    opacity: 0.46;
    height: 100vh;
    width: 100vh;
}

.menu-contect-kadın{
    border: 3px solid #465775;
    height: 400px;
    width: 250px;
    border-radius: 15px;
    position relative;
    z-index: 99;
    display: felx;
    flex-direction: column;
    justify-content: space-evelyn;

    .close{
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;

        :hover{
            opacity: 0.8;
        }
    }
  
   .KadınGirişim-list {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    list-style: none;

    li {
        text-aling: center;
        margin-top: 10px;
        font-size: 20px;
        color: #465775;
        a{
            text-decoration: none;
            color: #465775;

            :hover{
                opacity: 0.8;
            }
       }
     }
   }

   

   .giriş-button{
    background-color: #465775;
    padding: 10px;
    color: #fff;
    border: None;
    cursor: pointer;

    :hover{
      opacity: 0.8;
    }
   }
  }
';

export const KadınGirişim = () => {
    const[visible, setVisible] = useState(false);
   return (
    <div className="hide-desktop">
        <div onClick={ () => setVisible(true)}>
        <img src={KadınGirişimIcon} alt="KadınGirişim" />
    </div>
    { visible && (
    <StyledKadın>
      <div onClick=[() => setVisible(false)] className="background.mask" />
      <div className="menu-content-Kadın">
        <img onClick={()=> setVisible(false)} 
        src={x-markIcon}
         alt="close" 
         className="close"
        />
        <ul className:"KadınGirişim-list">
            <li>
        <Link to="/">
            <li>
            <Link to="/">Anasayfa</Link>   
            </li>

            <li>
            <Link to="/hakkımızda"><li>Hakkımızda</li></Link>
            </li>

            <li>
            <Link to="/iletişim"> <li>iletişim</li></Link>
            </li>

            <li>
            <Link to="/private"><li>Private Area</li></Link>
            </li>
        </ul>
        <button className="giriş-button">Giriş</button>
        </div>
    </StyledKadın> 
     )}
   </div>
   );
};

