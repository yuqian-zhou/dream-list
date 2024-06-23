import { Icon } from "@ricons/utils";
import { TaskComplete, Delete } from "@ricons/carbon";
import { Pin16Regular } from "@ricons/fluent";

function ListItem({ item, onClick }) {
  let doneSyles = item.done
    ? {
        textDecoration: "line-through",
        backgroundColor: "#61ac85",
        color: "white",
        opacity: 0.6,
      }
    : null;
  return (
    <li
      style={{
        backgroundColor: item.bgColor,
        color: item.color,
        ...doneSyles,
      }}
    >
      {item.dream}
      <div className="tools">
        <button
          style={{
            backgroundColor: item.pin ? "rgb(255, 153, 0)" : "",
          }}
          onClick={() => onClick(item, "unpin")}
        >
          <Icon>
            <Pin16Regular />
          </Icon>
        </button>
        <button
          onClick={() => onClick(item, "finish")}
          style={{
            display: item.done ? "none" : "block",
            backgroundColor: "#68b88e",
          }}
        >
          <Icon>
            <TaskComplete />
          </Icon>
        </button>
        <button
          style={{
            backgroundColor: "#ed2f6a",
          }}
          onClick={() => onClick(item, "delete")}
        >
          <Icon>
            <Delete />
          </Icon>
        </button>
      </div>
    </li>
  );
}

export default function List({ items, onItemClick }) {
  const handleClick = (item, type) => {
    switch (type) {
      case "unpin":
        onItemClick(item, "unpin");
        break;
      case "finish":
        onItemClick(item, "finish");
        break;
      case "delete":
        onItemClick(item, "delete");
        break;
      default:
        break;
    }
  };

  items.sort((a, b) => {
    if (a.pin && !b.pin) return -1;
    if (!a.pin && b.pin) return 1;
    if (a.done && !b.done) return 1;
    if (!a.done && b.done) return -1;
    return a.id - b.id;
  });

  let Content =
    items.length === 0 ? (
      <li>
        <p>No dreams yet</p>
      </li>
    ) : (
      items.map((item) => (
        <ListItem key={item.id} item={item} onClick={handleClick} />
      ))
    );

  return <ul>{Content}</ul>;
}
