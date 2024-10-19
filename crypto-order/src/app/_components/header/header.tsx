import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-20 flex-row items-start justify-center">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link href="/" className="navbar-brand">
            Crypto Order
          </Link>
          <div className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/signin" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/register" className="nav-link">
                Register
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </header>
  );
}
