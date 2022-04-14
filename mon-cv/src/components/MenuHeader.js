import React from "react";
import {Link} from 'react-router-dom'
import'../css/MenuHeader.css'
import ReactLogo from'../img/reactjs-icon.svg'
import CV from '../img/CvLyFrancois.pdf'
class MenuHeader extends React.Component{
    render(){ 
          return(  
            <div id='header'>
                {/*        
                <ul className='menu-ul'>
                    <img classNam="react" src={ReactLogo} width="150px" height='150px' alt='logo react'/>
                    <li> Accueil</li>
                    <li> Formations</li>
                    <li> Competences</li>
                    <li>Contact</li>
                </ul> */}
                <ul className='menu-ul'>
                    <img classNam="react" src={ReactLogo} width="150px" height='150px' alt='logo react'/>     
                    <li><Link to='/'> Accueil</Link></li>
                    <li><Link to='/Formations'> Formations</Link></li>
                    <li><Link to='/Competences'> Compétences</Link></li>
                    <li><Link to='/Contact'> Contact</Link></li>
                    
                </ul>
                <a href={CV} target='blank'>Télécharger mon CV en format PDF</a>
            </div> 
        ) 


    }
    
    
}

export default MenuHeader     
