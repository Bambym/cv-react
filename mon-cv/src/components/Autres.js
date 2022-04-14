import React, { Component } from 'react'

export default class Autres extends Component {
    render() {
        return (
            <div id='autres'>
                 <h3>Autres</h3>
               
                <p>WordPress</p>
                <div id='progress'>
                    <div className='progress'>
                    <div className='progress-bar' role='progressbar' style={{width:'50%'} } aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>50%</div>
                    </div> 
                </div>
                <p>Bootstrap</p>
                <div id='progress'>
                    <div className='progress'>
                    <div className='progress-bar' role='progressbar' style={{width:'50%'} } aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>50%</div>
                    </div> 
                </div>
                
            </div>
        )
    }
}
