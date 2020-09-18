import React from 'react';
import style from './css/style.css';
import Flipmove from 'react-flip-move';

const ListItems = (props) => {
    const itemList =  props.showList.map(items =>{
     return <div className="list-items" key={items.key}>
                   <p>
                     <input type="text" id={items.key} value={items.text}
                      onChange={(e)=> {props.editList(e.target.value, items.key)} }
                     />  
                   </p>
                   <span>
                         <i class="fas fa-trash-alt" onClick={()=> props.deleteList(items.key)}></i>
                   </span>
            </div>
    });
    return (
        <div >
           <Flipmove duration={400} easing="ease-in-out">
           {itemList}  
           </Flipmove>
        </div>
    )
}
export default ListItems;