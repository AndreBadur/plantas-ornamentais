// src/pages/index.tsx
import { useState, useEffect, FormEvent } from 'react';

// Define the User type to use with TypeScript
interface User {
  id: number;
  name: string;
  email: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]); // State to store the list of users
  const [name, setName] = useState<string>(''); // State for the user's name input
  const [email, setEmail] = useState<string>(''); // State for the user's email input
  const [error, setError] = useState<string>(''); // State to handle any errors

  // Fetch users from the API when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to fetch users
  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users');
      
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      setUsers(data); // Set the fetched users in state
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Failed to fetch users');
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name || !email) {
      setError('Please enter both a name and email');
      return;
    }

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        const newUser = await response.json();
        setUsers((prevUsers) => [...prevUsers, newUser]); // Add the new user to the list
        setName(''); // Clear the form fields
        setEmail('');
        setError('');
      } else {
        throw new Error('Failed to add user');
      }
    } catch (error) {
      console.error('Error adding user:', error);
      setError('Failed to add user');
    }
  };

  return (
    <div>
      <h1>User Management</h1>

      {/* Form for adding a new user */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Add User</button>
      </form>

      {/* Display any error messages */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display the list of users */}
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}