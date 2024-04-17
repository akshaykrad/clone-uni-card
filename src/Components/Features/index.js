// import Image from "next/image";
import styles from "./styles.module.css";

const Features = () => {
  return (
    <div
      className={
        styles.featuresSection
      }
    >
      <div className={`${styles.featuresSection__wrapper}`}>
        <div className={`${styles.textImageContainer}`}>
          <div className={`${styles.textContainer}`}>
            <p>
              Earn 1% assured cashback <span>on your spends. Get</span> 5X
            </p>
            <p>
              more value than cashback
              <span> at the Uni Store. Enjoy</span>
            </p>
            <p>
              <span>round the clock </span>Whatsapp support.{" "}
              <span>And it&apos;s</span>
            </p>
            <p>
              lifetime free<span>; no joining fee, no annual charges.</span>
            </p>
          </div>
          <div className={styles.imageContainer}>
            <div
              className={`${"flex flex__justifyContentCenter flex__alignItemsCenter"}`}
            >
              <img src='https://www.uni.cards/images/down_arrow.svg' alt="DownArrow" />
            </div>
          </div>
        </div>
        <div className={styles.featureListContainer}>
          <div
            className={
              styles.featureListContainer_feature
            }
          >
            <div className={`${styles.featureListContainer__feature__text}`}>
              <div
                className={`${styles.featureListContainer__feature__text__big}`}
              >
                <span
                  className={`${styles.featureListContainer__feature__text__big__boldspan}`}
                >
                  1% assured cashback on your spends.
                </span>
                <span
                  className={`${styles.featureListContainer__feature__text__big__lightspan}`}
                >
                  The more you spend, the more you earn.
                </span>
              </div>
              <div
                className={`${styles.featureListContainer__feature__text__small}`}
              >
                Not applicable on fuel purchase, rent & wallet transfers, ATM
                withdrawals & international transactions.
              </div>
            </div>
            <div className={`${styles.featureListContainer__feature__image}`}>
              <img src="https://www.uni.cards/images/one_percent_cashback.png" alt="1% Cahback" />
            </div>
          </div>
          <div
            className={`${styles.featureListContainer__feature} ${styles.two}`}
          >
            <div className={`${styles.featureListContainer__feature__text}`}>
              <div
                className={`${styles.featureListContainer__feature__text__big}`}
              >
                <span
                  className={`${styles.featureListContainer__feature__text__big__boldspan}`}
                >
                  5x more value than your cashback,{" "}
                </span>
                <span
                  className={`${styles.featureListContainer__feature__text__big__lightspan}`}
                >
                  only at the Uni Store.
                </span>
              </div>
            </div>
            <div className={`${styles.featureListContainer__feature__image}`}>
              <img src="https://www.uni.cards/images/five_x_rewards.png" alt="1% Cahback" />
            </div>
          </div>
          <div
            className={`${
              styles.featureListContainer__feature
            } ${styles.three}`}
          >
            <div className={`${styles.featureListContainer__feature__text}`}>
              <div
                className={`${styles.featureListContainer__feature__text__big}`}
              >
                <span
                  className={`${styles.featureListContainer__feature__text__big__boldspan}`}
                >
                  Zero Forex Markup.{" "}
                </span>
                <span
                  className={`${styles.featureListContainer__feature__text__big__lightspan}`}
                >
                  The more you spend, the more you earn.
                </span>
              </div>
            </div>
            <div className={`${styles.featureListContainer__feature__image}`}>
              <img src='https://www.uni.cards/images/forex_globe.png' alt="1% Cahback" />
            </div>
          </div>
        </div>

        <div className={`${styles.aboutFee}`}>
          Lifetime <span>free.</span> No joining fee. <br />
          No annual charges.
        </div>
      </div>
    </div>
  );
};

export default Features;
