import classes from "./Header.module.css";
import banner from "../../assets/images/header.jpg";
import { Input } from "../Input/Input";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import { Title } from "../Title/Title";

export function Header() {
  return (
    <>
      <div className={classes["header-container"]}>
        <div className={classes["header-top-container"]}>
          <div className={classes["header-title-container"]}>
            <Title />
            <SocialMedia />
          </div>

          <div className={classes["search-container"]}>
            <Input showIcon={true} />
          </div>
        </div>

        <div className={classes["banner-container"]}>
          <img src={banner} alt="banner.jpg" />
        </div>
      </div>
    </>
  );
}
