import React, { Component } from 'react'
import MenuHeader from './MenuHeader'
import '../css/PageAccueil.css'
import Presentation from './Presentation'
import CentreInteret from './CentreInteret'
export default class PageAccueil extends Component {
    render() {
        return (
            <div id='container'>
               <MenuHeader/> 
               <div id='title'>
                    <h1>LY FRANÇOIS</h1>
                    <h2>Stagiaire </h2>
                    <h2> Développeur Web et Web Mobile</h2>
                    <p>Titre RNCP Niveau III</p>
                    <div id ="moi">
                        <Presentation/>
                        <CentreInteret/>
                    </div>
                </div>
            </div>
        )
    }
}
