import React, { Component , Fragment} from 'react';
import { Divider } from 'antd';

import '../App.css'
import Nav from './Nav';
import AddTask from './AddTask';
import UndoneList from './UndoneList';
import storage from '../model/storage';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            todoList:[ ],
            doneList:[ ],
            task:"",
            content:"",
            expireDate:""
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

    TaskChange = (e) => {   
        this.setState({
             task:e.target.value
        })
    }   

    ContentChange = (e) => {
        this.setState({
            content:e.target.value
        })
    }   

    ExpireDateChange = (value,dateString) => {    
        this.setState({
            expireDate:dateString
        })
    }   


    AddList = () => {
        let tempAddList = this.state.todoList

        tempAddList.push({
            task:this.state.task,               
            content:this.state.content,
            expireDate:this.state.expireDate,
        })

        this.setState({
            todoList:tempAddList
        })
        storage.set('todoList',tempAddList)

        window.location.reload(); 
    }

    deleteList = (index) => {
        let tempDeleteList=this.state.todoList

        tempDeleteList.splice(index,1)
  
        this.setState({
            todoList:tempDeleteList
        })

        storage.set('todoList',tempDeleteList)
    }

    b = (index) => {
        let tempDeleteList=this.state.todoList

        tempDeleteList.splice(index,1)      

        this.setState({
            todoList:tempDeleteList,
        })

        storage.set('todoList',tempDeleteList)
    }
    
    
    handleDone = (item,index,e) => {
        let tempDoneList=this.state.doneList

        tempDoneList.push(item)

        this.setState({
            doneList:tempDoneList
        });

        this.b(index)   

        storage.set('doneList',tempDoneList)
    }

    handleFirst = (index) => {
        let temptodolist = this.state.todoList

        let str = temptodolist.splice(index,1)         //将选中的item删除

        temptodolist.unshift(str[0])                   //将选中的item放置于列表第一

        this.setState({
            todoList:temptodolist
        })
        storage.set('todoList',temptodolist)

        window.location.reload(); 
    }

render() {


return (
    <Fragment>

        <Nav/>
        
        <div style= {{  width:"80%",
                        margin:"0 auto",    
                        fontSize:"20px" }}>

            <h1 style = {{  fontSize:"40px" ,
                            textAlign:"center",
                            fontWeight:"800" ,
                            color:"#484848",
                            margin:"30px 0" }}>
                所有代办任务
            </h1>

            <UndoneList all={this} />

        </div>

        <Divider/>

        <AddTask  all={this} />  

    </Fragment>
);
}
}