import React from 'react'
import { Card,  CardHeader,  CardBody,
    } from 'reactstrap';
    import {Link} from "react-router-dom";

const  SideBar = () => {
    return (
        <div className= 'side-bar'>
        <div body inverse  className= 'side-bar-info'>
            <div className='memorial-details'>
                <div>Info</div>
             </div> 
             <div> 
                <p className='details1'>Memorial Date: 09/02/2020</p>
                <p className='details2'>Location: <br></br>520 Smith Church Rd, Roanoke Rapids, NC 27870</p>
                <p className='Zoom'>Zoom Link: <br></br> Comming Soon</p>
                </div> 
        </div>   
        <div body inverse  className= 'side-bar-links'>    
            <div className ='shared-links'>
                <div>Links</div>
                </div>
                <div> 
                <a href="https://www.facebook.com/groups/942847939527684" target="_blank">Facebook Group</a>
                <p className='shared2'> </p>
                <p className='shared3'> </p>
                </div>
        </div>
        </div>
    )
}

export default  SideBar
