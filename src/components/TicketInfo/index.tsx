import "./style.css";

function TicketInfo() {
  console.log("Renderizando Tickets");
  return (
    <div className="ticketInfo">
      <div className="ticketCard">
        <h1>Ticket 01</h1>
        <p>Testing data</p>
      </div>
      <p className="nextTicket">Next ticket: 02</p>
    </div>
  );
}

export default TicketInfo;
