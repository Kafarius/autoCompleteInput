import { useState } from "react";
import List from "./list";

const Input = (props) => {
    
    
    return (
        <div>
            <input 
                id="username"
                typeof="text"
                placeholder="Type Username"
                value={props.enteredText}
                onChange={props.onChangeHandler}
                required
            >
            </input>
            <List 
                onClickHandler={props.onClickHandler}
                enteredText={props.enteredText}
                usersArr={props.usersArr}
                usersMatchArr={props.usersMatchArr}
                showList={props.showList}
            />
        </div>
    )
    
}

export default Input