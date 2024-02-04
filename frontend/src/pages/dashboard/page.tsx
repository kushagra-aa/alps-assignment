import "./style.css";
import { AddIcon } from "../../components/Icons";
import Table from "../../components/table/table";
import { LeaveRequestType } from "../../types/LeaveRequest";
import ConfirmModal from "../../components/modals/ConfirmModal";
import { useState } from "react";
import AddModal from "../../components/modals/AddModal";
import { OmitAType } from "../../types/utilityTypes";

const data: LeaveRequestType[] = [
  {
    Department: "Marketing",
    Insurance_Company: "BAJAJ ALLIANZ GENERAL INS. CO. LTD",
    PREMIUM: "5645642",
    Gross_Premium: "854454",
    Insurance_Type: "Motor",
    Employee_Id: "E00641",
    ID: "210184000000010003",
    Start_Date: "03-Feb-2024",
    End_Date: "05-Feb-2024",
    Reason: "Test Thru API",
    Car_Number: "UP32FK4545",
    Type_of_Leave: "Casual Leave",
  },
  {
    Department: "Marketing",
    Insurance_Company: "BAJAJ ALLIANZ GENERAL INS. CO. LTD",
    PREMIUM: "745115454",
    Gross_Premium: "54542882",
    Insurance_Type: "Motor",
    Employee_Id: "E0064",
    ID: "210184000000009007",
    Start_Date: "03-Feb-2024",
    End_Date: "05-Feb-2024",
    Reason: "Test Reason Creator",
    Car_Number: "UP32FK4545",
    Type_of_Leave: "Casual Leave",
  },
  {
    Department: "Packaging",
    Insurance_Company: "CARE HEALTH INSURANCE",
    PREMIUM: "69856",
    Gross_Premium: "456989",
    Insurance_Type: "Cyber",
    Employee_Id: "3456",
    ID: "210184000000008023",
    Start_Date: "02-Feb-2024",
    End_Date: "10-Feb-2024",
    Reason: "JHJVJJVJM",
    Car_Number: "12345",
    Type_of_Leave: "GHUJSJ",
  },
  {
    Department: "Marketing",
    Insurance_Company: "KOTAK GENERAL INSURANCE COMPANY",
    PREMIUM: "89960",
    Gross_Premium: "56696",
    Insurance_Type: "Motor",
    Employee_Id: "12345",
    ID: "210184000000008019",
    Start_Date: "02-Feb-2024",
    End_Date: "21-Feb-2024",
    Reason: "23685",
    Car_Number: "DKL78905",
    Type_of_Leave: "Casual Leave",
  },
  {
    Department: "Marketing",
    Insurance_Company: "KOTAK GENERAL INSURANCE COMPANY",
    PREMIUM: "1234",
    Gross_Premium: "1234",
    Insurance_Type: "Travel",
    Employee_Id: "1236",
    ID: "210184000000008015",
    Start_Date: "02-Feb-2024",
    End_Date: "29-Feb-2024",
    Reason: "1234",
    Car_Number: "JL12PK556",
    Type_of_Leave: "Public Holiday",
  },
  {
    Department: "Sales",
    Insurance_Company: "BAJAJ ALLIANZ GENERAL INS. CO. LTD",
    PREMIUM: "1234",
    Gross_Premium: "1234",
    Insurance_Type: "Motor",
    Employee_Id: "1235",
    ID: "210184000000008011",
    Start_Date: "02-Feb-2024",
    End_Date: "28-Feb-2024",
    Reason: "123",
    Car_Number: "DL12JK123",
    Type_of_Leave: "Sick Leave",
  },
];

export type ModalsEnum = "confirm" | "add" | "edit" | "none";

function Dashboard() {
  const [modalOpen, setModalOpen] = useState<ModalsEnum>("none");

  const handleFormSubmit = async (
    formData: OmitAType<LeaveRequestType, "ID">
  ) => {
    console.log("formData :>> ", formData);
  };

  const handleModalOpen = (modalName: ModalsEnum) => {
    setModalOpen(modalName);
  };
  const handleModalClose = () => {
    setModalOpen("none");
  };

  return (
    <main>
      {modalOpen === "add" ? (
        <AddModal
          handleFormSubmit={handleFormSubmit}
          handleModalClose={handleModalClose}
        />
      ) : null}
      {modalOpen === "edit" ? (
        <ConfirmModal handleModalClose={handleModalClose} />
      ) : null}
      {modalOpen === "confirm" ? (
        <ConfirmModal handleModalClose={handleModalClose} />
      ) : null}
      <div className="home">
        <h1>dashboard</h1>
        <button title="Add New Request" onClick={() => handleModalOpen("add")}>
          <AddIcon />
        </button>
      </div>
      <div className="table_container">
        <Table data={data} handleModalOpen={handleModalOpen} />
      </div>
    </main>
  );
}

export default Dashboard;
