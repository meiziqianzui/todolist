import React, { Component } from 'react';
import Nav from './Nav';
import { Button } from 'antd';
import storage from '../model/storage';


class DoneList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            todoList:[ ],
            doneList:[ ],
        };
    }
    
    componentDidMount () {

        var tempDonelist=storage.get('doneList')
        var tempTodolist=storage.get('todoList')

        if( tempTodolist ){
            this.setState({
                todoList:tempTodolist
            })
        }
        if(tempDonelist){
            this.setState({
                doneList:tempDonelist,
            })
        }
    } 
    a = (index) => {
        let tempDonelist=this.state.doneList

        tempDonelist.splice(index,1) 

        this.setState({
            doneList:tempDonelist,
        })

        storage.set('doneList',tempDonelist);
    }

    b = (item) => {
        let tempTodolist=this.state.todoList

        tempTodolist.push(item)

        this.setState({
            todoList:tempTodolist,
        })

        storage.set('todoList',tempTodolist);

    }

    handleUndone = (index,item) => {
        this.a (index);
        this.b (item)    
    }

    deleteList = (index) => {
        let tempDoneList=this.state.doneList

        tempDoneList.splice(index,1)
  
        this.setState({
            doneList:tempDoneList
        })

        storage.set('doneList',tempDoneList)
    }


render() {
return (
    <div>
        <Nav/>

        <div style= {{  width:"70%",
                        margin:"0 15%",
                        textAlign:"center" }}>
            
            <h1 style = {{  fontSize:"40px" ,
                            textAlign:"center",
                            fontWeight:"800" ,
                            color:"#484848",
                            margin:"30px 0" }}>
                已完成事项
            </h1>

            {
                this.state.doneList.map( (item,index) => (
                    <div key = { index }
                         style = {{ height:"50px",
                                    fontSize:"25px",
                                    lineHeight:"50px",
                                    fontWeight:"600",
                                    textAlign:"left" }}>

                        <div style = {{ width:"25%",
                                        height:"50px",
                                        marginRight:"10%",
                                        fontSize:"20px",
                                        fontFamily:"kaiti",
                                        textAlign:"center",
                                        display:"inline-block",
                                        verticalAlign:"top",
                                        borderBottom:"solid 1px #EDEDED"}}> 
                            { item.task } 
                        </div>

                        <div style = {{ width:"45%",
                                        height:"50px",
                                        fontSize:"20px",
                                        fontFamily:"kaiti",
                                        textAlign:"left",
                                        overflow:"hidden",
                                        whiteSpace:"nowrap",
                                        textOverflow:"ellipsis",
                                        display:"inline-block",
                                        verticalAlign:"top",
                                        borderBottom:"solid 1px #EDEDED"}}> 
                            { item.content } 
                        </div>

                        <Button onClick = { this.deleteList.bind(this,index,item) }
                                style = {{  float:"right" ,
                                            height:"40px", 
                                            margin:"5px 10px" }}>
                            删除
                        </Button>

                        <Button onClick = { this.handleUndone.bind(this,index,item) }
                                style = {{  float:"right" ,
                                            height:"40px", 
                                            margin:"5px 10px" }}>
                            未完成
                        </Button>
                    </div>
                ))
            }
        </div>
    </div>
);
}
}

export default DoneList;