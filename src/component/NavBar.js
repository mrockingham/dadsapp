import React, {useEffect,useState} from 'react'
import {
Link
  } from "react-router-dom";



const NavBar = () => {

    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
        const offset=window.scrollY;
        if(offset > 200){
            setScrolled(true)
        }
        else{
            setScrolled(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
    })
    let navbarClasses=['navContainer'];
    if(scrolled){
        navbarClasses.push('scrolled')
    }

    return (
        <div className= {navbarClasses.join('')}>
            <div className= 'navContainer'>
                <div className= 'nav-list'>
                    <Link className="home-link" to='/'>Home</Link>
                    <Link className="gallery-link" to='/gallery'>Gallery</Link>
                    <Link className="memories-link" to='/memories'>Sharable</Link>
                </div>
            </div>
            
        </div>
    )
}

export default NavBar
