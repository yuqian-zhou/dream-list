import { useState } from "react";
import { useMessage } from "../context/MessageContext";
import { Icon } from "@ricons/utils";
import { ColorBackground20Regular, Pin16Regular } from "@ricons/fluent";
import { FontColorsOutlined } from "@ricons/antd";

export default function AddTool({ onAdd }) {
  const { showMessage } = useMessage();

  const [item, setItem] = useState({
    dream: "",
    done: false,
    pin: false,
    color: "black",
    bgColor: "white",
  });

  const changeColor = () => {
    const colors = ["black", "red", "green", "blue", "yellow"];
    const index = colors.indexOf(item.color);
    const nextIndex = (index + 1) % colors.length;
    setItem({
      ...item,
      color: colors[nextIndex],
    });
  };

  const changeBgColor = () => {
    const colors = [
      "white",
      "lightgray",
      "lightblue",
      "lightgreen",
      "lightyellow",
    ];
    const index = colors.indexOf(item.bgColor);
    const nextIndex = (index + 1) % colors.length;
    setItem({
      ...item,
      bgColor: colors[nextIndex],
    });
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setItem({
      ...item,
      dream: value,
    });
  };

  const handleAdd = () => {
    if (!item.dream) {
      showMessage({
        type: "error",
        message: "Please enter a dream",
      });
      return;
    }
    onAdd(item);
    setItem({
      dream: "",
      done: false,
      pin: false,
      color: "black",
      bgColor: "white",
    });
    showMessage({
      type: "success",
      message: "Dream added successfully",
    });
  };

  return (
    <div className="add-tool">
      <div className="tools-group">
        <button onClick={changeColor} disabled={item.dream === ""}>
          <Icon>
            <FontColorsOutlined />
          </Icon>
        </button>
        <button onClick={changeBgColor}>
          <Icon>
            <ColorBackground20Regular />
          </Icon>
        </button>
        <button
          style={{
            backgroundColor: item.pin ? "lightgreen" : "",
          }}
          onClick={() => setItem({ ...item, pin: !item.pin })}
        >
          <Icon>
            <Pin16Regular />
          </Icon>
        </button>
      </div>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter your dream"
          value={item.dream}
          style={{ color: item.color, backgroundColor: item.bgColor }}
          onChange={handleInputChange}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}
