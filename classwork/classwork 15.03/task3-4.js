var workWithUser =    // прототип для работы с пользователями
{
   getAge: function() { return this.age},
   getName: function() { return this.name},
   changeName: function(a) { this.name = a; return this.name},
   changeAge: function(a) {this.age = a; return this.age}   
}
var workWithEmployee =   // прототип для работы с работниками
{
  getJobTitle: function() { return this.jobTitle},
  getSalary: function() {return this.salary},
  promote: function(a,b){ this.jobTitle = a; this.salary = b; return (this.jobTitle,this.salary)}
}
workWithEmployee.__proto__  = workWithUser // задаем методы от пользователя

// создаем пользователей и устанавливаем их прототипы
var obj1 = {age: 23, name:'john',jobTitle: 'slave', salary: 10}
obj1.__proto__ = workWithEmployee
var obj2 = {age: 21, name: 'petr',jobTitle: 'slave',salary: 20}
obj2.__proto__ = workWithEmployee
var obj3 = {age: 12, name: 'vasa', jobTitle: 'director', salary: 100000000}
obj3.__proto__ = workWithEmployee
var obj4 = {age: 19, name: 'Ann', jobTitle: 'slave', salary: 15}
obj4.__proto__ = workWithEmployee

obj1.changeName('Mary') // меняем 1ому объекту имя на Mary

obj2.changeAge(30) // меняем 2ому объекту возраст на 30

obj3.promote('Senior Developer', 100500) // продвигаем 3его объекта по должности
