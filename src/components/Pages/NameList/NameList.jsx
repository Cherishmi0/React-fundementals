import React, { useState, useEffect } from 'react'
import NameListItem from './NameListItem'
function NameList(){
    const [loadData, setLoadData] = useState(new Date());
    const [nameList, setNameList] = useState([
        {
            id: 1,
            name: {title:'mr', first: 'brad', last: 'gibson'},
            location: {city: 'Melbourne'},
            email: 'bread@gmail.com',
            login: {"uuid": "a7bac34c-baa4-44e2-bd2c-73d189fabd79"},
            dob: {date: '1991-01-07', age: 26},
            picture: {medium: 'https://randomuser.me/api/portraits/med/men/75.jpg'}
        },
        {
            id: 2,
            name: {title:'mr', first: 'Rob', last: 'hart'},
            location: {city: 'Sydney'},
            email: 'rob@gmail.com',
            login: {"uuid": "a7bac34c-baa4-44e2-bd2c-73d189fabd78"},
            dob: {date: '1991-02-07', age: 26},
            picture: {medium: 'https://randomuser.me/api/portraits/med/men/65.jpg'}
        },
        {
            id: 3,
            name: {title:'mr', first: 'clara', last: 'helena'},
            location: {city: 'Darwin'},
            email: 'clara@gmail.com',
            login: {"uuid": "a7bac34c-baa4-44e2-bd2c-73d189fabd77"},
            dob: {date: '1991-03-07', age: 26},
            picture: {medium: 'https://randomuser.me/api/portraits/med/men/55.jpg'}
        }
    ]);

    useEffect(() =>{
        fetch("https://randomuser.me/api")
            .then(response => {
                return response.json();
            }).
            then(responseData => {
                console.log("2222");
                console.log("1111");
                setNameList(nameList => [...nameList, responseData.results[0]]);
            });
    },[loadData]);

    const nameListcomponent = () => {
        return nameList.map((aName) => {
            return (
                <NameListItem 
                    key= {aName.login.uuid}
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
        setLoadData(new Date());
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