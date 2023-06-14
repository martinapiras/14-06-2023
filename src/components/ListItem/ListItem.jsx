import "./index.css";

const ListItem = ({ data }) => {
  // const completed = data.completed ? "listItem completed" : "listItem";
  const isCompleted = data.completed;
  const isUserIdEven = !!(data.userId % 2 === 0);

  const onHandleClick = (e) => {
    e.target.classList.toggle("completed");
  };

  return (
    <li
      className={`listItem ${isUserIdEven ? "evenUser" : "oddUser"} ${
        isCompleted ? "completed" : ""
      }`}
      onClick={onHandleClick}
    >
      {`${isCompleted ? "✅" : "❌"} ${data.todo}`}
    </li>
  );
};

export default ListItem;
