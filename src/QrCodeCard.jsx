import "./qrCodeCard.css";
import qrLogo from "./assets/images/image-qr-code.png";

function QrCodeCard() {
  return (
    <div className="card">
      <img className="qr-logo" src={qrLogo} alt="qr code" />
      <h1 className="qr-title">
        Improve your front-end skills by building projects
      </h1>
      <p className="qr-subtitle">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default QrCodeCard;
