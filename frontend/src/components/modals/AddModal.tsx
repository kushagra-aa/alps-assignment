import { useRef } from "react";
import Modal from "./Modal";
import "./modal.css";
import { LeaveRequestType } from "../../types/LeaveRequest";
import { OmitAType } from "../../types/utilityTypes";
import addClassToInput from "../../helpers/addClassToElm";

type OptionsType = {
  insuranceType: string[];
  department: string[];
  typeOfLeave: string[];
  insuranceCompany: string[];
};

const options: OptionsType = {
  insuranceType: ["Health", "Motor", "Travel", "Fire", "Cyber"],
  department: ["Sales", "Marketing", "Operations", "Finance", "Packaging"],
  typeOfLeave: ["Sick Leave", "Casual Leave", "Public Holiday"],
  insuranceCompany: [
    "TATA-AIG GENERAL INSURANCE CO. LTD",
    "BAJAJ ALLIANZ GENERAL INS. CO. LTD",
    "KOTAK GENERAL INSURANCE COMPANY",
    "IFFKO TOKIO GENERAL INSURANCE COMPANY",
    "STAR HEALTH INSURANCE COMPANY",
    "CARE HEALTH INSURANCE",
  ],
};

function AddModal({
  handleModalClose,
  handleFormSubmit,
}: {
  handleModalClose: () => void;
  handleFormSubmit(formData: OmitAType<LeaveRequestType, "ID">): void;
}) {
  const formRef = useRef<HTMLFormElement>(null!);

  const validateForm = (form: HTMLFormElement) => {
    let isFormValid = true;
    if (!form.Employee_Id.required || !form.Employee_Id.value) {
      addClassToInput(form.Employee_Id, "error");
      isFormValid = false;
    }
    if (!form.Department.required || !form.Department.value) {
      addClassToInput(form.Department, "error");
      isFormValid = false;
    }
    if (!form.Type_of_Leave.required || !form.Type_of_Leave.value) {
      addClassToInput(form.Type_of_Leave, "error");
      isFormValid = false;
    }
    if (!form.Start_Date.required || !form.Start_Date.value) {
      addClassToInput(form.Start_Date, "error");
      isFormValid = false;
    }
    if (!form.End_Date.required || !form.End_Date.value) {
      addClassToInput(form.End_Date, "error");
      isFormValid = false;
    }
    return isFormValid;
  };

  const handleActionCancel = (): void => {
    handleModalClose();
  };

  const handleActionClick = (): void => {
    if (!validateForm(formRef.current)) {
      return;
    }
    const formData: OmitAType<LeaveRequestType, "ID"> = {
      Employee_Id: formRef.current.Employee_Id.value,
      Insurance_Type: formRef.current.Insurance_Type.value,
      Department: formRef.current.Department.value,
      Type_of_Leave: formRef.current.Type_of_Leave.value,
      Start_Date: formRef.current.Start_Date.value,
      End_Date: formRef.current.End_Date.value,
      Car_Number: formRef.current.Car_Number.value,
      Insurance_Company: formRef.current.Insurance_Company.value,
      PREMIUM: formRef.current.PREMIUM.value,
      Gross_Premium: formRef.current.Gross_Premium.value,
      Reason: formRef.current.Reason.value,
    };
    handleFormSubmit(formData);
    // handleModalClose();
  };

  return (
    <Modal
      title="Add new Request"
      action="add"
      actionHandler={handleActionClick}
      cancelHandler={handleActionCancel}
      handleModalClose={handleModalClose}
    >
      <div className="modal_content form_modal">
        <form ref={formRef}>
          <label htmlFor="Employee_Id">
            <span>Employee Id</span>
            <input type="text" name="Employee_Id" id="Employee_Id" required />
          </label>
          <label htmlFor="Insurance_Type">
            <span>Insurance Type</span>
            <select name="Insurance_Type" id="Insurance_Type">
              <option value="">-</option>
              {options.insuranceType.map((value) => (
                <option value={value} key={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="Department">
            <span>Department</span>
            <select name="Department" id="Department" required>
              {options.department.map((value) => (
                <option value={value} key={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="Type_of_Leave">
            <span>Type of Leave</span>
            <select name="Type_of_Leave" id="Type_of_Leave" required>
              {options.typeOfLeave.map((value) => (
                <option value={value} key={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="Start_Date">
            <span>Start Date</span>
            <input type="date" name="Start_Date" id="Start_Date" required />
          </label>
          <label htmlFor="End_Date">
            <span>End Date</span>
            <input type="date" name="End_Date" id="End_Date" required />
          </label>
          <label htmlFor="Car_Number">
            <span>Car Number</span>
            <input type="text" name="Car_Number" id="Car_Number" />
          </label>
          <label htmlFor="Insurance_Company">
            <span>Insurance Company</span>
            <select name="Insurance_Company" id="Insurance_Company">
              <option value="">-</option>
              {options.insuranceCompany.map((value) => (
                <option value={value} key={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="PREMIUM">
            <span>Premium</span>
            <input type="text" name="PREMIUM" id="PREMIUM" />
          </label>
          <label htmlFor="Gross_Premium">
            <span>Gross Premium</span>
            <input type="text" name="Gross_Premium" id="Gross_Premium" />
          </label>
          <label htmlFor="Reason">
            <span>Reason</span>
            <input type="text" name="Reason" id="Reason" />
          </label>
        </form>
      </div>
    </Modal>
  );
}

export default AddModal;
