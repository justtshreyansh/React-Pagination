import { useState, useEffect } from "react";
import DisplayData from "./DisplayData";
import SortButton from "./SortButton";
import Search from "./Search";
import Pagination from "./Pagination";

function App() {
  const [originalData, setOriginalData] = useState([]); // full fetched data
  const [data, setData] = useState([]); // filtered/sorted data to display
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState(true);
  const [name, setName] = useState(true);
  const [age, setAge] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const elementPerPage = 10;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/users");
      const res = await response.json();
      setOriginalData(res.users);
      setData(res.users);
      setLoading(false);
    }

    fetchData();
  }, []);

  // Calculate current page data slice
  const indexOfLastElement = currentPage * elementPerPage;
  const indexOfFirstElement = indexOfLastElement - elementPerPage;
  const currentData = data.slice(indexOfFirstElement, indexOfLastElement);

  // Reset page to 1 whenever data changes (filter/sort)
  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  return (
    <>
      {loading ? (
        <>loading</>
      ) : (
        <>
          <Search originalData={originalData} setData={setData} />
          <SortButton
            email={email}
            name={name}
            age={age}
            setEmail={setEmail}
            setName={setName}
            setAge={setAge}
            data={data}
            setData={setData}
          />
          <DisplayData data={currentData} />
          <Pagination
            originalData={data} // length after filter/sort
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            elementPerPage={elementPerPage}
          />
        </>
      )}
    </>
  );
}

export default App;
