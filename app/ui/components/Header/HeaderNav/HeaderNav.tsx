import styles from "./HeaderNav.module.scss";
import DropdownList from "@/app/ui/components/Header/HeaderNav/DropdownList";
import Link from "next/link";

export default function HeaderNav() {
  const headerNavList = [
    {
      id: 1,
      name: "الاصول المالية +",
      list: [
        { id: 1, item: "العملات الاجنبية" },
        { id: 2, item: "السلع والمعادن" },
        { id: 3, item: "العملات الرقمية" },
        { id: 4, item: "المؤشرات العالمية" },
        { id: 5, item: "الاسهم العالمية" },
      ],
    },
    {
      id: 2,
      name: "أدوات التداول +",
      list: [
        { id: 1, item: "التقويم الاقتصادي" },
        { id: 2, item: "توصيات تداول يومية" },
      ],
    },
    {
      id: 3,
      name: "انواع الحسابات +",
      list: [
        { id: 1, item: "الحسابات الاستثمارية" },
        { id: 2, item: "حسابات اسلامية" },
      ],
    },
    {
      id: 4,
      name: "عن الشركة +",
      list: [
        { id: 1, item: "حول الشركة" },
        { id: 2, item: "بيان المخاطر" },
        { id: 3, item: "سياسة الخصوصية" },
        { id: 4, item: "شروط والاحكام" },
        { id: 5, item: "تواصل معنا" },
      ],
    },
  ];

  return (
    <div className={styles.headerNavigation}>
      <ul className={styles.headerUl}>
        <li className={styles.headerLi}>
          <Link href="/">الرئيسية</Link>
        </li>
        {headerNavList.map((item) => {
          return (
            <li className={styles.headerLi} key={item.id}>
              <span>{item.name}</span>
              <DropdownList list={item.list} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
