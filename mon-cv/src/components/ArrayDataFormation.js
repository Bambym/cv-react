import React, { Component } from 'react'
import { dataFormations } from './dataFormations'
import '../css/Formation.css'
export default class ArrayDataFormation extends Component {
    
   constructor(props){
       super(props)
       this.state={

        listOfData:dataFormations
       }
       
   }


    
    
    render() {
        return (
            <div id='formation'>
                <h2>FORMATIONS</h2>
                 <table>
                    <thead>
                        <tr>
                            <th id='date'  > Date </th>
                            <th id='description' > Description </th>
                            <th id='lieu' >Lieu</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.state.listOfData.length > 0 && 
                                 
                            this.state.listOfData.map( (data,index) => ( 

                                <tr key={index}  >
                                    <td> {data.date} </td>
                                    <td  >{data.description}</td>
                                    <td > {data.lieu} </td>
                                  
                                </tr>
                             ))

                        }

                    </tbody>
                </table>
            </div>
        )
    }
}
