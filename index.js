// Write your solution in this file!
  

  const employee = {
    name: "Sam"
  };
  
  // 1. 
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee, 
      [key]: value 
    };
  }
  
  // 2. 
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; 
    return employee; 
  }
  
  // 3. 
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }; 
    delete newEmployee[key];
    return newEmployee;
  }
  
  // 4. 
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; 
    return employee;
  }
  