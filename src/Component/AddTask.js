import React from 'react'; 
import { Input , DatePicker, Divider , Button} from 'antd';

const { TextArea } = Input;

const AddTask = (props) => ( 
    <div style = {{ width:"60%", 
                    height:"550px",
                    margin:"50px auto",
                    padding:"50px 100px",
                    border:"solid 1px #EDEDED" }}>
                        
        <h1>快来增加新的任务吧！</h1>
        
        <Input  
            onChange = { props.all.TaskChange }
            placeholder = "任务简介"
            style = {{  width:"40%",
                        height:"40px",
                        marginRight:"10%" }}/>
        
        <DatePicker 
            id = "dateinput"
            onChange = { props.all.ExpireDateChange }
            style={{ width: '50%' }} /> 


        <Divider/>   

        <h1>任务内容</h1>

        <TextArea   
            value = {props.all.state.content }
            onChange  = {props.all.ContentChange } 
            autosize = {{ minRows: 8 }}
            style = {{  width:"100%",
                        marginBottom:"10px" }} />

        <Button onClick = { props.all.AddList } 
                style = {{  width:"50%",
                            height:"50px",
                            marginLeft:"50%" }}>
            上传
        </Button>                         
    </div>

)

export default AddTask;

