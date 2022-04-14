import React, { Component } from 'react'
import MenuHeader from './MenuHeader'
import'../css/MenuHeader.css'
import { dataFormations } from './dataFormations'
import { dataExperiences } from './dataExperiences'
// import ArrayDataFormation from './ArrayDataFormation'
// import ArrayDataExperiences from './ArrayDataExperiences'
import ArrayData from './ArrayData'
import'../css/Formation.css'
export default class Formations extends Component {
    render() {
        return (
            <div>
                <MenuHeader/>
                
                <div id='tab'>
                    {/* <ArrayDataFormation/>
                    <ArrayDataExperiences /> */}
                    <ArrayData data={dataFormations} title="FORMATIONS"/>
                    <ArrayData data={dataExperiences} title="EXPÉRIENCES"/>
                </div> 
            </div>
        )
    }
}
