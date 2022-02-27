

const List = (props) => {
    
    
    return (
        <div className="list">
            {
                props.showList &&
                props.usersMatchArr.sort().map((username) => 
                <p 
                    key={username}
                    onClick={props.onClickHandler}
                >{username}</p>)
            }
        </div>
    )
};

export default List