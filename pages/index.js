import Head from "next/head";
import EventList from "../components/events/EventtList";
import { getFeaturedEvents } from "../helpers/apiUtils";

const HomePage = (props) => {
  // const featuredEvents = getFeaturedEvents();
  const featuredEvents = props.events;
  return (
    <>
      <Head>
          <title>nextjs HomePage</title>
          <meta name="description" content="test test sets" />
        </Head>
      <div className="w-full flex flex-col items-center justify-center">
        <EventList items={featuredEvents} />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800
  };
}

export default HomePage;
