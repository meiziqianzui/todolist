import React, { Component } from 'react';
import { Popover , Input , Button , DatePicker} from 'antd';
import storage from '../model/storage';
import '../App.css';
import moment from 'moment';

const dateFormat = 'YYYY/MM/DD';
const { TextArea } = Input;

class UndoneList extends Component {

    ExpireDateChange = (index,defaultValue) => {    
        let temptodolist = this.props.all.state.todoList
        
        temptodolist[index].expireDate=defaultValue.format('YYYY/MM/DD')

        this.props.all.setState({
           todoList:temptodolist
        })

        storage.set('todoList',temptodolist)
    }   

    textAreachange = (e) => {
        this.props.all.setState({
            content:e.target.value
        })
    }

    changecontent = (index) =>{
        let temptodolist = this.props.all.state.todoList
        
        temptodolist[index].content=this.props.all.state.content

        this.props.all.setState({
            todoList:temptodolist
        })

        storage.set('todoList',temptodolist)
    }

render() {

return (         
    <div 
        style = {{  width:"80%" ,
                    margin:"0 10%",
                    fontFamily:"kaiti",
                    color:"#484848",
                    fontSize:"25px",
                    fontWeight:"600" }}>

        <div style = {{ width:"20%" ,
                        marginRight:"20%",
                        textAlign:"center",
                        display:"inline-block"}}>
            任务
        </div>

        <div style = {{ width:"20%" ,
                        marginRight:"20%",
                        display:"inline-block"}}>
            截止日期
        </div>

        {
            this.props.all.state.todoList.map( (item,index) => (
                <div 
                    key = { index } 
                    style = {{  height:"80px",
                                fontSize:"20px",
                                fontWeight:"400",
                                padding:"25px 0",
                                borderBottom:"solid 1px #EDEDED"}}>    

                    <div style = {{ width:"30%" ,
                                    marginRight:"10%",
                                    display:"inline-block" }}>
                        <div style = {{ display:"inline-block", 
                                        marginRight:"10px" }} >
                            <Popover 
                                id = "ddd"
                                placement = "left" 
                                trigger = "click"
                                title = {`更改任务：${item.task}`}
                                style = {{ width:"400px" }}
                                content = {(
                                    <div>
                                
                                        <TextArea  
                                            defaultValue = { item.content }
                                            onChange = { this.textAreachange }
                                            autosize = {{ minRows: 10}}
                                            style = {{ marginTop:"20px" }}/>


                                        <Button 
                                            onClick = { this.changecontent.bind(this,index) } 
                                            style = {{  width:"50%",
                                                        height:"30px",
                                                        marginTop:"15px",
                                                        marginLeft:"50%" }}>
                                            确认
                                        </Button>  

                                    </div>)}>
                                        
                                <span style = {{ fontSize:"15px" }}>
                                    编辑        
                                </span> 
                            </Popover>
                        </div>

                        <Popover    
                                placement = "right" 
                                title = { item.task }
                                content = { item.content }
                                trigger = "click">
                            { item.task }
                        </Popover>

                    </div>
                    
                    <div className = "boxstyle" >
                        <DatePicker defaultValue = {moment(`{${ item.expireDate }}`, dateFormat)} 
                                    format = {dateFormat} 
                                    onChange = { this.ExpireDateChange.bind(this,index) }/>      
                    </div>

                    <div className = "boxstyle" >
                        <Button onClick = { this.props.all.handleDone.bind(this,item,index) }>
                            完成
                        </Button>
                    </div>

                    <div className = "boxstyle" >
                        <Button onClick = {  this.props.all.handleFirst.bind(this,index) }>
                            置顶
                        </Button>
                    </div>

                    <div className = "boxstyle" >
                        <Button onClick = {  this.props.all.deleteList.bind(this,index) }>
                            删除
                        </Button>
                    </div>
                </div>
            ))
        }
    </div>
);
}
}


export default UndoneList;
