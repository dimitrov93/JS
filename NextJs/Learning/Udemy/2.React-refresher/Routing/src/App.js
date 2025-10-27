import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetUps from "./pages/AllMeetUps";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <Layout>
    <Routes>
        <Route path="/" element={<AllMeetUps />} />
        <Route path="/new-meetup" element={<NewMeetup />} />
        <Route path="/favorites" element={<Favorites />} />
    </Routes>
    </Layout>
  );
}

export default App;
