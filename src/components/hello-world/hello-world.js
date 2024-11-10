import hwStyles from "./hello-word.module.css";

interface EmployeeModel {
  id: number;
  EmpNum: string;
  EmpName: string;
  HireDate: Date;
  Salary: number;
  Position: string;
  DepNo: string;
  HeadNo: string;
}

const HelloWorld = (props: EmployeeModel) => {
  return (
    <h1 className={hwStyles["text-red"]}>
      {props.EmpName || "No Employee Name"}
    </h1>
  );
};

export default HelloWorld;
