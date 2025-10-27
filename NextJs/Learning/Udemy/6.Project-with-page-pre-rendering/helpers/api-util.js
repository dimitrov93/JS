export async function getAllEvents() {
  const events = [];

  const response = await fetch(
    "https://nextjs-1445a-default-rtdb.europe-west1.firebasedatabase.app/events.json"
  );
  const data = await response.json();

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
  ß;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((e) => e.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
