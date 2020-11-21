import Link from "next/link";
import { useRouter } from 'next/router'

export default function BreadCrumbs() {
  const router = useRouter()
  const activeClass = router.pathname;
  const shoppingCartPath = "/shopping-cart";
  const weeklySchedulePath = "/weekly-schedule";
  const monthlyExpensePath = "/monthly-expense-sheet";
  const cssShapes = "/css-shapes";

  return (
    <nav className="breadcrumbs">
      <ul className="container">
        <li>
          <Link href="/">
            <a className="">Home</a>
          </Link>
        </li>
        <li>
          <Link href={shoppingCartPath}>
            <a className={activeClass === shoppingCartPath ? 'active': ''}>Shopping Cart</a>
          </Link>
        </li>
        <li>
          <Link href={weeklySchedulePath}>
            <a className={activeClass === weeklySchedulePath ? 'active': ''}> Weekly Schedule</a>
          </Link>
        </li>
        <li>
          <Link href={monthlyExpensePath}>
            <a className={activeClass === monthlyExpensePath ? 'active': ''}> Monthly Expense Sheet</a>
          </Link>
        </li>
        <li>
          <Link href={cssShapes}>
            <a className={activeClass === cssShapes ? 'active': ''}> CSS Shapes</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
