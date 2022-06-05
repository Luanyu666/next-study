import { getEventById, getFeaturedEvents } from "../../helpers/apiUtils";

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map(e => ({
    params: {
      eventId: e.id,
    }
  }));
  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      event
    },
    revalidate: 30
  }
}

const EventDetailPage = ({ event }) => {

  if (!event) {
    return (
      <p className="select-none rounded-xl font-bold bg-blue-300 w-3/5 h-20 m-2 flex justify-center items-center">
        loading...
      </p>
    );
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