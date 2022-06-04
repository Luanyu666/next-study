import Link from "next/link";

const Button = ({ link, children, search }) => {
  return !!link ?  (
    <Link
      href={link}
    >
      <a className="no-underline text-center cursor-pointer bg-blue-500 text-white border-solid rounded-xl px-2 py-2 shadow-inner hover:bg-blue-700">{children}</a>
    </Link>
  ) : (
    <button onClick={search} className="no-underline text-center cursor-pointer bg-blue-500 text-white border-solid rounded-xl px-2 py-2 shadow-inner hover:bg-blue-700">{children}</button>
  );
};

export default Button;