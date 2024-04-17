import styles from "./styles.module.css";

function Input (){
  return (
    <div
      className={styles.inputWrapper}
    >
      <input type="text" placeholder="Enter Phone Number" />
      <div className={styles.spanText}></div>
      <button>Apply Now</button>
    </div>
  );
};

export default Input;
