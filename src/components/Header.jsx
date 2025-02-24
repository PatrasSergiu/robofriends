import React from "react";
import CounterButton from "./CounterButton";


const Header = () => {
    return <>
    <h1 className="f1">ROBO FRIENDS</h1>
    <CounterButton color= {'red'}></CounterButton>
    </>
}

export default React.memo(Header);