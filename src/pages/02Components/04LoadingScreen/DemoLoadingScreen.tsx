import { useEffect, useState } from "react";
import Buttonz from "../../../components/Buttonz";
import LoadingScreen from "../../../components/LoadingScreen";

const DemoLoadingScreen = () => {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    if (showLoading) {
      const timeout = setTimeout(() => {
        setShowLoading(false);
      }, 3000); // 3 seconds timeout
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [showLoading]);

  return (
    <>
      <Buttonz onClick={() => setShowLoading(true)}>Show Demo (3s)</Buttonz>
      {showLoading && <LoadingScreen />}
    </>
  );
};

export default DemoLoadingScreen;
