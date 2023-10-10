import ThreeDModelViewer from "../../components/ThreeDModelViewer";
import styles from './FirstView.module.css';

function FirstView() {
  return (
    <div className={styles["first-view-container"]}>
        <div className={styles["first-view"]}>
            <div className="row h-100">
                <div className="col-6"><h1>test</h1></div>
                <div className="col-sm-12 col-xs-12 col-md-6 col-xl-6">
                    <ThreeDModelViewer modelUrl="/MEVoxelArt.glb" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default FirstView;
