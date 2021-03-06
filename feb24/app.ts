class Employee {

    constructor(

        public EmpNo:number,

        public EmpName: string,

        public DeptName: string,

        public Salary: number 

    ){}

}



class EmployeeLogic {

    private Employees: Array<Employee>;

    constructor(){

        this.Employees = new Array<Employee>();

        this.Employees.push(new Employee(101, 'Manisha' ,'IT', 11000));

        this.Employees.push(new Employee(102, 'Sangam' ,'Sales', 12000));

        this.Employees.push(new Employee(103, 'Vaibhav' ,'Nevy', 13000));

        this.Employees.push(new Employee(104, 'Sweety' ,'DM', 14000));

    }


    getEmployees(dname?:string): Array<Employee> {

       if(dname === undefined) return this.Employees;



       return this.Employees.filter((e,i)=>{

           return e.DeptName === dname;

       })

    }



    addEmployee(emp:Employee):Array<Employee> {

        this.Employees.push(emp);

        return this.Employees;

    }

}



let objEmp:EmployeeLogic = new EmployeeLogic();



console.log(`All Employees: ${JSON.stringify(objEmp.getEmployees(undefined))}`);
console.log("----------------------------------------------------------------------------");


console.log(`All Employees of Specific DeptName : ${JSON.stringify(objEmp.getEmployees('IT'))}`);
console.log("----------------------------------------------------------------------------");

console.log(`All Employees with newly added: ${JSON.stringify(objEmp.addEmployee(new Employee(106, 'Subhash', 'IT', 35233)))} `);
console.log("----------------------------------------------------------------------------");
