import React, { Component } from 'react'
import MenuHeader from './MenuHeader'
import FrontEnd from './FrontEnd.js'
import BackEnd from './BackEnd.js'
import Autres from './Autres.js'
import '../css/competences.css'
export default class Competences extends Component {
    render() {
        return (
            <div>
                <MenuHeader/>
                <div id="competences">
                    <h2>COMPÉTENCES</h2>
                    <FrontEnd/>
                    <BackEnd/>
                    <Autres/>

                </div>
            </div>
        )
    }
}
