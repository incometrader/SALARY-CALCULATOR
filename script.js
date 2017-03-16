window.onload = function() {
  const worker = {
    Interns: 20,
    Associates: 40,
    Managers: 60,
    Executives: 100,
    Directors: 200,
  };

  const salary = {
    basic: 1000,
    housing: 200,
    meal: 150,
    utility: 100,
    transportation: 125,
    medical: 75,
    total: 1650,
  };

  function displaySalary() {
    const select = document.getElementById('select');
    const employee = select.options[select.selectedIndex].text;
    console.log(employee);
    const salaryArr = Object.keys(salary);
    for (let salaryItem of salaryArr) {
      let content = document.getElementById(salaryItem);
      content.textContent = worker[employee] * salary[salaryItem];
    }
    // let content = document.getElementById('basic');
    // content.textContent = worker[employee] * salary.basic;
    const employeeHeader = document.getElementById('employee_header');
    employeeHeader.textContent = employee;
  }

  const formData = document.getElementById('employee_form');
  formData.addEventListener('submit', (event) => {
    event.preventDefault();
    displaySalary();
  });
};
function dispaly() {
    var e = document.getElementById('select');
    var employee =  e.options[e.selectedIndex].value;
    if (employee === " "){
      document.getElementById("view-report").style.display = "none";
      document.getElementById("header").style.display = "none";
    }
    else{
      document.getElementById("view-report").style.display = "inline";
      document.getElementById("header").style.display = "inline";
    }
  }





