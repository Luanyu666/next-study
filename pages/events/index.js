import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventtList';
import EventSearch from '../../components/events/EventSearch';
import { useRouter } from 'next/router';

const AllEventsPage = () => {

  const router = useRouter()
  const events = getAllEvents();

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