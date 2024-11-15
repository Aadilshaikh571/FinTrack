import React, { useState } from "react";
import "./style.css";
import { Radio, Select, Table } from "antd";
import searchImage from "../../assets/search.svg";
import { parse, unparse } from "papaparse";
import { toast } from "react-toastify";

const TransactionTable = ({ transaction,addTransactions,fetchTransactions }) => {
  const { Option } = Select;
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [sortKey, setSortKey] = useState("");
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Tag",
      dataIndex: "tag",
      key: "tag",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];
  let filteredTransactions = transaction.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      item.type.includes(typeFilter)
  );

  let sortedTransaction = filteredTransactions.sort((a, b) => {
    if (sortKey === "date") {
      return new Date(a.date) - new Date(b.date);
    } else if (sortKey === "amount") {
      return a.amount - b.amount;
    } else {
      return 0;
    }
  });

  //for importing data 

  const importFromCsv = (event) => {
    event.preventDefault();
    const file = event.target.files[0];

    if (file) {
     parse(file, {
        header: true,
        complete: async (results) => {
          try {
            // Loop through each row in the parsed data
            for (const transaction of results.data) {
              // Create a new transaction object for each row
              const newTransaction = {
                name: transaction.name,
                amount: parseFloat(transaction.amount, 10), // Parse amount as integer
                tag: transaction.tag,
                type: transaction.type,
                date: transaction.date,
              };

              // Add each transaction (assuming `addTransaction` adds it to Firebase or backend)
              await addTransactions(newTransaction);
            }

            // Success notification
            toast.success("All Transactions Added!",{
              position:"top-center"
            });

            // Fetch updated transactions if needed
            fetchTransactions();

            // Clear file input
            event.target.value = null;
          } catch (error) {
            toast.error("Error adding transactions",{
              position:"top-center"
            });
            console.error("Error adding transactions:", error);
          }
        },
      });
    }
  };

  function exportCsv() {
    var csv = unparse({
      fields: ["name", "type", "date", "tag", "amount"],
      data:transaction,
    });

    var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    var url = window.URL.createObjectURL(blob);
    const tempLink = document.createElement("a");
    tempLink.href = url;
    tempLink.download = "transaction.csv";
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  }

  return (
    <div className="transaction-container">
      {/* Search and Filter Section */}
      <div className="transaction-controls">
        <div className="input-flex">
          <img src={searchImage} width="16" alt="search" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search By Name"
          />
        </div>
        <Select
          className="select-input"
          onChange={(value) => setTypeFilter(value)}
          value={typeFilter}
          placeholder="Filter"
          allowClear
        >
          <Option value="">All</Option>
          <Option value="income">Income</Option>
          <Option value="expense">Expense</Option>
        </Select>
      </div>

      {/* Sort Options */}
      <h2>My Transactions</h2>
      <Radio.Group
        className="input-radio"
        onChange={(e) => setSortKey(e.target.value)}
        value={sortKey}
      >
        <Radio.Button value="">No Sort</Radio.Button>
        <Radio.Button value="date">Sort by Date</Radio.Button>
        <Radio.Button value="amount">Sort by Amount</Radio.Button>
      </Radio.Group>

      {/* Import/Export Buttons */}
      <div className="transaction-buttons">
        <button className="btn" onClick={exportCsv}>
          Export to CSV
        </button>
        <label htmlFor="file-csv" className="btn btn-blue">
          Import from CSV
        </label>
        <input
          id="file-csv"
          type="file"
          accept=".csv"
          onChange={importFromCsv}
          style={{ display: "none" }}

        />
      </div>

      {/* Transactions Table */}
      <Table dataSource={sortedTransaction} columns={columns} />
    </div>
  );
};

export default TransactionTable;
