class Employee {
  // Parent Class of Employee
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.title = "Employee";
    this.email = email
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
    return "Employee";
  }
}

class Manager extends Employee {
  // Manager Class
  constructor(name, id, email, officeNum) {
    // Pulls in super class
    super(name, id, email);
    this.officeNumber = officeNum;
  }
  getOfficeNumber() {
    return this.officeNumber;
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
