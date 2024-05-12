import classes from "./Input.module.css";
import { INPUT_PLACEHOLDERS, SVG_PATHS } from "../../assets/constants";

export function Input(props) {
  return (
    <>
      <div className={classes["input-container"]}>
        <input
          className={classes["input"]}
          placeholder={INPUT_PLACEHOLDERS.search}
        />

        {props.showIcon && (
          <div className={classes["search-icon"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="23"
              height="23"
              viewBox="0 0 30 30"
            >
              <path d={SVG_PATHS.search}></path>
            </svg>
          </div>
        )}
      </div>
    </>
  );
}
