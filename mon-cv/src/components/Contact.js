import React, { Component } from 'react'
import MenuHeader from './MenuHeader'
import '../css/Contact.css'
import Map from '../img/map.png'
import House from '../img/house.svg'
import Telephone from '../img/telephone.svg'
import Envelope from'../img/envelope.svg'
import Building from '../img/building.svg'
import At from '../img/at.svg'
export default class Contact extends Component {
    render() {
        return (
            <div >
                <MenuHeader/>
                <div id='contact'>
                    <h2>CONTACT</h2>
                  
                    <div id ='map'>
                        <div>
                            <img src={Map} alt = "carte"/>
                        </div>
                        <div id='coordonnee'>
                            <p><img src={House} alt='house'/> : 18 rue Théodore Monod <br/>77176 SAVIGNY LE TEMPLE</p>
                            <p><img src={Telephone} alt='telephone'/> : 06 66 46 69 98</p>
                            <p><img src={At} alt='mail'/> : ly.francois@hotmail.fr</p>
                        </div>
                    </div>
                    <div id='centreFormation'>
                        <h3>Mon centre de formation</h3>
                        <h4><img src={Building} alt='immeuble'/> : ALT-RH Consulting<br/>La Grande Arche Paroi Nord<br/>92 004 PARIS LA DEFENSE</h4>
                        <h4><img src={Telephone} alt='telephone'/> : 01 40 90 30 98</h4>
                        <h4><img src={At} alt='@'/> : contact@alt-rh.com</h4>
                    </div>
                </div> 
            </div>
        )
    }
}
