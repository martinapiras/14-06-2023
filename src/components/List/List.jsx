import "./index.css";
import ListItem from "../ListItem";

const List = ({ title, items }) => {
  return (
    <>
      <h1>{title}</h1>
      <ul className="list">
        {items.map((todo) => (
          <ListItem data={todo} key={todo.id}></ListItem>
        ))}
      </ul>
    </>
  );
};

export default List;
