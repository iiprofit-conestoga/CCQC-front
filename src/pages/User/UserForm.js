// src/components/UserModule/UserForm.js
import React from "react";
import DynamicForm from "../DynamicForm/DynamicForm";

const UserForm = ({ isEditMode, initialData, onSubmit }) => {
  const userFormData = {
    module: "user",
    fields: [
      {
        name: "username",
        label: "Username",
        type: "text",
        validation: { required: true, pattern: "^[a-zA-Z0-9]+$" }
      },
      {
        name: "fullname",
        label: "Full Name",
        type: "text",
        validation: { required: true }
      },
      {
        name: "contactNumber",
        label: "Contact Number",
        type: "tel",
        validation: { required: true, pattern: "^[0-9]{10}$" }
      },
      {
        name: "isActive",
        label: "Is Active",
        type: "radio",
        options: [
          { label: "Active", value: "true" },
          { label: "Inactive", value: "false" }
        ],
        validation: { required: true }
      }
    ]
  };

  return (
    <DynamicForm
      formData={userFormData}
      isEditMode={isEditMode}
      initialData={initialData}
      onSubmit={onSubmit}
    />
  );
};

export default UserForm;