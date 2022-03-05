var start = 'Здравствуй дорогой друг, сегодня мы проверим твои знания по математике. Здесь работает 5-ти бальная система. Готов?'
alert(start)

var chet = 0

var name = prompt('Сначало, давай выясним как тебя зовут?')
console.log('Имя пользователя: ' + name);

var parol = +prompt('Придумайте пароль: ')
console.log('Пароль ' + name + ': ' + parol );

var age = +prompt('Сколько тебе лет?')
console.log('Возраст ' + name + ': ' + age + ' лет');

var prav = 'Правильный ответ: '
var pol = ' (ответ ' + name + ': '
var o = ')'

var vop1 = '(12+48)/10='
var ot1 = (12+48)/10
var num1 = +prompt('Первый вопрос: ' + vop1)
console.log(prav + vop1 + ot1 + pol + num1 + ')');

var vop2 = '(5*4+23)-3='
var ot2 = (5*4+23)-3
var num2 = +prompt('Второй вопрос: ' + vop2)
console.log(prav + vop2 + ot2 + pol + num2 + ')');


var vop3 = '43+(25%3)='
var ot3 = 43+(25%3)
var num3 = +prompt('Третий вопрос: ' + vop3)
console.log(prav + vop3 + ot3 + pol + num3 + ')');


var vop4 = '(89-24-56)/3*4='
var ot4 = (89-24-56)/3*4
var num4 = +prompt('Четвертый вопрос: ' + vop4)
console.log(prav + vop4 + ot4 + pol + num4 + ')');


var vop5 = '2+2*2='
var ot5 = 2+2*2
var num5 = +prompt('Пятый вопрос: ' + vop5)
console.log(prav + vop5 + ot5 + pol + num5 + ')');

if (num1 == ot1) {
  var chet = chet + 1
}
if (num2 == ot2) {
  var chet = chet + 1
}
if (num3 == ot3) {
  var chet = chet + 1
}
if (num4 == ot4) {
  var chet = chet + 1
}
if (num5 == ot5) {
  var chet = chet + 1
}

console.log('Счёт ' + name + ': ' + chet);

var otvet1 = 'Правильный ответ: ' + vop1 + ot1
var otvet2 = 'Правильный ответ: ' + vop2 + ot2
var otvet3 = 'Правильный ответ: ' + vop3 + ot3
var otvet4 = 'Правильный ответ: ' + vop4 + ot4
var otvet5 = 'Правильный ответ: ' + vop5 + ot5

alert(otvet1 + ' (ваш ответ: ' + num1 + o)
alert(otvet2 + ' (ваш ответ: ' + num2 + o)
alert(otvet3 + ' (ваш ответ: ' + num3 + o)
alert(otvet4 + ' (ваш ответ: ' + num4 + o)
alert(otvet5 + ' (ваш ответ: ' + num5 + o)

alert('Ваш счёт: ' + chet)

if (chet == 5) {
  var text = ' Вауууу, да ты крутой!!!'
  alert(text)
}

if (chet == 4) {
  var text = ' Отлично, но есть ошибки!'
  alert(text)
}

if (chet == 3) {
  var text = ' В следующий раз постарайся получше!'
  alert(text)
}

if (chet == 2) {
  var text = ' Советую повторить темы...'
  alert(text)
}

if (chet == 1) {
  var text = ' Ну хотя бы что-то.'
  alert(text)
}

if (chet == 0) {
  var text = ' Мдааааа....'
  alert(text)
}

alert('Думаю, пора отдохнуть и поиграть!')

var sek = +prompt('Введите время в секундах:')
console.log('Время в секундах: ' + sek);

min = sek/60
console.log('Время в минутах: ' + min);

if (min >= 5) {
  alert(sek + ' секунд = ' + min + ' минут')
}

if (min <= 4) {
  alert(sek + ' секунд = ' + min + ' минуты')
}

hour = sek/3600
console.log('Время в часах: ' + hour);

if (hour >= 5) {
  alert(sek + ' секунд = ' + hour + ' часов')
}

if (hour <= 4) {
  alert(sek + ' секунд = ' + hour + ' часа')
}

day = sek/86400
console.log('Время в днях: ' + day);

if (day >= 5) {
  alert(sek + ' секунд = ' + day + ' дней')
}

if (day <= 4) {
  alert(sek + ' секунд = ' + day + ' дня')
}

year = day/365
console.log('Время в годах: ' + year);

if (year >= 5) {
  alert(sek + ' секунд = ' + year + ' лет')
}

if (year <= 4) {
  alert(sek + ' секунд = ' + year + ' года')
}

alert('Ну что-ж, думаю мы хоршо постарались на сегодня!')

alert('Хотите посмотреть свои результаты?')

var porol = +prompt('Введите пароль:')

if (porol == parol) {
  alert('Имя пользователя: ' + name)
  alert('Возраст пользователя: ' + age + ' лет')
  alert('Счёт в игре: ' + chet + ' баллов')
  alert('Пароль: ' + parol)
} 

if (porol != parol) {
  console.log('Пароль неверный (попытка: 1)');
  alert('Пароль неверный')
  var porol = +prompt('Попробовать ещё раз (попыток осталось: 2)')
  if (porol == parol) {
    alert('Имя пользователя: ' + name)
    alert('Возраст пользователя: ' + age + ' лет')
    alert('Счёт в игре: ' + chet + ' баллов')
    alert('Пароль: ' + parol)
  }  
  if (porol != parol) {
      console.log('Пароль неверный (попытка: 2)');
      alert('Пароль неверный')
      var porol = +prompt('Попробовать ещё раз (попыток осталось: 1)')
      if (porol == parol) {
        alert('Имя пользователя: ' + name)
        alert('Возраст пользователя: ' + age + ' лет')
        alert('Счёт в игре: ' + chet + ' баллов')
        alert('Пароль: ' + parol)
      } 
      if (porol != parol) {
        console.log('Пользователь заблокирован');
        alert('Вы заблокированы')
      }
  }
}

