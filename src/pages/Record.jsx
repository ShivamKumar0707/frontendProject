import React, { useState, useEffect } from "react";

const tabs = ["All", "Trade", "Withdraw", "Deposit"];

const mockTransactions = [
  { 
    id: 1, 
    type: "Trade", 
    amount: 500, 
    date: "2025-05-01", 
    status: "Success" 
  },
  {
    id: 2,
    type: "Withdraw",
    amount: 300,
    date: "2025-05-03",
    status: "Pending",
  },
  {
    id: 3,
    type: "Deposit",
    amount: 1000,
    date: "2025-05-05",
    status: "Success",
  },
  { id: 4, type: "Trade", amount: 150, date: "2025-05-06", status: "Failed" },
  {
    id: 5,
    type: "Deposit",
    amount: 700,
    date: "2025-05-07",
    status: "Success",
  },
];

const Record = () => {
  const [activeTab, setActiveTab] = useState("All");

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (activeTab === "All") {
      setFilteredData(mockTransactions);
    } else {
      const filtered = mockTransactions.filter((tx) => tx.type === activeTab);
      setFilteredData(filtered);
    }
  }, [activeTab]);

  return (
    <>
   
      <div className="p-6 w-full max-w-[430px] h-screen  overflow-hidden shadow-2xl ">
        <h1 className="text-2xl font-bold mb-4 text-white">Transaction Records</h1>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md transition-all ${
                activeTab === tab
                  ? "border border-gray-500 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-blue-300  text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto border border-gray-500 bg-gray-300 shadow rounded-lg">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-400">
              <tr>
                <th className="px-3 py-3">ID</th>
                <th className="px-3 py-3">Type</th>
                <th className="px-3 py-3">Amount</th>
                <th className="px-3 py-3">Date</th>
                <th className="px-3 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center px-3 py-4 text-gray-500"
                  >
                    No transactions found.
                  </td>
                </tr>
              ) : (
                filteredData.map((tx) => (
                  <tr key={tx.id} className="border-b hover:bg-gray-50">
                    <td className="px-3 py-4">{tx.id}</td>
                    <td className="px-3 py-4">{tx.type}</td>
                    <td className="px-3 py-4">₹{tx.amount}</td>
                    <td className="px-3 py-4">{tx.date}</td>
                    <td
                      className={`px-3 py-4 font-medium ${getStatusColor(
                        tx.status
                      )}`}
                    >
                      {tx.status}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

// Helper function for status color
const getStatusColor = (status) => {
  switch (status) {
    case "Success":
      return "text-green-600";
    case "Pending":
      return "text-yellow-600";
    case "Failed":
      return "text-red-600";
    default:
      return "text-gray-600";
  }
};
export default Record;
