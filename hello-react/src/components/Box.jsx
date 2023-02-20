import "../App.css";
import ironLogo from "../assets/ironhack-logo-xs.png";
import navBtn from "../assets/menu-top-xs.png";

function Box() {
  return (
    <div className="box">
      <div className="nav-img">
        <img src={ironLogo} alt="IronHack logo" />
        <img src={navBtn} alt="Button burger" />
      </div>
      <div className="box-content">
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library and become
          a super Ninja developer.
        </p>
        <button>Awesome!</button>
      </div>
    </div>
  );
}

export default Box;
