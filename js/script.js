"use strict";
// Создать класс Employee у которого будут следующие поля (задаются через конструктор):

// firstName - тип string
// lastName - тип string
// age - тип number
// jobPosition - тип string
// salary - тип number


// К данному классу, также необходимо добавить:

// “геттер” fullName - который будет выводить полное имя (комбинация firstName и lastName)
// добавить статический свойство - "кол-во дней отпуска в году" = 18
// добавить метод, который будет считать годовую зарплату сотрудника (salary умножить на кол-во месяцев в году)


// Создать 2 экземпляра этого класса (по аналогии с cat1, cat2 - как делали на занятии).

class Employee {

    static daysOfVacation = 18;

    constructor(firstName, lastName, age, jobPosition, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.jobPosition = jobPosition;
        this.salary = salary;
    }

    calculateYearSalary() {
        console.log(this.salary * 12);
    }

    get fullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}


const employeeSecond = new Employee ("Oleg", "Nikolaenko", 26, "director", 25000);
const employeeFirst = new Employee ("Arthur", "Shanin", 28, "salesman", 15000);

console.log(employeeFirst);
console.log(employeeSecond);
employeeSecond.calculateYearSalary();
employeeFirst.calculateYearSalary();



