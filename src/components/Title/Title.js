import classes from "./Title.module.css";

export function Title(props) {
  return (
    <h1 className={classes["title"]} style={{ color: props.color }}>
      Monte Cristo Books
    </h1>
  );
}
