// src/components/DynamicForm/DynamicForm.js
import React, { useState, useEffect } from "react";

const DynamicForm = ({ formData, onSubmit, isEditMode, initialData }) => {
  const [formState, setFormState] = useState({});

  useEffect(() => {
    if (isEditMode && initialData) {
      setFormState(initialData);
    }
  }, [isEditMode, initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validate = (field) => {
    const { validation } = field;
    if (validation) {
      if (validation.required && !formState[field.name]) {
        return `${field.label} is required`;
      }
      if (validation.pattern && !new RegExp(validation.pattern).test(formState[field.name])) {
        return `Invalid ${field.label}`;
      }
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = [];
    formData.fields.forEach((field) => {
      const error = validate(field);
      if (error) errors.push(error);
    });

    if (errors.length > 0) {
      alert(errors.join(", "));
    } else {
      onSubmit(formState);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {formData.fields.map((field) => (
        <div key={field.name} className="flex flex-col">
          <label htmlFor={field.name} className="text-lg">{field.label}</label>
          
          {field.type === "text" || field.type === "tel" || field.type === "textarea" ? (
            <input
              type={field.type}
              name={field.name}
              id={field.name}
              value={formState[field.name] || ""}
              onChange={handleChange}
              className="border-2 p-2 rounded"
            />
          ) : field.type === "radio" ? (
            field.options.map((option) => (
              <label key={option.value} className="inline-flex items-center">
                <input
                  type="radio"
                  name={field.name}
                  value={option.value}
                  checked={formState[field.name] === option.value}
                  onChange={handleChange}
                  className="mr-2"
                />
                {option.label}
              </label>
            ))
          ) : null}

          <span className="text-red-500 text-sm">
            {validate(field)}
          </span>
        </div>
      ))}

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;