import Link from "next/link";

const MainHeader = () => {
  return (
    <header className="flex text-2xl text-green-600 justify-between bg-gray-700 h-10 w-full items-center">
      <div className="pl-28">
        <Link href="/">Next events</Link>
      </div>
      <nav className="pr-28">
        <ul>
          <li>
            <Link href="/events">all Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;