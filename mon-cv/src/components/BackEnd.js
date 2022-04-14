import React, { Component } from 'react'

export default class BackEnd extends Component {
    render() {
        return (
            <div id='back'>
                <h3>Back-End</h3>
                <p>Développer la partie back-end d’une application web ou web mobile en intégrant les recommandations de sécurité.</p>
                <p>Node JS</p>
                <div id='progress'>
                    <div className='progress'>
                    <div className='progress-bar' role='progressbar' style={{width:'0%'} } aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>0%</div>
                    </div> 
                </div>
                <p>PHP</p>
                <div id='progress'>
                    <div className='progress'>
                    <div className='progress-bar' role='progressbar' style={{width:'0%'} } aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>0%</div>
                    </div> 
                </div>
                
                <p>My SQL</p>
                <div id='progress'>
                    <div className='progress'>
                    <div className='progress-bar' role='progressbar' style={{width:'0%'} } aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>0%</div>
                    </div> 
                </div>
                
                <p>J QUERY</p>
                <div id='progress'>
                    <div className='progress'>
                    <div className='progress-bar' role='progressbar' style={{width:'0%'} } aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>0%</div>
                    </div> 
                </div>
            </div>
        )
    }
}
