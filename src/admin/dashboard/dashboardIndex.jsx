import styles from "./dashboardIndex.module.css";
import DashLeftUp from "./dashleftup/DashLeftUp";
import DashLeftDown from "./dashleftdown/DashLeftDown";
import DashRight from "./dashright/DashRight";

const DashboardIndex = () => {
    return (
        <div className={styles.dashcontainer}>

            <div className={styles.left}>   
                <DashLeftUp />
                <DashLeftDown />
            </div>

            <div className={styles.right}>
                <DashRight />
            </div>
        </div>
    );
};

export default DashboardIndex;
