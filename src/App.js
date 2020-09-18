import React from 'react';
import style from './css/style.css';
import ListItems from './ListItems';

class App extends React.Component {
   
     state = {
                list:[],
                contents: {
                  text: '',
                  key:  '', }
             }
     
            //  added new value in input and it get update state.contents.text by target.value 
     handleInput = (evt)=>{
          this.setState({
            contents: {
                         text: evt.target.value,
                         key: Date.now()
                      }
          })
     }
     
    // submit the form first it prevent to reload and method help to added new list into state.list from 
    // this.state.contents that stored in newList variable and after setState updtae value on contents to empty 
     submit = (e) =>{
       e.preventDefault();
        const newList = this.state.contents;
        // all those .text and .key value comes from input that entered see in console.log and it get change depends on method 
        console.log(newList);
              
          if( newList.text !== "" ){
          const newLists = [...this.state.list, newList];
          this.setState({
            list: newLists,
            contents: {
              text: '',
              key: ''
            }
          })
        }        
    } 
      // delete list through filter method by finding key and setState list value to to FilterList variable 
    deleteList=(key)=>{
        const FilterList = this.state.list.filter(filt => filt.key!==key);
          this.setState({
            list: FilterList,
          })
    }

    // first newLists stored tha value of current this.state.list value then
    //text and key indicate onChange specific list to edit by map method on all list
    editList =(text, key)=>{
      const newLists =this.state.list;
        newLists.map((l) =>{
        if(l.key===key){
            l.text =text;
        }
        })
        this.setState({
          items: newLists,
        })
    }
  

  render(){
  return (
    <div className="App">
       
          <form onSubmit={this.submit} className="form-container"> 
          <div className="add-container">
            <input className="form-input" type="text"   onChange={this.handleInput} value={this.state.contents.text} placeholder="make yourself busy" />
            <button className="btn"  type="submit">Add</button> 
          </div> 
          {/* all those methos get passed to another Component by props */}
          <ListItems 
           showList={this.state.list}
           deleteList={this.deleteList} 
           editList={this.editList}
          />

          </form>
    </div>
  );
}
}
export default App;
