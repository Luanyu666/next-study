import { useRef } from "react";
import Button from "../ui/Button";

const EventSearch = (props) => {

  const yearRef = useRef()
  const monthRef = useRef()
  const month = [...new Array(12).keys()];

  const submit = (e) => {
    e.preventDefault();
    const { onSearch } = props;
    const selectedYear = yearRef.current.value;
    const selectedMonth = monthRef.current.value;
    onSearch(selectedYear, selectedMonth)
  }

  return (
    <>
      <form onSubmit={submit} className="w-4/5 h-14 m-2 flex justify-around font-bold items-center gap-2 bg-indigo-300">
        <div>
          <label htmlFor="year">Year</label>
          <select ref={yearRef} className="w-16 m-1" id="year">
            <option value={2021}>2021</option>
            <option value={2022}>2022</option>
          </select>
        </div>
        <div>
          <label htmlFor="month">Month</label>
          <select ref={monthRef} className="w-20 m-1" id="month">
            {
              month.map(item => {
                return <option key={item} value={item + 1}>{item + 1}</option>
              })
            }
          </select>
        </div>
        <Button>Find Event</Button>
      </form>
    </>
  );
}

export default EventSearch;