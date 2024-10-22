import styles from "./HeaderNav.module.scss";
import Link from "next/link";

export default function DropdownList(props: any) {
  return (
    <nav className={styles.dropdownMenu}>
      <ul>
        {props.list.map((el: any) => {
          return (
            <li>
              <Link href="/" key={el.id}>
                {el.item}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
