import React, { useState } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

const FavoriteProvider=({children})=>{
    const [favoriteList,setFavoriteList]=useState([]);
    const store=createStore(reducers,{favoriteList})

    return <Provider store={store}>{children}</Provider>

}
export default FavoriteProvider;