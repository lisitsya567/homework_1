const student = "Лисиця Василий Евгеньевич"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

// Отсюда и ниже идет ваш код решения домашнего задания
// ...
let kom1 = prompt ('Введите реальный результат первой команды') // ввод данных счета
let kom2 = prompt ('Введите реальный результат второй команды') // ввод данных счета
let kom3 = prompt ('Введите предпологаемый результат первой команды') // ввод данных счета
let kom4 = prompt ('Введите предпологаемый результат второй команды') // ввод данных счет
let score_real = [kom1,kom2];
let score_expected = [kom3,kom4];
if
(kom1>kom2) {score_real=0} //cравнение результата
else if
(kom1==kom2) {score_real=1}
else
score_real=2
if
(kom3>kom4) {score_expected=0} // cравнение результата
else if
(kom3==kom4){score_expected=1}
else
score_expected=2
if (kom2==kom4,kom1==kom3)
{
    alert ('Счёт был угадан верно!')
}
else if (score_real==score_expected)
{
    alert ('Счёт не угадали, но исход угадали')
}
else
{
    alert ('Ни счёта, ни исхода не угадали')
}