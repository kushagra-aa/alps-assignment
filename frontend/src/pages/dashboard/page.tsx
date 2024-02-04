import "./style.css";
import { AddIcon } from "../../components/Icons";
import Table from "../../components/table/Table";
import { LeaveRequestType } from "../../types/LeaveRequest";
import ConfirmModal from "../../components/modals/ConfirmModal";
import { useEffect, useState } from "react";
import AddModal from "../../components/modals/AddModal";
import { OmitAType } from "../../types/utilityTypes";
import EditModal from "../../components/modals/EditModal";
import API from "../../lib/api";

export type ModalsEnum = "confirm" | "add" | "edit" | "none";

function Dashboard() {
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequestType[]>([]);
  const [modalOpen, setModalOpen] = useState<ModalsEnum>("none");
  const [selectedRequest, setSelectedRequest] = useState<LeaveRequestType>();

  const handleFormSubmit = async (
    formData: OmitAType<LeaveRequestType, "ID">
  ) => {
    console.log("formData :>> ", formData);
  };

  const handleModalOpen = (modalName: ModalsEnum) => {
    setModalOpen(modalName);
  };
  const handleSelectRequest = (selected: LeaveRequestType) => {
    setSelectedRequest(selected);
  };
  const handleModalClose = () => {
    setModalOpen("none");
  };

  const getRequests = async () => {
    const resp = await API.get("http://localhost:3000/api/v1/leaves");
    setLeaveRequests(resp.data.data);
  };

  useEffect(() => {
    getRequests();
  }, []);

  return (
    <main>
      {modalOpen === "add" ? (
        <AddModal
          handleFormSubmit={handleFormSubmit}
          handleModalClose={handleModalClose}
        />
      ) : null}
      {modalOpen === "edit" ? (
        <EditModal
          selectedRequest={selectedRequest}
          handleFormSubmit={handleFormSubmit}
          handleModalClose={handleModalClose}
        />
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
        <Table
          setSelectedRequest={handleSelectRequest}
          data={leaveRequests}
          handleModalOpen={handleModalOpen}
        />
      </div>
    </main>
  );
}

export default Dashboard;
