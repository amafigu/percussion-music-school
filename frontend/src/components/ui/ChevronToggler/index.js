import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ChevronToggler = ({ show, setShow }) => {
  return (
    <>
      {!show && (
        <FontAwesomeIcon
          icon={faChevronDown}
          onClick={
            setShow ? () => setShow(true) : () => console.log("no setter")
          }
        />
      )}
      {show && (
        <FontAwesomeIcon
          icon={faChevronUp}
          onClick={
            setShow ? () => setShow(false) : () => console.log("no setter")
          }
        />
      )}
    </>
  );
};
