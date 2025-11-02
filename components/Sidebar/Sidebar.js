"use client";
import Link from 'next/link'
import { useSidebar } from "./SidebarContext";
import styles from './Sidebar.module.css'
const Sidebar = () => {
  const { activeIndex, onIndexChanged } = useSidebar();

  const menuItems = [
    { id: 0, label: 'Dashboard', url: 'dashboard', icon: '📊' },
    { id: 1, label: 'Perfil', url: 'perfil', icon: '👤' },
    { id: 2, label: 'Notebooks', url: 'notebooks', icon: '⚙️' }
  ];

  const MenuItem = ({ item, isActive, onClick }) => {
    return (
      <Link
        href={item.url}
        className={`${styles.menuItem} ${isActive ? styles.active : ""}`}
        onClick={() => onClick(item.id)}
      >
        <span className={styles.icon}>{item.icon}</span>
        {item.label}
      </Link>
    );
  };

  return (
    <div className={styles.container}>
      <h2 className="text-xl font-bold mb-6">Menu</h2>
      <div className={styles.menu}>
        {menuItems.map((item) => (
          <MenuItem
            item={item}
            key={item.id}
            className={styles.menuItem}
            isActive={item.id === activeIndex}
            onClick={onIndexChanged}
          />
        ))}
      </div>

    </div>
  );
};

export default Sidebar;
