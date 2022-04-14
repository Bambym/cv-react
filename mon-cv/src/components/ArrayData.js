import React, { Component } from 'react'

export default class ArrayData extends Component {
    
    constructor(props){
        super(props)

    }



    render() {
        return (
            <div>
                  <h2>{this.props.title}</h2>
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
                            this.props.data.length > 0 && 
                                 
                            this.props.data.map( (data,index) => ( 

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
