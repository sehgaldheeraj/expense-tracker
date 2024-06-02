import { useState } from "react";
import Expenditor from "../Expenditor/Expenditor";
import Recent from "../Recent/Recent";
const Layout = () => {
  //   const [walletBalance, setWalletBalance] = useState(5000);
  //   const [totalExpense, setTotalExpense] = useState(0);
  //   const [totalIncome, setTotalIncome] = useState(0);
  //   const [transaction, setTransaction] = useState([]);

  return (
    <>
      <Expenditor />
      <Recent />
    </>
  );
};

export default Layout;
