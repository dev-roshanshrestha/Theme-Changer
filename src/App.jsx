import Theme from "./components/Theme";
import ContextManager from "./context/Manager";

function App() {
  return (
    <>
      <ContextManager>
        <Theme />
      </ContextManager>
    </>
  );
}

export default App;
