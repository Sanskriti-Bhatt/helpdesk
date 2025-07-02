import React from "react";

function NewTicket() {
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
        <h2 className="text-xl font-bold mb-4">Create New Ticket</h2>
        <form className="grid grid-cols-2 gap-4">
          <input className="p-2 border" placeholder="Ticket No" />
          <input className="p-2 border" placeholder="Date" />
          <input className="p-2 border" placeholder="Name" />
          <input className="p-2 border" placeholder="Department" />
          <input className="p-2 border" placeholder="Subject" />
          <input className="p-2 border" placeholder="Category" />
          <input className="p-2 border" placeholder="Type" />
          <input className="p-2 border" placeholder="Priority" />
          <textarea className="col-span-2 p-2 border" placeholder="Description"></textarea>
          <div className="col-span-2 flex items-center space-x-2">
            <input type="checkbox" />
            <span>I'm not a robot</span>
          </div>
          <button className="col-span-2 bg-teal-500 text-white py-2 rounded">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default NewTicket;
