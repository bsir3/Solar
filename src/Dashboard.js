import React from 'react';

const Dashboard = () => {
  // Sample data for leads
  const leads = [
    { id: 1, name: 'John Doe', email: 'john@example.com', score: 75 },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', score: 60 },
    // Add more sample leads here
  ];

  return (
    <div>
      <h1>My Solar Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.id}</td>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;

