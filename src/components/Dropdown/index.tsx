import React, { useState, useEffect, useRef, ReactNode } from "react";
import styles from "./Dropdown.module.css";

type Placement = "bottomLeft" | "bottomRight" | "topLeft" | "topRight";

interface DropdownProps {
  trigger?: "click" | "hover";
  absolute?: boolean
  overlay: { action?: any; render: ReactNode }[];
  placement?: Placement;
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  children: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({
  trigger = "click",
  overlay,
  absolute = true,
  placement = "bottomRight",
  visible,
  onVisibleChange,
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(visible || false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (trigger === "click") {
      const newVisibility = !isOpen;
      setIsOpen(newVisibility);
      if (onVisibleChange) onVisibleChange(newVisibility);
    }
  };

  const handleMouseEnter = () => {
    if (trigger === "hover") {
      setIsOpen(true);
      if (onVisibleChange) onVisibleChange(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === "hover") {
      setIsOpen(false);
      if (onVisibleChange) onVisibleChange(false);
    }
  };

  const closeDropdown = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
      if (onVisibleChange) onVisibleChange(false);
    }
  };

  useEffect(() => {
    if (trigger === "click") {
      document.addEventListener("mousedown", closeDropdown);
    }
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (typeof visible === "boolean") {
      setIsOpen(visible);
    }
  }, [visible]);

  const getDropdownPosition = (): React.CSSProperties => {
    switch (placement) {
      case "bottomRight":
        return { top: "100%", right: "0" };
      case "topLeft":
        return { bottom: "100%", left: "0" };
      case "topRight":
        return { bottom: "100%", right: "0" };
      default:
        return { top: "100%", left: "0" };
    }
  };

  return (
    <div
      className={styles.dropdown}
      style={{ position: absolute ? "absolute" : "relative" }}
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div onClick={handleToggle} className={styles.dropdownChild}>{children}</div>
      {isOpen && (
        <div
          className={`${styles.dropdownMenu} ${styles.showMenu}`}
          style={getDropdownPosition()}
        >
          <ul>
            {overlay.map((el, key) => (
              <li key={key} onClick={el?.action || null}>
                {el.render}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
