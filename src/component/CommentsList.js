import React, {useState} from 'react'

import axios from 'axios'
import {useHistory} from 'react-router-dom'
import { Card, Button, CardHeader,  CardBody,
     Form, FormGroup, Label, Input,  } from 'reactstrap';


const CommentsList = (props) => {
   console.log('what is this ', props )
    const [inputC, setInputC]= useState({Name:'', comments:''})
    const {push} = useHistory()
    const history =useHistory()

const submit = (e)=>{
    e.preventDefault()

    axios.post('https://bigmike.herokuapp.com/api/comments', inputC)
   setInputC({Name:'', comments:''})
    push('/')
    history.go()
}

const handleChange = (event) =>{
    const {
        target: { name, value },
      } = event;
      //⬆this is the same as event.target.value\event.target.name
      setInputC({ ...inputC, [name]: value });
}


    return (
        <div className='comments-section'>
            <div clasName='comments-section-comments'>
            <h2 clasName='comments-section-comments'>Comments</h2>
            </div>
            <div className='comments'>
            {props.comments.map(comments =>{
                return(
                    <div>
                        <div className='read-comments'>
                            <div className='comment-name'>
                              Name: {comments.Name}  
                            </div>
                            <div className='comment-name'>
                              comment: {comments.comments}  
                            </div>
                         </div>
                     <div className='input-comments'>
                        
                     </div>
                    </div>
                )
                })}
            </div>
            <form onSubmit ={submit} className='comments-form'>
                
                <h2 className='comments-section-leave'>Leave A Comment...</h2>
                <h2 className='comments-input-name'>Name</h2>
            <Input
                type='text'
                name='Name'
                placeholder="Type a message"
                value={inputC.Name}
                onChange={handleChange}
            />
            <h2 className='comments-input-name'>Comment</h2>
            <Input
                className='comment-story-input'
                type='textarea'
                name='comments'
                placeholder="Type a message"
                value={inputC.comments}
                onChange={handleChange}
            />
            <div></div>
            <Button style={{marginTop:'2%'}} type='submit' value="submit" className='btn1 solid'>Submit</Button>
            
             </form>   
            </div>
    )
}

export default CommentsList
