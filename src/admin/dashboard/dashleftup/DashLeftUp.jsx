import styles from "./DashLeftUp.module.css";
import DashLeftOne from "./dashleftone/DashLeftOne";
import DashLeftTwo from "./dashlefttwo/DashLeftTwo";
const DashLeftUp = () => {
    return (
        <div className={styles.leftcontainer}>
            <DashLeftOne />
            <DashLeftTwo />
        </div>
    );
};

export default DashLeftUp;
