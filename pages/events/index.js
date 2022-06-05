import { getAllEvents } from '../../helpers/apiUtils';
import EventList from '../../components/events/EventtList';
import EventSearch from '../../components/events/EventSearch';
import { useRouter } from 'next/router';

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events,
    },
    revalidate: 60,
  }
}

const AllEventsPage = ({ events }) => {
  const router = useRouter();

  const findEventsHandle = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <EventSearch onSearch={findEventsHandle} />
      <EventList items={events} />
    </div>
  );
}

export default AllEventsPage;