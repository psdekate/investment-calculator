import logo2 from "../assets/money-tag-2.svg";

export function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo2} alt="" />
      </div>
      <h1>Investment Calculator</h1>
    </div>
  );
}
