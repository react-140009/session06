import { useRef, useContext } from "react";
import { ColorContext } from "../App";

export const ColorSelector = () => {
  // const [color, setColor] = useContext(ColorContext);
  const setColor = useContext(ColorContext)[1];
  const selectRef = useRef<any>();
  const onChnage = (val: string) => {
    (setColor as any)(val);
    selectRef.current.style.color = val;
  };
  return (
    <select ref={selectRef} onChange={(e) => onChnage(e.target.value)}>
      <option value="red">red</option>
      <option value="green">green</option>
      <option value="blue">blue</option>
    </select>
  );
};
