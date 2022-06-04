import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";

const EventDetailPage = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No found event</p>
  }

  return (
    <div className="h-full w-full flex flex-col items-center">
      <section>
        <h1 className="text-5xl my-4 font-bold text-blue-700">{event.title}</h1>
      </section>
      <section className="flex w-1/2 h-60 my-6 bg-indigo-500 items-center justify-evenly">
        <div className="border-2 rounded-full">
          <img className="h-40 w-40 rounded-full" src={`/${event.image}`} alt={event.title} />
        </div>
        <ul>
          <time>{event.date}</time>
          <address>{event.location}</address>
        </ul>
      </section>
      <section>
        <div>{event.description}</div>
      </section>
    </div>
  );
}

export default EventDetailPage;