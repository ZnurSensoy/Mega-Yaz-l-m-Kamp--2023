import React from "react";
import { Routes } from "./conponents/Routes";
import { AppProvider } from "/.providers/AppProvider";
import styled from "stayled-companents";

conts styledApp = styled.div'
.hide-mobile{
  @media (max-width: 768px){
   display: none; 
  }
}

 hide-desktop{
  @media (min-width: 768px){
    display: none; 
 }
';
export const app = () => {
    return {
        <styledApp>
        <AppProvider>
          <Routes />;
        </AppProvider>
        </styledApp>
    };
};
