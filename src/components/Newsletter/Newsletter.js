import { Button } from "../Button/Button";
import classes from "./Newsletter.module.css";

export function Newsletter() {
    return (
        <>
        <div className={classes['newsletter']}>
            <p>Receive the Latest News and Exclusive Offers by</p>
            <div className={classes['newsletter-buttons-container']}>
                <Button text="TEXT" />
                <Button text="EMAIL"/>
            </div>
        </div>
        </>
    )
}