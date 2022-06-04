import EventItem from "./EventItem";

const EventList = (props) => {
  const { items } = props;
  return (
    <div className="container max-w-3/4">
      {items.map((e) => (
        <EventItem key={e.id} {...e} className="" />
      ))}
    </div>
  );
}

export default EventList;