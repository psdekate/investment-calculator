import logo from "../assets/money-tag.svg";

export function Header() {
  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />
      <h1>Investment Calculator</h1>
    </div>
  );
}
