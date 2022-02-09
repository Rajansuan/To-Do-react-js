import React , {useState} from 'react';
import './index.css';
import Todo from "./Todo";

const App = ()=>
{
  const [flist, setlist] = useState("");
  const [item, setitem] = useState([]);

  const upDation = (event)=>
  {
      setlist(event.target.value);
  }
  const listItem = ()=>
  {
        setitem((olditems)=>
        {
          return [...olditems,flist];
        })
        setlist("");
  }
  const deleted = (id)=>
  {
      setitem((olditems)=>
      {
        return olditems.filter((arr,index)=>
        {
          return index !== id ;
        });
      });
  };

  return(
    <>
    <div className="main">
        <div className="container">
          <br />
          <h1>To do list</h1>
          <br />
          <input type="text" placeholder="add a item" onChange={upDation} value={flist}/>
          <button onClick={listItem}> + </button>
          <ul>
            {/* <li>{flist}</li> */}

            {item.map( (itemval, indi) =>
            {
                 return( <Todo text={itemval} key={indi} id = {indi} setDelete={deleted} />)
            })
            }
          </ul>
        </div>
        <div className="circle1"></div>
        <div className="circle2"></div>
    </div>

    </>
  )
}

export default App;
