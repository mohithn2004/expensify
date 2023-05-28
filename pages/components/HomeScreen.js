"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import "./
import LineGraph from "./LineGraph";
import DoughnutGraph from "./Doughnut";
import Modal from 'react-modal';


const ExpenseItem = ({expense}) => {
  return(
    <div className="expense-container">
  <div className="expense-list">
  <p className="expense-date">{expense.date}</p>
  <p className="expense-title">{expense.title}</p>
  <p className="expense-amount">{expense.amount}</p>
  </div>
  </div>)
    }

function HomeScreen() {
  
  const [expenses, setExpenses] = useState([]);
  const [amounts, setAmounts] = useState([]);
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [budget, setBudget] = useState();
  const [spent, setSpent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddingExpense, setIsAddingExpense] = useState(false);


  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);

  };
  

  const handleAddExpense = () => {
    const newExpense = {
      date: date,
      title: title,
      amount: parseFloat(amount)
    };

    setSpent(amount+spent)
    setDate('');
    setTitle('');
    setAmount();
    setIsAddingExpense(true);
  };

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  // Calculate the amount spent
  const amountSpent = totalExpenses;


  useEffect(() => {
    if (isAddingExpense) {
      setIsModalOpen(false);
      setIsAddingExpense(false);
    }
  }, [isAddingExpense]);

  return (
    <div className="home-screen">
      <div>
        <Image
          className="dragon-bg"
          src="/dragon bg-1.png"
          height={850}
          width={1536}
          alt=""
        />
      </div>

      <div>
        <div className="nav-button home">
          <h2 className="home home-text">Home</h2>
        </div>
        <div className="nav-button about">
          <h2 className="about text">About</h2>
        </div>
        <div className="nav-button review">
          <h2 className="review text">Review</h2>
        </div>

        <div className="lining">
          <Image
            className="profile-pic"
            src="/profile pic green.jpg"
            height={103}
            width={103}
            alt=""
          />
          <div className="intro-text">
            <p className="white-text">Hello Mohith!</p>
            <div className="lining ">
              <p className="white-text">Track</p>
              <p className="spacing">Your expenses</p>
            </div>
          </div>

          <div className="lining">

            <div className="doughnut-graph-container">
                <DoughnutGraph budget={budget} amountSpent={amountSpent} />
            </div>

            <div className="line-graph-container">
              <LineGraph className="line-graph" data={amounts} />
            </div>
            

            <div className="budget-section">
              <div className="budget-input">
                <div className="budget-text">
                  Budget allotted for <p className="white-text">the month</p>
                </div>
                <Image
                  className="rupees"
                  src="/rupees.png"
                  height={0}
                  width={0}
                  alt=""
                />
                <input value={budget} onChange={handleBudgetChange} className="budget-value" type="number" />
              </div>
              <div className="budget-line"></div>
              <div className="lining">
              <div className="amount">
                Amount
                <p className="white-text">spent</p>
                </div>
                <h1 className="amount-spent">{amountSpent}</h1>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="plus-button" onClick={()=>{setIsModalOpen(true)}}>
        <h1 className="plus">+</h1>
        </div>

        <div className="modal-background">
        <Modal className='modal-wrapper' isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        <h2 className="modal-label add-expense-text">Add Expense</h2>
        <form>
          <div>
            <div className="modal-icon"></div>
              <Image className="notes" src='/notes.png' alt='' height={46} width={34} />
            <input className="modal-input title" placeholder="Enter the description" type="text" value={title} onChange={handleTitleChange} />
          </div>

          <div>
          <div className="modal-icon"></div>
          <h2 className="inr">INR</h2>
            <input className="modal-input money" min='1' type="number" placeholder="0.00" value={amount} onChange={()=>{handleAmountChange}} />
          </div>
          
          <div>
            <div className="modal-icon">
            </div>
            <Image className="calendar" src='/calender.png' alt='' height={46} width={34} />
            <input className="modal-input date" type="date" value={date} onChange={handleDateChange} />
          </div>

      <div className="submit-button-wrapper">
          <button className="modal-label submit-button" type="button" onClick={()=>{handleAddExpense;handleAddAmount}}>
            <p className="submit-text">Submit</p>
          </button>
          </div>
        </form>
      </Modal>

    </div>
    <div>
    {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}  
      </div>
    </div>
  );
}

export default HomeScreen;
