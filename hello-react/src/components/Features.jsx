import "../App.css";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

function Features() {
  return (
    <div className="features">
      <div className="card">
        <img src={icon1} alt="Tools icon" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div className="card">
        <img src={icon2} alt="Laptop icon" />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className="card">
        <img src={icon3} alt="Imac icon" />
        <h3>Single-way</h3>
        <p>A set of immutable values are passed to the components.</p>
      </div>
      <div className="card">
        <img src={icon4} alt="Laptop JSX icon" />
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  );
}

export default Features;
