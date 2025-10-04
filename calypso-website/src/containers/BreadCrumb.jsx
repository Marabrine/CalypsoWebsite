import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./BreadCrumb.css";
import CalypsoRed from "../assets/CalypsoRed.png";

const Breadcrumb = ({ items = [] }) => {
  const location = useLocation();
  const params = useParams();
  const { t } = useTranslation();

  // Define route mappings for breadcrumbs
  const routeMap = {
    "guitar-bass": t("guitars") || "Guitars & Bass",
    pianos: t("pianos") || "Pianos",
    "orchestral-strings": t("orchStrings") || "Orchestral Strings",
    "brass-wind": t("winds") || "Brass & Wind",
    "drums-percussion": t("drums") || "Drums & Percussion",
    special: t("special") || "Special Instruments",
    accessories: t("accessories") || "Accessories",
    "sonata-calypso": "Sonata Calypso",
    contact: t("contact") || "Contact",
  };

  // Function to get item name by ID
  const getItemNameById = (id) => {
    if (!items || items.length === 0) return t("itemDetails") || "Item Details";

    const item = items.find((item) => item.id === id);
    return item ? item.name : t("itemDetails") || "Item Details";
  };

  // Generate breadcrumb items from current path
  const generateBreadcrumbs = () => {
    const pathSegments = location.pathname
      .split("/")
      .filter((segment) => segment);
    const breadcrumbs = [{ path: "/", label: "Home", isLast: false }];

    let currentPath = "";

    pathSegments.forEach((segment, index) => {
      if (segment === "items") return;
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;

      // Handle dynamic routes (like item details)
      let label = routeMap[segment] || segment;

      // If it's likely an ID (last segment and not in routeMap), get item name
      if (isLast && !routeMap[segment] && pathSegments.length > 1) {
        label = getItemNameById(segment);
      }

      breadcrumbs.push({
        path: currentPath,
        label: label,
        isLast: isLast,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumbs on home page
  if (location.pathname === "/") {
    return null;
  }

  return (
    <nav className="breadcrumb-nav" aria-label="Breadcrumb">
      <div className="breadcrumb-container">
        <ol className="breadcrumb-list">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="breadcrumb-item">
              {crumb.isLast ? (
                <span className="breadcrumb-current" aria-current="page">
                  <img src={CalypsoRed} alt="" className="breadcrumb-icon" />
                  {crumb.label}
                </span>
              ) : (
                <>
                  <Link to={crumb.path} className="breadcrumb-link">
                    <img src={CalypsoRed} alt="" className="breadcrumb-icon" />
                    {crumb.label}
                  </Link>
                  <span className="breadcrumb-separator" aria-hidden="true">
                    &#x203A;
                  </span>
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
