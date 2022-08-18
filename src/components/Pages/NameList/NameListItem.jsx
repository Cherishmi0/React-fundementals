import React from 'react'
import moment from 'moment'
function NameListItem(props){
    return(
        <li className='list-group-item'>
            <div className='row align-items-center'>
                <div className='col-2'>
                    <img src={props.avatar} className="border rounded-circle" /> 
                </div>
                <div className='col-auto'>
                    <h6>{props.name}</h6>
                    <span>{props.city} | Email: {props.email}</span><br />
                    <small>{moment(props.birthday).format('DD-MM-YYYY')}</small>
                </div>
            </div>            
        </li>
    )
}

export default NameListItem;