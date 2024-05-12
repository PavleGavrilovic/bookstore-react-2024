import { SVG_PATHS } from "../../assets/constants";
import { Icon } from "../Icon/Icon";
import classes from "./SocialMedia.module.css";

export function SocialMedia() {
  return (
    <>
      <div className={classes["social-container"]}>
        <div className={classes["social-icon-container"]}>
          <Icon path={SVG_PATHS.facebook} />
        </div>
        <div className={classes["social-icon-container"]}>
          <Icon path={SVG_PATHS.twitter} />
        </div>
        <div className={classes["social-icon-container"]}>
          <Icon path={SVG_PATHS.instagram} />
        </div>
        <div className={classes["social-icon-container"]}>
          <Icon path={SVG_PATHS.youtube} />
        </div>
      </div>
    </>
  );
}
