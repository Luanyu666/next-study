import EventList from "../components/events/EventtList";
import { getFeaturedEvents } from "../dummy-data";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <header>
          <nav></nav>
        </header>
        <EventList items={featuredEvents} />
      </div>
    </>
  );
};

export default HomePage;
