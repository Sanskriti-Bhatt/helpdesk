import React from "react";

function MyTickets() {
  const tickets = [
    { no: 1234, subject: "Login issue", status: "In Progress", date: "13/08/21", support: "Tech Support", rate: 4 },
    { no: 1235, subject: "New issue", status: "On Hold", date: "14/08/21", support: "Operator", rate: 3 },
    { no: 1236, subject: "Network", status: "Closed", date: "13/08/21", support: "Tech", rate: 5 }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-teal-400 text-white p-5">
        <h1 className="text-2xl font-bold mb-6">Helpdesk</h1>
        <nav className="space-y-3">
          <a href="/dashboard">📊 Dashboard</a><br/>
          <a href="/new-ticket">🎫 New Ticket</a><br/>
          <a href="/my-tickets">📁 My Tickets</a>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <h2 className="text-xl font-bold mb-4">List of Tickets</h2>
        <input className="mb-4 p-2 border w-full" placeholder="Find ticket" />
        <table className="w-full bg-white border shadow">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Ticket No</th>
              <th className="p-2 border">Subject</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Support By</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Rate</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map(ticket => (
              <tr key={ticket.no}>
                <td className="p-2 border text-blue-600">{ticket.no}</td>
                <td className="p-2 border">{ticket.subject}</td>
                <td className="p-2 border">{ticket.status}</td>
                <td className="p-2 border">{ticket.support}</td>
                <td className="p-2 border">{ticket.date}</td>
                <td className="p-2 border">{'★'.repeat(ticket.rate)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default MyTickets;
