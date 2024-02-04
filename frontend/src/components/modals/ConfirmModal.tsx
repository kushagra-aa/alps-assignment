import Modal from "./Modal";
import "./modal.css";

function ConfirmModal({ handleModalClose }: { handleModalClose: () => void }) {
  const handleActionCancel = (): void => {
    handleModalClose();
  };

  const handleActionClick = (): void => {
    handleModalClose();
  };

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
