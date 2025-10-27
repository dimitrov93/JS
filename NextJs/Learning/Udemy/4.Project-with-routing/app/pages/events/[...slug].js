import { useRouter } from "next/router";
import React from "react";
import EventsList from "../../components/Events/EventsList";
import ResultsTitle from "../../components/Events/results-title";
import Button from "../../components/ui/button";
import { getFilteredEvents } from "../../dummy-data";

const EventsSlug = () => {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2039 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
      <p>Invalid filter</p>;
      <div className="center">
            <Button link="/events">Show all events</Button>
          </div>
      </>
    )
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <p>No events found</p>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventsList items={filteredEvents} />
    </>
  );
};

export default EventsSlug;
