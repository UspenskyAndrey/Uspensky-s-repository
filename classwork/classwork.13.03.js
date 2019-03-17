var funccreate = function(a,b) { // функция создания объекта
        user = {
        name: a,
        age: b,
    }  
    return user
}
//Создаем массив пользователей
var arrOfUser = [user1={name:'Andrey',age:23},user2={name:'Petr',age:21},user3={name:'Dmitriy',age:25},
user4={name:'Vasiliy',age:27},user5={name:'Petrovich',age:22},user6={name:'Mary',age:19},user7={name:'John',age:70},]
// находим в массиве пользователея с age = 23
for (var member in arrOfUser)
{
      if (arrOfUser[member].age ==23)
     {
         checkMember = member
         console.log(arrOfUser[member])
     }
}
// меняем ему имя
arrOfUser[checkMember].name = 'Dron'
//устанавливаем возраст = 25
arrOfUser[checkMember].age = 25
//добавляем свойство Salary = 30000
arrOfUser[checkMember].Salary = 30000
//ищем в массиве пользователя с именем Mary
for (var newMember in arrOfUser)
{
      if (arrOfUser[newMember].name == 'Mary')
     {
         checkMember = newMember
         console.log(arrOfUser[newMember])
     }
}
//удаляем свойство age
delete arrOfUser[checkMember].age
//добавляем новое свойство husband
arrOfUser[checkMember].husband = 'Bob'