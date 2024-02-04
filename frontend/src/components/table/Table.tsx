import "./table.css";
import { LeaveRequestType } from "../../types/LeaveRequest";
import { DeleteIcon, EditIcon } from "../Icons";
import { ModalsEnum } from "../../pages/dashboard/page";

function Table({
  data,
  handleModalOpen,
}: {
  data: LeaveRequestType[];
  handleModalOpen: (modalName: ModalsEnum) => void;
}) {
  return (
    <table>
      <thead>
        <tr>
          <th className="big" key="ID">
            ID
          </th>
          <th key="Employee_Id">Employee ID</th>
          <th key="Insurance_Type">Insurance Type</th>
          <th key="Department">Department</th>
          <th className="med" key="Type_of_Leave">
            Type of Leave
          </th>
          <th className="med" key="Start_Date">
            Start Date
          </th>
          <th className="med" key="End_Date">
            End Date
          </th>
          <th className="med" key="Car_Number">
            Car Number
          </th>
          <th className="big" key="Insurance_Company">
            Insurance Company
          </th>
          <th className="med" key="PREMIUM">
            Premium
          </th>
          <th className="med" key="Gross_Premium">
            Gross Premium
          </th>
          <th className="big" key="Reason">
            Reason
          </th>
          <th className="small" key="Edit">
            {" "}
          </th>
          <th className="small" key="Delete">
            {" "}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((d) => (
          <tr key={d.ID}>
            <td className="big">{d.ID}</td>
            <td>{d.Employee_Id}</td>
            <td>{d.Insurance_Type}</td>
            <td>{d.Department}</td>
            <td className="med">{d.Type_of_Leave}</td>
            <td className="med">{d.Start_Date}</td>
            <td className="med">{d.End_Date}</td>
            <td className="med">{d.Car_Number}</td>
            <td className="big">{d.Insurance_Company}</td>
            <td className="med">{d.PREMIUM}</td>
            <td className="med">{d.Gross_Premium}</td>
            <td className="big">{d.Reason}</td>
            <td className="small">
              <button onClick={() => handleModalOpen("edit")}>
                <EditIcon />
              </button>
            </td>
            <td className="small">
              <button onClick={() => handleModalOpen("confirm")}>
                <DeleteIcon />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
