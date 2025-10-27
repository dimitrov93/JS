import Link from "next/link";
import React from "react";

const ClientsPage = () => {
  const clients = [
    { id: "ceko", name: "ceko" },
    { id: "joe", name: "joe" },
  ];
  return (
    <div>
      <h1>ClientsPage</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: `/clients/[id]`,
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
