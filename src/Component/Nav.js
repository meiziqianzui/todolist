import React from 'react';
import { Link } from 'react-router-dom';

const routes =[
    {   
        path:"/",
        title:"首页",
    },
    {   
        path:"/todolist",
        title:"代办事项",
    },
    {   
        path:"/donelist",
        title:"已完成事项",
    },
]


const Nav = () => (
    <div style = {{ position:"sticky",
                    top:"0",
                    width:"100%",
                    backgroundColor:"white",
                    borderBottom:"solid 1px #EDEDED", }}>
        <div style = {{ width:"70%",
                        height:"70px",
                        padding:"5px ",
                        margin:"auto",
                        boxSizing:"border-box",
                        }}>

            <div style = {{ float:"left" }}>
                <img    alt = "todoist"
                        src = "https://d3ptyyxy2at9ui.cloudfront.net/logo-todoist-b5b89f.svg" 
                        style = {{  height:"30px",
                                    margin:"15px"}}/>
            </div>
            <div style = {{ float:"right",
                            height:"60px"}}>
                {
                    routes.map( (item,key) => (
                        <div 
                            key = { key }
                            style = {{  fontSize:"20px",
                                        lineHeight:"60px",
                                        margin:"0 20px",
                                        textAlign:"center",
                                        display:"inline-block" }}>

                            <Link   to = { item.path } 
                                    style = {{  color:"black",
                                                textDecoration:"none"}}>
                                {item.title}
                            </Link>  
                        </div>
                    ))
                }
            </div>        
        </div>
    </div>
)

export default Nav;