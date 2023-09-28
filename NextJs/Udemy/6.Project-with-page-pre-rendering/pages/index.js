import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";
import { getAllEvents } from "../helpers/api-util";

function HomePage(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export default HomePage;

export async function getStaticProps() {
  const allEvents =  await getAllEvents()
  
  return {
    props: {
      events: allEvents,
    },
    revalidate: 1800,
  };
}
