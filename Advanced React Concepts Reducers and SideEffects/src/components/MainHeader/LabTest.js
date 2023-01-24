import { useEffect, useState } from "react";
import classes from "./LabTest.module.css";

const LabTest = () => {
  const initialList = [];

  const [name, setName] = useState("");

  const [list, setList] = useState(initialList);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    const newList = list.concat({ name });
    setList(newList);
  }
  useEffect(
    () => {
      setList(initialList);
    },
    handleAdd,
    handleChange
  );

  return (
    <div className={classes.outer}>
      <div>
        <input type="text" value={name} onChange={handleChange} />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </div>

      <ul className={classes.ul}>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default LabTest;
