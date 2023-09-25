import React from 'react';
import mockLeads from './mockLeads.json';

function LeadList() {
  return (
    <div>
      <h1>Lead List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Initial Score</th>
            <th>Engagement</th>
            <th>Follow-Up</th>
            <th>Data Completeness</th>
            <th>Time Decay</th>
            <th>Roof Type</th>
            <th>Lead Source</th>
          </tr>
        </thead>
        <tbody>
          {mockLeads.map((lead, index) => (
            <tr key={index}>
              <td>{lead.id}</td>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.phone}</td>
              <td>{lead.address}</td>
              <td>{lead.initialScore}</td>
              <td>{lead.engagement}</td>
              <td>{lead.followUpResponse}</td>
              <td>{lead.dataCompleteness}</td>
              <td>{lead.timeDecay}</td>
              <td>{lead.roofType}</td>
              <td>{lead.leadSource}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeadList;

  