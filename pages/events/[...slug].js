import { useRouter } from "next/router";
import EventList from "../../components/events/EventtList";
import Button from "../../components/ui/Button";
import { getFilteredEvents } from "../../helpers/apiUtils";

export async function getServerSideProps(context) {
  const { params } = context;

  const filterData = params.slug;

  const year = +filterData[0];
  const month = +filterData[1];

  if (isNaN(year) || isNaN(month) || year > 2030 || month < 1 || month > 12) {
    return {
      props: {
        hasError: true,
      },
      notFound: true
    };
  }

  const filteredEvents = await getFilteredEvents({ year, month });

  return {
    props: {
      filteredEvents,
      year,
      month,
    },
  };
}

const FilterEventsPage = ({
  hasError = false,
  filteredEvents,
  year,
  month,
}) => {

  if (hasError) {
    return <p>invalid filter</p>;
  }

  const date = new Date(year, month - 1);
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div className="w-full flex flex-col items-center">
        <p className="select-none rounded-xl font-bold bg-blue-300 w-3/5 h-20 m-2 flex justify-center items-center">
          no events found for the chosen filter
        </p>
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
