import { SocialMedia } from "../SocialMedia/SocialMedia";
import classes from "./Footer.module.css";
import bn from "../../assets/images/logos/bn.png";
import shakespeare from "../../assets/images/logos/shakespeare.png";
import atlantis from "../../assets/images/logos/atlantis.png";
import { Newsletter } from "../Newsletter/Newsletter";
import { Title } from "../Title/Title";

export function Footer() {
  return (
    <>
      <div className={classes["footer-container"]}>
        <div className={classes["footer-data-container"]}>
          <div className={classes["links-container"]}>
            <div className={classes["links"]}>
              <ul>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Directions</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className={classes["links"]}>
              <ul>
                <li>Promotions</li>
                <li>Partners</li>
                <li>Careers</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>
          <div className={classes["friends-container"]}>
            <img src={bn} alt="b&n-logo" className={classes["friend-logo"]} />
            <img
              src={shakespeare}
              alt="shakespeare-logo"
              className={classes["friend-logo"]}
            />
            <img
              src={atlantis}
              alt="atlantis-logo"
              className={classes["friend-logo"]}
            />
          </div>
        </div>
        <div className={classes["social-container"]}>
          <div className={classes["logo-container"]}>
            <Title />
          </div>
          <div className={classes["social-media-links-container"]}>
            <SocialMedia />
          </div>
          <div className={classes["newsletter-container"]}>
            <Newsletter />
          </div>
        </div>
      </div>
    </>
  );
}
