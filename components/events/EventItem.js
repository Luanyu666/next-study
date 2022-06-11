import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

const EventItem = (props) => {
  const {title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const formatteAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;
  return (
    <div className="shadow rounded-2xl bg-white flex my-5 gap-2 w-full">
      <img src={'/' + image} alt={title} className="w-full rounded-l-2xl object-cover h-40" />
      <div className="flex flex-col justify-around w-full">
        <div className="flex-1">
          <h2 className="text-3xl font-bold py-2">{title}</h2>
          <div className="flex-grow">
            <time>{humanReadableDate}</time>
          </div>
          <div className="flex-grow">
            <address>{formatteAddress}</address>
          </div>
        </div>
        <div className="flex flex-row-reverse w-full p-2">
          {/* <Link href={exploreLink} className="pr-20">Explore Event</Link> */}
          <Button link={exploreLink}>Explore Event</Button>
        </div>
      </div>
    </div>
  );
}

export default EventItem;