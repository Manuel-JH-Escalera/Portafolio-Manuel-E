import ThreeDModelViewer from "../../components/ThreeDModelViewer";
import styles from './FirstView.module.css';
import useLanguageStore from "../../contexts/language/languageStore";
import languages from "../../methods/languageDictionary";
import useLoaderStore from "../../contexts/loader/loaderStore";
import useDarkModeStore from "../../contexts/theme/darkModeStore";

function FirstView() {

  const { language } = useLanguageStore();
  const currentLanguage = languages[language] || languages.en;
  const { isLoading } = useLoaderStore();
  const { darkMode } = useDarkModeStore();

  const cvEsp = "64051f035fe27e2de0b7fade"
  const cvEng = "62c48c1684da03c492f38217"

  function downloadResume() {
    let resumeId
    if(language==="es"){
      resumeId = cvEsp
    } else {
      resumeId = cvEng
    }
    window.open(`https://flowcv.com/api/resumes/download?resumeId=${resumeId}&languageCode=en`, "_blank");
  }

  return (
    <section className={styles["first-view-container"]}>
      <div className={styles["first-view"]}>
        <div className={styles["canvas-container"]}>
          <ThreeDModelViewer modelUrl="/MEVoxelArt.glb" />
          {isLoading ? <div className="loader"></div> : null }
          <div className={styles["title-container"]}>
            <h3 className={styles["title-subtitle"]}>{currentLanguage.firstView.topTitle}</h3>
            <h1 className={styles["title-title"]}>
              Manuel <span className="accent-color">Escalera</span>
            </h1>
            <h3 className={styles["title-description"]}>{currentLanguage.firstView.bottomTitle}</h3>
            <div className={styles.titleBtnContainer}>
              <button
                type="button"
                onClick={downloadResume}  // Añade esta línea
                className={`${darkMode ? styles.btnResumeDarkMode : styles.btnResumeLightMode} my-3 ${styles.btn}`}
              >
                {currentLanguage.firstView.resume}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  className={darkMode ? styles.downloadIconDark : styles.downloadIconLight}
                >
                  <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstView;