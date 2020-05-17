import React, { useState, useEffect } from "react";
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import "./styles.scss";

export default () => {
  const [open, setOpen] = useState(false);
  const classes = ["user", "nav-item", "items", "menu-item"];
  useEffect(() => {
    const click = (e) => {
      if (!classes.includes(e.target.className)) {
        setOpen(false);
      }
    };
    window.addEventListener("click", click, true);
    return () => {
      window.removeEventListener("click", click);
    };
  }, [classes]);
  return (
    <div id="dropdown">
      <div
        className={open ? "user open" : "user"}
        onClick={() => setOpen(!open)}
      >
        <div className="nav-item">
          <span className="icon-button">
            <FaUser />
          </span>
          <span>Carlos Germano</span>
          {open && (
            <div className="dropdown">
              <ul className="items">
                <li className="menu-item">
                  <FaCog />
                  <span>Configurações</span>
                </li>
                <li className="menu-item">
                  <FaSignOutAlt />
                  <span>Sair</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
