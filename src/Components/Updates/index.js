import styles from './styles.module.css'
function Updates(){
    return (
        <div className={`${styles.concentWrapper} `}>
          <input
            className={styles.customCheckbox}
            type="checkbox"
            checked
            id="consent-msg"
          />
          <label htmlFor="consent-msg">
            You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp
            to guide you through your application.
          </label>
        </div>
      );
}
export default Updates