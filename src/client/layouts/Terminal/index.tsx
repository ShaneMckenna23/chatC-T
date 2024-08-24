import { useRef } from "react";
import styles from "./Terminal.module.css";
import { Outlet } from 'react-router-dom';
import Video from "../../components/Video";

const TerminalLayout = () => {
  const screenRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.terminal}>
      <div className={styles.screen} ref={screenRef} tabIndex={0}>
        <div className={styles.content}>
            <Outlet />
        </div>
        <div className={styles.noise}></div>
        <div className={styles.scanline}></div>
      </div>
    </div>
  );
};

export default TerminalLayout;
