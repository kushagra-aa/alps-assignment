import "./style.css";
import { AddIcon, RefreshIcon } from "../../components/Icons";
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
  const refreshRequests = async () => {
    await API.get("http://localhost:3000/api/v1/leaves/refresh");
    await getRequests();
  };

  const handleDelete = async (id: string) => {
    await API.del(`http://localhost:3000/api/v1/leaves/${id}`, {}).finally(
      () => {
        refreshRequests();
      }
    );
  };
  const handleAdd = async (body: LeaveRequestType) => {
    await API.post(`http://localhost:3000/api/v1/leaves/`, body, {}).finally(
      () => {
        refreshRequests();
      }
    );
  };
  const handleEdit = async (
    body: OmitAType<LeaveRequestType, "ID">,
    id: string
  ) => {
    await API.patch(
      `http://localhost:3000/api/v1/leaves/${id}`,
      body,
      {}
    ).finally(() => {
      refreshRequests();
    });
  };

  useEffect(() => {
    getRequests();
  }, []);

  return (
    <main>
      {modalOpen === "add" ? (
        <AddModal
          handleFormSubmit={handleAdd}
          handleModalClose={handleModalClose}
        />
      ) : null}
      {modalOpen === "edit" ? (
        <EditModal
          selectedRequest={selectedRequest}
          handleFormSubmit={handleEdit}
          handleModalClose={handleModalClose}
        />
      ) : null}
      {modalOpen === "confirm" ? (
        <ConfirmModal
          handleDelete={handleDelete}
          handleModalClose={handleModalClose}
          selectedRequest={selectedRequest}
        />
      ) : null}
      <div className="home">
        <h1>dashboard</h1>
        <div className="home_actions">
          <button
            title="Add New Request"
            onClick={() => handleModalOpen("add")}
          >
            <AddIcon />
          </button>
          <button title="Refresh Request" onClick={() => refreshRequests()}>
            <RefreshIcon />
          </button>
        </div>
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
