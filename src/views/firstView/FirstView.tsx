import ThreeDModelViewer from "../../components/ThreeDModelViewer";
import styles from './FirstView.module.css';
import useLanguageStore from "../../contexts/language/languageStore";
import languages from "../../methods/languageDictionary";
import useLoaderStore from "../../contexts/loader/loaderStore";

function FirstView() {
  const { language } = useLanguageStore();
  const currentLanguage = languages[language] || languages.en;
  const { isLoading } = useLoaderStore();

  return (
    <section className={styles["first-view-container"]}>
      <div className={styles["first-view"]}>
        <div className={styles["canvas-container"]}>
          <ThreeDModelViewer modelUrl="/MEVoxelArt-v2.glb" />
          {isLoading ? <div className="loader"></div> : null}
          <div className={styles["title-container"]}>
            <h1 className={styles["title-title"]}>
              Manuel <span className="accent-color">Escalera</span>
            </h1>
            <h3 className={styles["title-description"]}>{currentLanguage.firstView.bottomTitle}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstView;
