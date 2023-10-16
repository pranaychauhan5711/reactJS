import React, {useState , useEffect} from 'react'
import './style.css';
import {ReactComponent as Logo} from './G20.svg';
// npm install react-helmet , install this library if you havn't
import {Helmet} from 'react-helmet';
const Todo = () => {
            const getLocalData = () => {
              const lists = localStorage.getItem('octtodo');
              if(lists){
              return JSON.parse(lists);
              }
              else
              {
                return [];
              }
            }
  const [InputData,setInputData] = useState('');
  const [Items,setItems] = useState(getLocalData());
  const [ToggleButton, setToggleButton] = useState(false);
  const [EditItem, setEditItem] = useState(null);

  const addItem = () => {
    if(!InputData){
      alert('please fill data');
    }
    else if (InputData && ToggleButton){
      setItems( items.map((curElem) => {
        if(curElem.id===EditItem){
        return{...curElem, name:InputData};
        }
        return curElem;
      }))
      setToggleButton(false);
      setInputData("");
    }
    else if(InputData){
      const myNewInputData = {
        id:new Date().getTime().toString(),
        name:InputData,
      }
      setItems([...items,mynewInputData]);
      setInputData("");
      setToggleButton(false);
    }
  }
  const editItem = (id) => {
    const editItem = items.find((curElem) => {
      return curElem.id === id ;
    })
    setInputData(editItem.name);
    setEditItem(editItem.id);
    setToggleButton(true);
  }
const deleteItem = (id) => {
const updatedItems = items.filter((curElem) => {
  return curElem.id!=id;
})
  setItems(updatedItems);
}
  const deleteAll = () => {
    setItems ([]);
  }
useEffect(()=>{
  localStorage.setItem("octtodo",JSON.stringify(items));
}[items]);
  return (
    <>
     <Helmet>
      <title>Todo Lists</title>
     </Helmet>
    <div className='main-div'>
    <div className='child-div'>
    <figure>
    <Logo width={'20rem'} height={'20rem'} fill={'#ffffff'} className='Logo'/>
    <figcaption> Add Your Todo Tasks Here</figcaption>
    </figure>
    <div className='addItems'>
    <input type='text' placeholder='Add Items' className='form-control' value={InputData} onChange={(event)=>{setInputData(event.target.value)}}/>
    {
      toggleButton ? (
        <i className='fa fa-edit add-btn' onClick={addItem}></i>
        ):(
        <i className='fa fa-plus add-btn' onClick={addItem}></i>)        
    }
</div>
  <div className='showItems'>
  { 
    items.map((curElem) => {
      return (
        <div className='eachItem'>
        <h3>{curElem.name}</h3>
              <div className='todo-btn'>
              <i className='far fa-edit add-btn' onClick={() => {editItem(curElem.id)} }</i>
  </div>
  </div>
  )
    })
}

</div>
  <div className='showItems'>
  <button className='btn effect04' data-sm-link-text='RemoveAll' onClick={deleteAll}>
  <span>CheckList</span>
  </button>
  </div>
  </div>
  </div>
    </>
    
  )
}
export default Todo;

