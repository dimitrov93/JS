import { useEffect, useState } from "react";

import * as userService from "./components/services/userService";
import { Footer } from "./components/common/Footer";
import { Header } from "./components/common/Header";
import "./App.css";
import { Search } from "./components/search/Search";
import { UserList } from "./components/user-list/UserList";
import { UserProvider } from "./components/context/userContext";

function App() {
  return (
    <div className="App">
      <Header />
      <UserProvider>
        <main className="main">
          <section className="card users-container">
            <Search />
            <UserList />
          </section>
        </main>
      </UserProvider>
      <Footer />
    </div>
  );
}

export default App;
