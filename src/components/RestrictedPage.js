import React from "react";
import restricted from "../assets/images/restricted_page.png";

const RestrictedPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={restricted}
        alt="Restricted Page"
        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
      />
    </div>
  );
};

export default RestrictedPage;