import ThreeDModelViewer from "../../components/ThreeDModelViewer";
import styles from './FirstView.module.css';

function FirstView() {
  return (
    <section className={styles["first-view-container"]}>
      <div className={styles["first-view"]}>
        <div className={styles["canvas-container"]}>
          <ThreeDModelViewer modelUrl="/MEVoxelArt.glb" />
          <div className={styles["title-container"]}>
            <h3 className={styles["title-subtitle"]}>¡Hola, Bienvenido a mi portafolio!</h3>
            <h1 className={styles["title-title"]}>
              Manuel Escalera
            </h1>
            <h3 className={styles["title-description"]}>Desarrollador y Diseñador Web</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstView;