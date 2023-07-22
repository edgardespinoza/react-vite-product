import { MouseEvent } from "react";

function ListGroup() {
  const items = ["New York", "San Francisco", "Tokio", "London", "Paris"];

  const handleEvent = (event:MouseEvent) => console.log(event);
  
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item,index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleEvent}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
