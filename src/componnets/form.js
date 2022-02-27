import { useState } from "react";
import Input from "./input";
import usersApi from '../usersApi';


const Form = () => {
    const [usersApiArr, setUsersApiArr] = useState(usersApi) // saving usersApi as state
    let usersArr = [];                                       // creating empty arr for usernames
    for (let user of usersApiArr) {                          // saving username of each user in array
        usersArr = [...usersArr, user.username]
    }
    const  [enteredText, setEnteredText] = useState('');     // state of input
    const [showList, setShowList] = useState(true)           // state of suggestions list - boolean
    const onChangeHandler = e => {                           // onChangeHandler for input
        setEnteredText(e.target.value)
        enteredText.length && setShowList(true)
    }
    const onClickHandler = e => {                            // onClickHandler for suggestions list item
      setEnteredText(e.target.innerText);
      setShowList(false);
    }
    const filterUsers = (usersArr, enteredText) => {         // function which returns array of filtered usernames
      return [...usersArr].filter(
        user => 
        enteredText.length > 0 && 
        user.substr(0, enteredText.length).toUpperCase() === enteredText.toUpperCase()
        )
    }
    let usersMatchArr = filterUsers(usersArr, enteredText)   // fucntion call

    return (
        <>
            <form>
                <Input 
                    onClickHandler={onClickHandler}
                    onChangeHandler={onChangeHandler}
                    enteredText={enteredText}
                    usersArr={usersArr}
                    usersMatchArr={usersMatchArr}
                    showList={showList}
                />
                <button>Submit</button>
            </form>
        </>
    )
};
export default Form