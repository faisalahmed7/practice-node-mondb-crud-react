import React from 'react';

const AddUser = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;

        const user = { name, email }

        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log("success", data)
                alert('User is Added Successfully')
                e.target.reset()
            })
    }
    return (
        <div>
            <h2>ADD USER</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder='Name' required />
                <br />

                <input type="email" name="email" id="" placeholder='Email' required />
                <br />

                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;