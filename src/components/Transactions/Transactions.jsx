import { useState } from "react";
import { Search, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import SearchBar from "../Search/SearchBar";
import SortBy from "../Sort/SortBy";
// Sample transaction data
import PaginationComponent from "../Pagination/PaginationComponent";
const initialTransactions = [
  {
    id: 1,
    recipient: "Ella Phillips",
    category: "Dining Out",
    date: "Aug 10, 2024",
    amount: -45.0,
    avatarColor: "bg-orange-500",
  },
  {
    id: 2,
    recipient: "Sofia Peterson",
    category: "Transportation",
    date: "Aug 8, 2024",
    amount: -15.0,
    avatarColor: "bg-purple-500",
  },
  {
    id: 3,
    recipient: "Mason Martinez",
    category: "Lifestyle",
    date: "Aug 7, 2024",
    amount: -35.25,
    avatarColor: "bg-red-500",
  },
  {
    id: 4,
    recipient: "Sebastian Cook",
    category: "Transportation",
    date: "Aug 6, 2024",
    amount: -22.5,
    avatarColor: "bg-blue-500",
  },
  {
    id: 5,
    recipient: "Green Plate Eatery",
    category: "Groceries",
    date: "October 6, 2024",
    amount: -78.5,
    avatarColor: "bg-green-500",
  },
  {
    id: 6,
    recipient: "William Harris",
    category: "Personal Care",
    date: "October 4, 2024",
    amount: -10.0,
    avatarColor: "bg-yellow-500",
  },
  {
    id: 7,
    recipient: "Elevate Education",
    category: "Education",
    date: "October 4, 2024",
    amount: -50.0,
    avatarColor: "bg-teal-500",
  },
  {
    id: 8,
    recipient: "Serenity Spa & Wellness",
    category: "Personal Care",
    date: "October 10, 2024",
    amount: -30.0,
    avatarColor: "bg-rose-200",
  },
  {
    id: 9,
    recipient: "Rina Sato",
    category: "Bills",
    date: "October 5 2024",
    amount: -50.0,
    avatarColor: "bg-gray-400",
  },
  {
    id: 10,
    recipient: "Spark Electric Solutions",
    category: "Bills",
    date: "Aug 2, 2024",
    amount: -100.0,
    avatarColor: "bg-red-600",
  },
];

const categories = [
  "All Transactions",
  "Dining Out",
  "Transportation",
  "Lifestyle",
  "Groceries",
  "Personal Care",
  "Education",
  "Bills",
];

export default function TransactionsTable() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Transactions");
  const [sortOption, setSortOption] = useState("Latest");
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;

  // Filter transactions based on search query and category
  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.recipient.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Transactions" ||
      transaction.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort transactions
  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    const amountA = parseFloat(a.amount);
    const amountB = parseFloat(b.amount);
    if (sortOption === "Latest") {
      return new Date(amountB.date) - new Date(amountA.date);
    } else if (sortOption === "Oldest") {
      return new Date(amountA.date) - new Date(amountB.date);
    } else if (sortOption === "Amount: High to Low") {
      return amountA - amountB;
    } else if (sortOption === "Amount: Low to High") {
      return amountB - amountA;
    }
    return 0;
  });

  // Pagination
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = sortedTransactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );
  const totalPages = Math.ceil(sortedTransactions.length / transactionsPerPage);

  // Get initials for avatar
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <div className="max-w-4xl mx-auto bg-white flex flex-col w-full h-auto gap-3 rounded-lg overflow-hidden px-10 py-6">
      {/* Header with search and filters */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <SearchBar searchQuery={searchQuery} onSearchQuery={setSearchQuery} />

        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Sort by</span>
            <SortBy sortOption={sortOption} onSortOption={setSortOption} />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Category</span>
            <select
              className="px-3 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Transactions table */}
      <div className="rounded-lg overflow-hidden border border-gray-200 w-full overflow-x-auto">
        <table className="w-full divide-y divide-gray-200 min-w-[600px]">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Recipient/Sender
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Category
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentTransactions.length > 0 ? (
              currentTransactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div
                        className={`flex-shrink-0 h-10 w-10 rounded-full ${transaction.avatarColor} flex items-center justify-center text-white`}
                      >
                        {getInitials(transaction.recipient)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {transaction.recipient}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        transaction.category === "Dining Out"
                          ? "bg-blue-100 text-blue-800"
                          : transaction.category === "Transportation"
                          ? "bg-purple-100 text-purple-800"
                          : transaction.category === "Lifestyle"
                          ? "bg-green-100 text-green-800"
                          : transaction.category === "Groceries"
                          ? "bg-yellow-100 text-yellow-800"
                          : transaction.category === "Personal Care"
                          ? "bg-orange-100 text-orange-800"
                          : transaction.category === "Education"
                          ? "bg-indigo-100 text-indigo-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {transaction.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right font-medium">
                    ${Math.abs(transaction.amount).toFixed(2)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-10 text-center text-gray-500"
                >
                  No transactions found matching your criteria
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <PaginationComponent
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
