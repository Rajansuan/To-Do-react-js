import React from "react";

const Todo = (props)=>
{

    return(
        <><div className="falist">
            <i className="fa fa-times" onClick={()=>
            {
                props.setDelete(props.id);
            }}>
            
            </i> <li> {props.text} </li>

        </div>
        </>
            )
}

export default Todo;