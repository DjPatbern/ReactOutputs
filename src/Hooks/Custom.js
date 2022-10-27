import { useToggle } from "../components/useToggle";

function Custom() {
const [isVisible, toggle] = useToggle(false)
const [secondVisible, secondToggle] = useToggle(true)


  return (
    <>
      <button
        onClick={toggle}
      >
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <div>Toggled</div>}

      <div>reusable custom hook toggle</div>

      <button
        onClick={secondToggle}
      >
        {secondVisible ? "Hide" : "Show"}
      </button>
      {secondVisible && <div>Toggled</div>}
    </>
  );
}

export default Custom;
