import { useTour } from "@reactour/tour";
import { useEffect } from "react";
function UseTourOpen() {
  const { setIsOpen } = useTour();
  const tourTaken = JSON.parse(window.localStorage.getItem("appTour"));

  useEffect(() => {
    if (!tourTaken) {
      window.localStorage.setItem("appTour", true);
      setIsOpen(true);
    } else if (tourTaken === false) {
      setIsOpen(false);
    } else {
      setIsOpen(false);
    }
  }, []);
  return <></>;
}

export default UseTourOpen;
