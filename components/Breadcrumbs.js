import Link from "next/link";

export default function BreadCrumbs() {
  return (
    <nav className="breadcrumbs">
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/shopping-cart">
            <a>Shopping Cart</a>
          </Link>
        </li>
        <li>
          <Link href="/weekly-schedule">
            <a> Weekly Schedule</a>
          </Link>
        </li>
        <li>
          <Link href="/monthly-expense-sheet">
            <a> Monthly Expense Sheet</a>
          </Link>
        </li>
        <li>
          <Link href="/css-shapes">
            <a> CSS Shapes</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
