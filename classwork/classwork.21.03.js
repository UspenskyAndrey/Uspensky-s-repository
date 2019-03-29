function User(name, age) {           // функция коструктор для User
    this.name = name;
    this.age = age;
    this.getAge = function() {
        return this.age;
    };
    this.getName = function() {
        return this.name;
    };
    this.changeName = function(a) {
        this.name = a;
    };
    this.changeAge = function(a) {
        this.age = a;
    };
}
function Employee(jobTitle, salary) {          // функция-коструктор для Employee
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.fired = false;
    this.getJobTitle = function() {
        return this.jobTitle;
    };
    this.getSalary = function() {
        return this.salary;
    };
    this.isFired = function() {
        if (this.fired) {
            return true;
        }
    };
    this.promote = function(a, b) {
        this.jobTitle = a;
        this.salary = b;
    };
    this.setFired = function() {
        this.fired = true; 
    }
}
// создаем массив пользователей
var arrOfUsers = [user1 = new User('Paul', 21), user2 = new User('John', 20), 
user3 = new User('Vas', 18), user4 = new User('Alex', 25), 
user5 = new User('Kate', 25), user6 = new User('Mary', 16)]
// создаем массив рабочих
var arrOfEmployee = [employee1 = new Employee('slave', 100), 
employee2 = new Employee('slave', 101), employee3 = new Employee('worker', 500),
employee4 = new Employee('director', 100500), employee5 = new Employee('junior', 200),
employee6 = new Employee('teacher', 20)]
// находим 'Mary'
arrOfUsers.forEach(function(item){
    if (item.name === 'Mary') {
        console.log(item);
    }
})
// находим всех пользователей, кто моложе 30
arrOfUsers.forEach(function(item) {
  if (item.age < 30) {
      console.log(item);
  }  
})
// женим John на Mary
arrOfUsers.forEach(function(item){
   if ((item.name === 'John') || (item.name === 'Mary')) {
       item.name = 'John + Mary';
   }
})
// функция для подсчета средней зарплаты работников
var avSalary = function() {
    var x = arrOfEmployee.map(function(item) {
        return item.salary;
    });
    x = x.reduce(function(sum, cur) {
        return sum + cur;
    });
    return x/arrOfEmployee.length;
}
// выводим список всех должностей
arrOfEmployee.forEach(function(item){
    console.log(item.jobTitle);
})
// функция для поиска самой высокой и низкой з/п
var maxMinSal = function() {
    var max = employee1.salary, 
    min = employee1.salary;
    arrOfEmployee.forEach(function(item){
        if (min > item.salary) {min = item.salary};
        if (max < item.salary) {max = item.salary};
    })
    return 'max: '+ max +', min: ' + min;
}
// функция для поиска и увольнения директора
var findAndFire = function() {
    arrOfEmployee.forEach(function(item) {
        if (item.jobTitle === 'director') {
            item.setFired();
        }
    })
}