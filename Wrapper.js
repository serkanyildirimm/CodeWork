import React from "react";
import Router from './Router';
import FavoriteProvider from "./src/context/Provider";

const Wrapper=()=>{
    return (
        <FavoriteProvider>
            <Router/>
        </FavoriteProvider>
    )
}
export default Wrapper;