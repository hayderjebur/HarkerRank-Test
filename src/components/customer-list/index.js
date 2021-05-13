import React, { useState } from 'react';
import './index.css';

function CustomerList() {
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) return;
    setUsers([...users, user]);
    console.log(users);
  };
  return (
    <div className='mt-75 layout-column justify-content-center align-items-center'>
      <section className='layout-row align-items-center justify-content-center'>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setUser(e.target.value)}
            value={user}
            name='name'
            type='text'
            className='large'
            placeholder='Name'
            data-testid='app-input'
          />
          <button type='submit' className='ml-30' data-testid='submit-button'>
            Add Customer
          </button>

          {users.map((user, i) => (
            <ul className='styled mt-50' data-testid='customer-list'>
              <li
                key={i}
                className='slide-up-fade-in'
                data-testid='list-item1'
                key='list-item1'
              >
                {user}
              </li>
            </ul>
          ))}
        </form>
      </section>
    </div>
  );
}

export default CustomerList;
