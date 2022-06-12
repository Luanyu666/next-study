import { getEventById, getFeaturedEvents } from "../../helpers/apiUtils";
import Head from "next/head";
import Image from "next/image";

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((e) => ({
    params: {
      eventId: e.id,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      event,
    },
    revalidate: 30,
  };
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
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <div className="h-full w-full flex flex-col items-center">
        <section className="bg-green-400 w-full h-44 flex justify-center items-center">
          <h1 className="text-5xl my-4 font-bold text-blue-700">
            {event.title}
          </h1>
        </section>
        <section className="flex w-1/2 h-60 -mt-8 mb-8 bg-indigo-500 items-center justify-evenly">
          <div className="border-2 rounded-full items-center flex">
            <Image
              src={`/${event.image}`}
              alt={event.title}
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
          <ul className="text-gray-200 font-bold">
            <time>{event.date}</time>
            <address>{event.location}</address>
          </ul>
        </section>
        <section>
          <div>{event.description}</div>
        </section>
      </div>
    </>
  );
};

export default EventDetailPage;
