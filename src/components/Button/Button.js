import classes from "./Button.module.css";

export function Button(props) {
  return (
    <>
      <button className={classes["button"]}>{props.text}</button>
    </>
  );
}
