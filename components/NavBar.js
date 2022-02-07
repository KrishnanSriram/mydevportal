import Link from 'next/link';

export const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
        <style jsx>{`
          ul {
            list-style-type: none;
            padding: -1;
          }

          li {
            display: inline;
            margin-left: 0.75rem;
          }
        `}</style>
      </nav>
    </header>
  );
};
