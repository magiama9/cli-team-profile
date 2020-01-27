class Employee {
  // Parent Class of Employee
  constructor(name, id, title) {
    this.employeeName = name;
    this.id = id;
    this.title = title;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  // Email is name@company.com
  getEmail() {
    let email = `${this.employeeName}@company.com`;
    return email;
  }

  getRole() {
    return "Employee";
  }
}

class Manager extends Employee {
  // Manager Class
  constructor(name, id, title, officeNum) {
    // Pulls in super class
    super(name, id, title);
    this.officeNum = officeNum;
  }

  getRole() {
    return "Manager";
  }
}

class Engineer extends Employee {
  // Engineer Class
  constructor(name, id, title, github) {
    // Pulls in super class
    super(name, id, title);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

class Intern extends Employee {
  // Intern Class
  constructor(name, id, title, school) {
    // Pulls in super class
    super(name, id, title);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = { Employee, Manager, Engineer, Intern };
