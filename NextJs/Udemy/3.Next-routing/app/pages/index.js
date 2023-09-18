import Link from "next/link";
function HomePage() {
  return (
    <div>
      <h1>The home page</h1>
      <ul>
        <li>
          <Link replace href="/portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link  href="/clients">
            Clients
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
