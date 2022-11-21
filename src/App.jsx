import "./App.css";
import qrLogo from "./assets/images/image-qr-code.png";

function App() {
  return (
    <div className="card">
      <div>
        <img src={qrLogo} alt="qr code" />
      </div>
      <h1>Improve your frontend skills by building projects</h1>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default App;
