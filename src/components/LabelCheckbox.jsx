import React from "react";

const LabelCheckbox = ({ value, onChange, title, domId, identity }) => {
  return (
    <div className="flex items-center">
      <input
        id={identity}
        type="checkbox"
        checked={value === identity}
        onChange={(e) => onChange(e, identity)}
      />
      <label htmlFor={identity} className="ml-2 text-sm">
        {title}
      </label>
    </div>
  );
};

export default LabelCheckbox;
