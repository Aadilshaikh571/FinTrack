import React from "react";
import "./style.css";
import { Card, Row } from "antd";
import Button from "../Button/Button";
const Cards = ({showExpenseModal,showIncomeModal,expenses,totalBalance,income}) => {
  return (
    <div>
      <Row className="my-row">
        <Card className="my-card"bordered={true}>
          <h2>Current Balance </h2>
          <span>₹ {totalBalance} </span>
          <Button text={"Reset Balance"} blue={true}></Button>
        </Card>
        <Card className="my-card">
        <h2>Total Income </h2>
          <span>₹{income} </span>
          <Button text={"Add Income"}blue={true} onClick={showIncomeModal}></Button>
        </Card>
        <Card className="my-card" >
          <h2>Total Expense</h2>
          <span>₹ {expenses} </span>
          <Button text={"Add Expenses"}blue={true} onClick={showExpenseModal}></Button>
        </Card>
      </Row>
    </div>
  );
};

export default Cards;
