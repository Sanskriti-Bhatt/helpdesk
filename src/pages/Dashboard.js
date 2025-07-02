import React from "react";

function Dashboard() {
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
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-blue-500 text-white rounded p-6 shadow text-center">
            <div>Total Tickets</div><div className="text-2xl font-bold">12</div>
          </div>
          <div className="bg-green-500 text-white rounded p-6 shadow text-center">
            <div>Total Solved</div><div className="text-2xl font-bold">8</div>
          </div>
          <div className="bg-red-500 text-white rounded p-6 shadow text-center">
            <div>Awaiting Approval</div><div className="text-2xl font-bold">2</div>
          </div>
          <div className="bg-yellow-400 text-white rounded p-6 shadow text-center">
            <div>In Progress</div><div className="text-2xl font-bold">2</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
