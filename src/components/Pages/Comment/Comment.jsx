import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

export const Comment = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries();
    },[]);

    const getCountries = () =>{
        axios.get('https://restcountries.com/v2/all')
            .then(res => {
                setCountries(res.data);
            });
    };

    const columns = [
        {
            name: 'Country Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'Native Name',
            selector: row => row.nativeName,
        },
        {
            name: 'Capital',
            selector: row => row.capital,
        },
        {
            name: 'Flag',
            selector: row => <img width={50} height={50} src={row.flag} />,
        },
        {
            name: 'Action',
            cell: row => <button className='btn btn-sm btn-primary' onClick={() => alert(row.alpha2Code)}>Edit</button>
        }
    ];
    

    return (
        <div className='container mt-4'>
            <DataTable
                title="Country List"
                columns={columns}
                data={countries}
                pagination
                fixedHeader
                fixedHeaderScrollHeight='400px'
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                paginationPerPage={10}
                actions = {<button className='btn btn-sm btn-info'>Export</button>}
                subHeader
                subHeaderComponent = {
                    <input type="text" placeholder='Search' className='w-25 form-control' />
                }
                />
        </div>
    )
}
