import React, { Component } from 'react'

export default class FrontEnd extends Component {
    render() {
        return (
            <div id='front'>
                <h3>Front-End</h3>
                <p>Développer la partie front-end d’une application web ou web  mobile  en  intégrant  les  recommandations  de sécurité.</p>
                <p>HTML</p>
                <div id='progress'>
                    <div className='progress'>
                    <div className='progress-bar' role='progressbar' style={{width:'80%'} } aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>80%</div>
                    </div> 
                </div>
                <p>CSS</p>
                <div id='progress'>
                    <div className='progress'>
                    <div className='progress-bar' role='progressbar' style={{width:'80%'} } aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>80%</div>
                    </div> 
                </div>
                
                <p>JAVASCRIPT</p>
                <div id='progress'>
                    <div className='progress'>
                    <div className='progress-bar' role='progressbar' style={{width:'60%'} } aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>60%</div>
                    </div> 
                </div>
                
                <p>REACT</p>
                <div id='progress'>
                    <div className='progress'>
                    <div className='progress-bar' role='progressbar' style={{width:'60%'} } aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>60%</div>
                    </div> 
                </div>
                
            </div>
        )
    }
}
