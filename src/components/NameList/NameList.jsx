import React, { useState } from 'react'
import NameListItem from './NameListItem'
function NameList(){
    const [nameList, setNameList] = useState([
        {
            id: 1,
            name: {title:'mr', first: 'brad', last: 'gibson'},
            location: {city: 'Melbourne'},
            email: 'bread@gmail.com',
            dob: {date: '1991-01-07', age: 26},
            picture: {medium: 'https://randomuser.me/api/portraits/med/men/75.jpg'}
        },
        {
            id: 2,
            name: {title:'mr', first: 'Rob', last: 'hart'},
            location: {city: 'Sydney'},
            email: 'rob@gmail.com',
            dob: {date: '1991-02-07', age: 26},
            picture: {medium: 'https://randomuser.me/api/portraits/med/men/65.jpg'}
        },
        {
            id: 3,
            name: {title:'mr', first: 'clara', last: 'helena'},
            location: {city: 'Darwin'},
            email: 'clara@gmail.com',
            dob: {date: '1991-03-07', age: 26},
            picture: {medium: 'https://randomuser.me/api/portraits/med/men/55.jpg'}
        }
    ]);

    const nameListcomponent = () => {
        return nameList.map((aName) => {
            return (
                <NameListItem 
                    key={aName.id}
                    name={`${aName.name.first} ${aName.name.last}`}
                    city={aName.location.city}
                    email={aName.email}
                    birthday={aName.dob.date}
                    avatar={aName.picture.medium}
                />
            )
        })
    }

    const addUserHandler = () => {
        const newUser = {
            id: 3,
            name: {title:'mrs', first: 'Fiona', last: 'helena'},
            location: {city: 'Darwin'},
            email: 'clara@gmail.com',
            dob: {date: '1991-03-07', age: 26},
            picture: {medium: 'https://randomuser.me/api/portraits/med/men/55.jpg'}
        }
        //setNameList(nameList => nameList.concat(newUser));
        setNameList([...nameList, newUser]);
    }

    return(
        <React.Fragment>
            <div className='container mt-4'>
                <button className='btn btn-primary mb-2' onClick={addUserHandler}>Add Name</button>
                <ul className='list-group'>
                    {nameListcomponent()}
                </ul>
            </div>           
        </React.Fragment>
    )
}

export default NameList;