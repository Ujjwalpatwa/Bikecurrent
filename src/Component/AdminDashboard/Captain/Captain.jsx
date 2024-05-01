import React, { useState, useEffect } from 'react';

function Captain() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch users data from the backend API
    fetch('/api/captain/getall')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Captain;
