class Employee {
  // Parent Class of Employee
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.title = "Employee";
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  // Email is name@company.com
  getEmail() {
    return this.email;
  }

  getRole() {
    return this.title;
  }
}

class Manager extends Employee {
  // Manager Class
  constructor(name, id, email, officeNum) {
    // Pulls in super class
    super(name, id, email);
    this.title = "Manager";
    this.officeNumber = officeNum;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

class Engineer extends Employee {
  // Engineer Class
  constructor(name, id, email, github) {
    // Pulls in super class
    super(name, id, email);
    this.github = github;
    this.title = "Engineer";
  }
  getGithub() {
    return this.github;
  }
}

class Intern extends Employee {
  // Intern Class
  constructor(name, id, email, school) {
    // Pulls in super class
    super(name, id, email);
    this.school = school;
    this.title = "Intern";
  }

  getSchool() {
    return this.school;
  }
}

module.exports = { Employee, Manager, Engineer, Intern };
