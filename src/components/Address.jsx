import React from "react";

export const Address = () => {
  const arr = ["Harish Kumar", "Ho.No. 2-3-207", "Wanowarie", "Pune", "411040"];

  return (
    <div className="sub">
      {arr.map((item, index) => (
        <p>
          {item.toUpperCase()} {index < arr.length - 1 && ","}
        </p>
      ))}
    </div>
  );
};
