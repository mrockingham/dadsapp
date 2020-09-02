import React, {useState} from 'react'
import Comments from './comments'
import { Card, Button, 
    Modal, ModalHeader, ModalBody, ModalFooter, CardBody, CardHeader } from 'reactstrap';
import SideBar from './SideBar';
import useFirestore from '../hooks/useFirestore'


const About = (props) => {
    const {docs} = useFirestore('images')
    console.log('the img docs on about', docs)

    let newUrl = docs.map(doc=>(
        doc.url
    )
        
    )
console.log('the new url', newUrl)
    

const randomImg = (docs) => {
    return newUrl[Math.floor(Math.random()*newUrl.length)]
        }
console.log('the randomImg', randomImg())
const randomImg2 = (docs) => {
    return newUrl[Math.floor(Math.random()*newUrl.length)]
        }
console.log('the randomImg', randomImg())
console.log('the randomImg2', randomImg2())

const Image = randomImg()
const Image2 = randomImg()

// 

 const {
    
    className
  } = props;

//   const classBackground =  {
//     backgroundImage: `url(${randomImg(docs)})`
//   }

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
    return (
        <div className='extra-containter1'>
            
                    <div className='about-container-top' >
            <div className='about-container'>
                
            <div body inverse style={{ backgroundColor: 'grey',                borderColor: '#333' }} className ='about-section'>
                     <div className='about-title'>
                         <h2>History</h2>  
                    </div>
                        <div className='about-box'>
                            <p className='about-text-box'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices blandit varius. Quisque pharetra fermentum ex eget bibendum. Nullam ac vestibulum urna, in lobortis neque. Nunc malesuada justo volutpat lacus imperdiet, a dapibus elit gravida. Maecenas ex turpis, mattis consequat lectus at, pellentesque placerat mi. Integer elementum purus et magna vestibulum interdum. </p>
                        </div>
                
                </div>
                <section className="middle-pic-about" style= {{backgroundImage: `url(${Image})`}}>what is this</section>
                <div className='update-section'>
                    <div className = 'update-title'>
                        <h2>Updates</h2>
                    </div>
                    <div className='update-box'>
                        <p className='update-text-box'>
                        Hi, I just wanted to let everyone know, we will be having a memorial
                        service for Michael BigMike Rockingham on Sept, 2 at 11:00 am. For 
                        anyone, not able to attend we will also be holding a Virtual Zoom video chat as well. Link well be coming soon. 
                        </p>
                    
                    <Button style={{fontWeight: '900'}} color="muted" onClick={toggle}>More info</Button>
                        <Modal isOpen={modal} toggle={toggle} className={className}>
                         <ModalHeader toggle={toggle}>Updates</ModalHeader>
                                <ModalBody>
                         Hi, I just wanted to let everyone know, we will be having a memorial
                        service for Michael BigMike Rockingham on Sept, 2 at 11:00 am. For 
                        anyone, not able to attend we will also be holding a Virtual Zoom video chat as well. Link well be coming soon.
                                </ModalBody>
                                <ModalFooter>
                                     {' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                                </ModalFooter>
                                </Modal>
                     </div>           
                </div>
                
            </div>

         </div>  
         
                
    <div className='about-comments'>
         <section className="middle-pic-about2" style= {{backgroundImage: `url(${Image2})`}}>what is this</section>
            
         </div>         

        </div>  
        
          
    )
}

export default About
