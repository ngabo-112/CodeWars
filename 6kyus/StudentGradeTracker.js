// reate a Student class.

// Properties:

// name
// grades (array)

// Methods:

// addGrade(grade)
// getAverage()

// Example:

// const student = new Student("Miguel");

// student.addGrade(80);
// student.addGrade(90);

// student.getAverage(); // 85
class StudentsInfo {
    constructor(name) {
        this.name = name;
        this.grades = [];
    }

    addGrade(grade) {
        this.grades.push(grade);
    }

    getAverage() {
        let sum = 0;

        for (const grade of this.grades) {
            sum += grade;
        }

        return sum / this.grades.length;
    }
}

const student=new StudentsInfo("Miguel");
student.addGrade(10);
console.log(student.getAverage());