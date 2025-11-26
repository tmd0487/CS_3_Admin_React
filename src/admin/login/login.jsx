import styles from "./login.module.css";
import useLogin from "./useLogin";

const Login = () => {
    const {
        data, authAlert, handleChange, handleComplete, handleLoginKeyUp
    } = useLogin();

    return (
        <div
            className={styles.container}
            style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "#FFF4D6",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div className={styles.loginbox}>
                <div className={styles.logininbox}>
                    <div className={styles.logintop}>
                        <h1 className={styles.toptitle}>Login</h1>
                    </div>
                    <div className={styles.loginmiddle}>
                        <div className={`${styles.middleone} ${!authAlert ? "" : styles.alert}`}>
                            <label htmlFor="id" >ID</label>
                            <input type="text" id="id" name="id" placeholder="id"
                                value={data.id} onChange={handleChange} />
                        </div>
                        <div className={`${styles.middletwo} ${!authAlert ? "" : styles.alert}`}>
                            <label htmlFor="pw">PW</label>
                            <input type="password" id="pw" name="pw" placeholder="pw"
                                value={data.pw} onChange={handleChange} onKeyUp={handleLoginKeyUp} />

                        </div>
                    </div>

                    <div className={styles.loginbottom}>
                        <button className={styles.logbut}
                            onClick={handleComplete}>
                            Login</button>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;