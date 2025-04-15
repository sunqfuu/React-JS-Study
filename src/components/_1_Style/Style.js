import logo from "../../logo.svg";

// External CSS
import "./Style.css";

// Functional Component

const allParagrafCSS = {
  backgroundColor: "#2f2f2",
  color: "blue",
  padding: "1rem",
  borderRadius: "1rem",
  fontSize: "1.5rem",
  fontWeight: "bold",
  textAlign: "center",
  textTransform: "uppercase",
  textShadow: "0 0 10px #fff",
  boxShadow: "0 0 10px #fff",
  border: "1px solid #fff",
  margin: "1rem",
  width: "50%",
  cursor: "Pointer",
};

function Style() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-center text-warning">Hello World!</p>
        <hr />
        <p style={{ color: "red", backgroundColor: "yellow" }}>Inline CSS</p>
        <br />
        <p style={allParagrafCSS}>
          Dear Programmer: When i wrote this code, only god and I knew how it
          worked. Now, only god knows it! Therefore, if you are trying to
          optimize this routine and it fails (most surely)
        </p>
      </header>
    </div>
  );
}

export default Style;
