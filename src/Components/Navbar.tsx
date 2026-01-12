import { navbarLinks } from "../data/Factice";

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="logo" />
        <ul>
          {navbarLinks.map((link, id) => (
            <li key={id}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="search" />
          </button>
          <button>
            <img src="/cart.svg" alt="cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
