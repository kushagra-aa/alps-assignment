import { LeaveRequestType } from "../../types/LeaveRequest";
import Modal from "./Modal";
import "./modal.css";

function ConfirmModal({
  handleModalClose,
  handleDelete,
  selectedRequest,
}: {
  handleDelete: (id: string) => Promise<void>;
  handleModalClose: () => void;
  selectedRequest: LeaveRequestType | undefined;
}) {
  const handleActionCancel = (): void => {
    handleModalClose();
  };

  const handleActionClick = async () => {
    if (selectedRequest) await handleDelete(selectedRequest.ID);
    handleModalClose();
  };

  if (!selectedRequest)
    return (
      <Modal
        title="Are You Sure?"
        action="Close"
        actionHandler={handleActionCancel}
        cancelHandler={handleActionCancel}
        handleModalClose={handleModalClose}
      >
        <div className="modal_content form_modal">
          <p>No Leave Request Selected</p>
        </div>
      </Modal>
    );

  return (
    <Modal
      title="Are You Sure?"
      action="delete"
      actionHandler={handleActionClick}
      cancelHandler={handleActionCancel}
      handleModalClose={handleModalClose}
    >
      <div className="modal_content">
        <p>Do you want to delete the Record?</p>
      </div>
    </Modal>
  );
}

export default ConfirmModal;
