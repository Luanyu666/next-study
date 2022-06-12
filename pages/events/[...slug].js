import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import EventList from "../../components/events/EventtList";
import Button from "../../components/ui/Button";
// import { getFilteredEvents } from "../../helpers/apiUtils";

// export async function getServerSideProps(context) {
//   const { params } = context;

//   const filterData = params.slug;

//   const year = +filterData[0];
//   const month = +filterData[1];

//   if (isNaN(year) || isNaN(month) || year > 2030 || month < 1 || month > 12) {
//     return {
//       props: {
//         hasError: true,
//       },
//       notFound: true,
//     };
//   }

//   const filteredEvents = await getFilteredEvents({ year, month });

//   return {
//     props: {
//       filteredEvents,
//       year,
//       month,
//     },
//   };
// }

const FilterEventsPage = (props) => {
  const router = useRouter();
  const filterData = router.query.slug;
  const [events, setEvents] = useState([]);

  const { data, error } = useSWR(
    "https://next-study-1952f-default-rtdb.asia-southeast1.firebasedatabase.app/events.json"
  );

  useEffect(() => {
    if (data) {
      const events = [];

      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }
      setEvents(events);
    }
  }, [data]);

  if (!events) {
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

  console.log(filterData, events, data, router)
  const year = +filterData[0];
  const month = +filterData[1];

  if (isNaN(year) || isNaN(month) || error || year > 2030 || month < 1 || month > 12) {
    return (
      <div className="w-full flex flex-col items-center">
        <p className="select-none rounded-xl font-bold bg-blue-300 w-3/5 h-20 m-2 flex justify-center items-center">
          invalid filter, please adjust values
        </p>
        <Button link="/events">show all events</Button>
      </div>
    );
  }
  const filterEvents = events.filter((e) => {
    const eventDate = new Date(e.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  const date = new Date(year, month - 1);
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (!filterEvents || filterEvents.length === 0) {
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
      <EventList items={filterEvents} />
    </div>
  );
};

export default FilterEventsPage;
