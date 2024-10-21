import styles from "./HeaderNav.module.scss";

export default function DropdownList(props: any) {
  return (
    <nav className={styles.dropdownMenu}>
      <ul>
        {props.list.map((el: any) => {
          return <li key={el.id}>{el.item}</li>;
        })}
      </ul>
    </nav>
  );
}
