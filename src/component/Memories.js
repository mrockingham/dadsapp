import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Memorieslist from './Memorieslist'

const Memories = props => {
    const [memories, setMemories] = useState([])

useEffect(()=>{
    axios.get('https://bigmike.herokuapp.com/api/stories')
    .then(res=>{
        console.log(res.data)
        setMemories(res.data)
    })
},[])
    return (
        <div>
            <Memorieslist key={memories.id} memories={memories} />
        </div>
    )
}

export default Memories
