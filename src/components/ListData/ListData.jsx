import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchData } from "../../services/crudService";
import { API } from "../../config/config";

// Function to map URL to specific text
const getTitleBasedOnUrl = (path) => {
  switch (path) {
    case "/":
      return "Home Page";
    case "/app/dashboard":
      return "Dashboard";
    case "/app/user-profile":
      return "User Profile";
    case "/app/user-role":
      return "Role Section";
    case "/app/user-permission":
      return "Permission Section";
    case "/app/settings":
      return "Settings";
    default:
      return "Default Page";
  }
};

// Functions for dynamic actions
const handleAddAction = (path) => {
  switch (path) {
    case "/app/dashboard":
      console.log("Add clicked on Dashboard");
      break;
    case "/app/user-profile":
      console.log("Add clicked on User Profile");
      break;
    case "/app/user-role":
      console.log("Add clicked on User Role");
      break;
    case "/app/user-permission":
      console.log("Add clicked on User Permission");
      break;
    case "/app/settings":
      console.log("Add clicked on Settings");
      break;
    default:
      console.log("Add clicked on Default Page");
  }
  setFormData(null); // Clear form data for adding new entry
  setShowForm(true); // Show form
};

const handleSearchAction = (path, searchQuery) => {
  switch (path) {
    case "/app/dashboard":
      console.log(`Search clicked on Dashboard with query: ${searchQuery}`);
      break;
    case "/app/user-profile":
      console.log(`Search clicked on User Profile with query: ${searchQuery}`);
      break;
    case "/app/user-role":
      console.log(`Search clicked on User Role with query: ${searchQuery}`);
      break;
    case "/app/user-permission":
      console.log(
        `Search clicked on User Permission with query: ${searchQuery}`
      );
      break;
    case "/app/settings":
      console.log(`Search clicked on Settings with query: ${searchQuery}`);
      break;
    default:
      console.log(`Search clicked on Default Page with query: ${searchQuery}`);
  }
};

// Function to fetch dynamic data for DataTable
const getTableDataBasedOnUrl = async (path, token) => {
  switch (path) {
    case "/app/user-profile":
      const userData = await fetchData(API.GET_ALL_USERS, token);
      const transformedData = userData.data.map((user) => ({
        Id: user.id,
        "Full Name": `${user.firstname || ""} ${user.lastname || ""}`.trim(),
        "Contact No.": user.contactNum1 || "N/A",
        Status: user.isActive ? "Active" : "Inactive",
        Action: "View/Edit/Delete",
      }));
      return {
        headers: ["Id", "Full Name", "Contact No.", "Status", "Action"],
        data: transformedData,
      };

    case "/app/user-role":
      return {
        headers: ["ID", "Role Name", "Permissions", "Action"],
        data: [
          {
            id: 1,
            roleName: "Admin",
            permissions: "All",
            Action: "View/Edit/Delete",
          },
          {
            id: 2,
            roleName: "User",
            permissions: "Read Only",
            Action: "View/Edit/Delete",
          },
        ],
      };

    case "/app/user-permission":
      return {
        headers: ["ID", "Permission Name", "Description", "Action"],
        data: [
          {
            id: 1,
            permissionName: "Read",
            description: "Can read data",
            Action: "View/Edit/Delete",
          },
          {
            id: 2,
            permissionName: "Write",
            description: "Can write data",
            Action: "View/Edit/Delete",
          },
        ],
      };

    default:
      return {
        headers: ["ID", "Name", "Description", "Action"],
        data: [
          {
            id: 1,
            name: "Sample",
            description: "Sample Description",
            Action: "View/Edit/Delete",
          },
        ],
      };
  }
};

// Functions to handle Edit and Delete actions
const handleEdit = (id, path) => {
  console.log(`Edit clicked for ID: ${id} on ${path}`);
  setFormData({ id }); // Pass the ID to edit (you can fetch more data if needed)
  setShowForm(true); // Show form
};

const handleDelete = (id, path) => {
  console.log(`Delete clicked for ID: ${id} on ${path}`);
};

const DynamicPage = () => {
  const location = useLocation();
  const currentTitle = getTitleBasedOnUrl(location.pathname);
  const [headers, setHeaders] = useState([]);
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility
  const [formData, setFormData] = useState(null); // Store form data (for editing)
  const token = useSelector((state) => state.auth.token); // Ensure token is fetched

  // Fetch data based on URL
  useEffect(() => {
    const fetchDataForTable = async () => {
      const tableData = await getTableDataBasedOnUrl(location.pathname, token);
      setHeaders(tableData.headers || []);
      setData(tableData.data || []);
    };
    fetchDataForTable();
  }, [location.pathname, token]);

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-start p-4">
      <div className="bg-white rounded-lg shadow-lg w-full p-8 border-2 border-gray-700">
        {/* Title Bar */}
        <div className="bg-red-600 text-white p-4 rounded-t-lg">
          <h1 className="text-3xl font-semibold">{currentTitle}</h1>
        </div>

        {/* Add Row with Add button and Search Bar */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => handleAddAction(location.pathname)}
            className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none"
          >
            Add
          </button>

          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button
              onClick={() => handleSearchAction(location.pathname, "")}
              className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none"
            >
              Search
            </button>
          </div>
        </div>

        {/* Show the form if showForm is true */}
        {showForm && (
          <DynamicForm
            formData={formData} // Pass form data (ID for edit, null for add)
            onClose={() => setShowForm(false)} // Function to close the form
          />
        )}

        {/* DataTable */}
        <div className="mt-8 overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th
                    key={index}
                    className="px-4 py-2 text-left bg-gray-100 text-gray-800 border border-gray-300"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={index} className="border-b">
                    {headers.map((header, colIndex) => (
                      <td
                        key={colIndex}
                        className="px-4 py-2 text-gray-700 border border-gray-300"
                      >
                        {header === "Action" ? (
                          <div className="flex space-x-2">
                            <button
                              onClick={() =>
                                handleEdit(item.Id, location.pathname)
                              }
                              className="bg-blue-600 text-white py-1 px-4 rounded-md hover:bg-blue-700"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() =>
                                handleDelete(item.Id, location.pathname)
                              }
                              className="bg-red-600 text-white py-1 px-4 rounded-md hover:bg-red-700"
                            >
                              Delete
                            </button>
                          </div>
                        ) : (
                          item[header] || "N/A"
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={headers.length}
                    className="px-4 py-2 text-center text-gray-700"
                  >
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DynamicPage;
