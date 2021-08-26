# homework5
buttons
Задача 1
Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал
элемент с id="hide".
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
</head>
<body>
    <input type="button" id="hider" value="Нажмите, чтобы спрятать текст"/>
    <div id="hide">Текст</div>
<script>
    /* ваш код */
</script>
</body>
</html>

Задача 2
Создайте кнопку, при клике на которую, она будет скрывать сама себя.

Задача 3
Есть список сообщений. Добавьте каждому сообщению по кнопке для его
скрытия. Картинка для кнопки удаления:
<!DOCTYPE HTML>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="messages.css">
    <meta charset="utf-8">
    <style>
        body {
            margin: 10px auto;
            width: 470px;
        }
        h3 {
            margin: 0;
            padding-bottom: .3em;
            font-size: 1.1em;
        }
        p {
            margin: 0;
            padding: 0 0 .5em;
        }
        .pane {
            background: #edf5e1;
            padding: 10px 20px 10px;
            border-top: solid 2px #c4df9b;
        }
    </style>
</head>

<body>

<div>
    <div class="pane">
        <h3>Лошадь</h3>
        <p>Домашняя лошадь — животное семейства непарнокопытных,
одомашненный и единственный сохранившийся подвид дикой лошади,
вымершей в дикой природе, за исключением небольшой популяции лошади
Пржевальского.</p>
    </div>
    <div class="pane">
        <h3>Осёл</h3>
        <p>Домашний осёл или ишак — одомашненный подвид дикого осла,
сыгравший важную историческую роль в развитии хозяйства и культуры
человека. Все одомашненные ослы относятся к африканским ослам.</p>
    </div>
    <div class="pane">
        <h3>Корова, а также пара слов о диком быке, о волах и о тёлках. </h3>
        <p>Коро?ва — самка домашнего быка, одомашненного подвида
дикого быка, парнокопытного жвачного животного семейства полорогих.
Самцы вида называются быками, молодняк — телятами, кастрированные
самцы — волами. Молодых (до первой стельности) самок называют
тёлками.</p>
    </div>
</div>

</body>
</html>

Задача 4
Вот пример HTML-файла с кнопкой отправки. Теперь измените стиль текста
абзаца с помощью кода javascript.
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>JS DOM paragraph style</title>
</head>
<body>
<p id ='text'>JavaScript Exercises</p>
<div>
<button id="jsstyle"
onclick="js_style()">Style</button>
</div>
</body>
</html>
При нажатии на кнопку шрифт, размер шрифта и цвет текста абзаца будут изменены.

Задача 5
Напишите функцию JavaScript, чтобы получить значения имени и фамилии в
следующей форме
<!DOCTYPE html>
<html><head>
<meta charset=utf-8 />
<title>Return first and last name from a form - w3resource</title>
</head><body>
<form id="form1" onsubmit="getFormvalue()">
First name: <input type="text" name="fname" value="David"><br>
Last name: <input type="text" name="lname" value="Beckham"><br>
<input type="submit" value="Submit">
</form>
</body>
</html>

Задача 6
Напишите функцию на JavaScript, чтобы установить цвет фона абзаца.

Задача 7
Напишите функцию javascript которая при нажатии на кнопку скрывает
параграф, при втором нажатии показывает
