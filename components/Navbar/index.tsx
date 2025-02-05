import Link from "next/link";
import style from "./style.module.scss";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <div className="flex flex-wrap items-center">
          <div className={`${style.logoContainer}`}>
            <a>sahil-verma</a>
          </div>
          <ul className={`flex ${style.navLinks}`}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Projects</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={style.rightContainer}>
          <Link href="/">_contact-me</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
