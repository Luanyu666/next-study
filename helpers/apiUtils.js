export async function getAllEvents() {
  const res = await fetch('https://next-study-1952f-default-rtdb.asia-southeast1.firebasedatabase.app/events.json')
  const data = await res.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const DUMMY_EVENTS = await getAllEvents();
  return DUMMY_EVENTS.filter(e => e.isFeatured);
}

export async function getEventById(id) {
  const DUMMY_EVENTS = await getAllEvents();
  return DUMMY_EVENTS.find(e => e.id === id)
}

export async function getFilteredEvents(data) {
  const DUMMY_EVENTS = await getAllEvents();
  const { year, month } = data;

  let filterEvents = DUMMY_EVENTS.filter(e => {
    const eventDate = new Date(e.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  })
  return filterEvents;
}