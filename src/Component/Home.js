import React, { Component , Fragment } from 'react';
import Nav from './Nav';


const Top = () => (
    <Fragment>
        <div style = {{ width:"40%" , 
                        marginTop:"100px",
                        display:"inline-block",
                        verticalAlign:"top" }}>
            <h1 style = {{  fontSize:"48px",
                            fontWeight:"400" }}>
                规划生活
            </h1>
            <h1 style = {{  fontSize:"48px",
                            fontWeight:"400",
                            color:"#e44232" }}>
                然后享受生活......
            </h1>
            <p style = {{   fontSize:"20px",
                            fontWeight:"400",
                            color:"#6f6f6f",
                            lineHeight:"30px" }}>
                生活可能让您倍感焦虑，但实际上您大可不必如此。Todoist可以让您跟进所有事情，这样您就可以轻松完成它们并享受之后的宁静时光。
            </p>
            <div style = {{ margin:"40px auto" }}>
                <button className = "button1">立刻加入</button> 
            </div>
        </div>
        <div style = {{ width:"60%" , 
                        marginTop:"100px",
                        display:"inline-block" }}>
            <img alt = "pic"
                 src = "https://d3ptyyxy2at9ui.cloudfront.net/illo-organized-life-bab9d6.png"
                 style = {{ width:"100%" }}  />
        </div>   
    </Fragment>
)

const Middle = () => (
    <Fragment>
        <div style = {{ marginTop:"100px",
                        width:"40%" , 
                        display:"inline-block" }}>
            <img alt = "pic"
                 src = "https://d3ptyyxy2at9ui.cloudfront.net/illo-remember-d31285.png"
                 style = {{ width:"100%" }}  />
        </div>

        <div style = {{ width:"60%" , 
                        marginBottom:"100px",
                        display:"inline-block",
                        verticalAlign:"top",
                        boxSizing:"border-box",
                        padding:"100px 0 0 100px" }}>
        
            <p style = {{   fontSize:"32px",
                            fontWeight:"400",
                            color:"#474747",
                            lineHeight:"60px" }}>
                再也不用担心会忘记任何事
            </p>

            <p style = {{   fontSize:"20px",
                            fontWeight:"400",
                            color:"#6f6f6f",
                            lineHeight:"30px" }}>
                让Todoist帮您记住所有事情。您可以随时随地将任务从您的脑海中移到您任何设备的任务清单上，即使离线也没问题。
            </p>
        </div>
    </Fragment>
)

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         };
    }

render() {
return (
    <Fragment>
        <Nav/>
        <div style = {{ width:"100%",
                        padding:"0 15%" }}>
            
            <Top/>
            
            <Middle/>

        </div>
    </Fragment>
);
}
}

export default Home;