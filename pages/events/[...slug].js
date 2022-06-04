import { useRouter } from "next/router";
import EventList from "../../components/events/EventtList";
import Button from "../../components/ui/Button";
import { getFilteredEvents } from "../../dummy-data";

const FilterEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return (
      <p className="">
        <svg
          className="animate-spin h-5 w-5 mr-3 ..."
          viewBox="0 0 24 24"
        ></svg>
        loading....
      </p>
    );
  }

  const year = +filterData[0];
  const month = +filterData[1];

  if (isNaN(year) || isNaN(month) || year > 2030 || month < 1 || month > 12) {
    return <p>invalid filter</p>;
  }

  const filteredEvents = getFilteredEvents({ year, month });

  const date = new Date(year, month - 1);
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div className="w-full flex flex-col items-center">
        <p className="select-none rounded-xl font-bold bg-blue-300 w-3/5 h-20 m-2 flex justify-center items-center">no events found for the chosen filter</p>
        <Button link="/events">show all events</Button>
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <section className="flex flex-col items-center">
        <h1 className="my-2 font-bold">Events in {humanReadableDate}</h1>
        <Button link="/events">show all events</Button>
      </section>
      <EventList items={filteredEvents} />
    </div>
  );
};

export default FilterEventsPage;
