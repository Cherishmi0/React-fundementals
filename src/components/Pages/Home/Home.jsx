import React from 'react'

function Home(){

    const numbers = [
        {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
        {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ];
    const listItems = numbers.map((number) =>
        <li key={number.id}>
            {number.title} - {number.content}
        </li>
    );

    const iLists = numbers.map((number, index) =>
        <tr>
            <td>{number.id}</td>
            <td>{number.title}</td>
            <td>{number.content}</td>
        </tr>
    );

    return (
        <>
            <div className='container mt-4'>
                <h3>Welcome</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                {listItems}
                <p>Table</p>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Content</th>
                        </tr>
                    </thead>
                    <tbody>
                        {iLists}
                    </tbody>
                </table>
            </div>
        </>
    )

}

export default Home;