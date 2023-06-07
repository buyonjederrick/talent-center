'use client';

interface MenuItemProps {
    onClick: () => void;
    label: string;
    closeMenu: () => void;
}

const MenuItem:React.FC<MenuItemProps> = ({
    onClick,
    label,
    closeMenu
}) => {
  const handleClick = () => {
    onClick();
    closeMenu();
  };

  return (
    <div
      onClick={handleClick}
      className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
    >
      {label}
    </div>
  )
}

export default MenuItem;