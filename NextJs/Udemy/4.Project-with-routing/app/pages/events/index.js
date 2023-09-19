import EventList from "../../components/Events/EventsList";
import { getAllEvents } from "../../dummy-data";
import EventsSearch from "../../components/Events/events-search";
import { useRouter } from "next/router";


const EventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`

    router.push(fullPath)
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
};

export default EventsPage;
