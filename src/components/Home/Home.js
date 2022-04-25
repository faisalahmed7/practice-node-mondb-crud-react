import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    const handleUserDelete = id => {
        const confirm = window.confirm('Are You Sure Want To Delete?')
        if (confirm) {
            console.log('Deleted user successfully', id);
            const url = `http://localhost:5000/user/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = users.filter(user => user._id !== id)
                        setUsers(remaining)
                        console.log(data)
                    }
                })
        }
    }


    return (
        <div>
            <h2>Available Users:{users.length}</h2>
            <ul>
                {
                    users.map(user => <li key={user._id}>Name:{user.name}, Email:{user.email}
                        <Link to={`/update/${user._id}`}><button>Update User</button></Link>
                        <button onClick={() => handleUserDelete(user._id)}>X
                        </button> </li>)
                }
            </ul>
        </div>
    );
};

export default Home;