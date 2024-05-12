import classes from './Icon.module.css';

export function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="30px"
      height="30px"
      viewBox="0 0 50 50"
      className={classes['icon']}
    >
      <path d={props.path}></path>
    </svg>
  );
}
