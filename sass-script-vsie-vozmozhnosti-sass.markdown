---
title: SASS Script - Все возможности SASS
date: 2022-04-27 13:26:00 Z
---

# SASS Script - Все возможности SASS
SASS позволяет сделать все что угодно, экономя при этом время разработчика. Он предоставляет не только красивый синтаксис, но еще и использовать if, while и тп. Сейчас я о них и расскажу.

## @if / @else if / @else
Вы можете сравнивать переменные или просто числа, если условие выполнится, то к элементу добавятся определенные стили.
Пример:
```scss
$color: 2;
p {
  @if color == 0 {
    color: #000;
  }
  @else if color == 1 {
    color: #111;
  }
  // Выполнится это условие
  @else {
    color: #fff;
  }
}
```
Css:
```css
p {
  color: #fff;
}
```

## @for
Вы можете применить стили к нумерованным блокам, используя цикл for, вместе с ключевым словом through(включительно) и to(исключительно) например к item-1, item-2 и item-3:
```scss 
@for $i from 1 through 3 {
  .item-#{$i} { 
    width: #{2 * $i}px; 
  }
}
```
Css:
```css
.item-1 {
  width: 2px;
}
.item-2 {
  width: 4px;
}
.item-3 {
  width: 6px;
}
```

## @each
Вы можете применить одинаковые правила к классам, построенным по одинаковой конструкции, используя их название, например:
```scss
@each $animal in puma, sea-slug, egret, salamander {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}
```
```css
.puma-icon {
  background-image: url('/images/puma.png');
}
.sea-slug-icon {
  background-image: url('/images/sea-slug.png'); 
}
.egret-icon {
  background-image: url('/images/egret.png'); 
}
.salamander-icon {
  background-image: url('/images/salamander.png'); 
}
```
Или можно использовать сразу списки значений:
```scss
@each $class, $width, $color in (first, second), (100px, 20px), (#000, #333) {
  .#{$class} {
    width: $width;
    color: $color;
  }
}
```
Вот что будет в css
```css
.first {
  width: 100px;
  color: #000;
}
.second {
  width: 20px;
  color: #333;
}
```

## @while
Вы можете использовать цикл while, для выставления отступов по порядку, например:
```scss
$i: 6;
@while $i > 0 {
  .item-#{$i} { width: 2em * $i; }
  $i: $i - 2;
}
```
Вот что будет в css:
```css
.item-6 {
  width: 12em; 
}

.item-4 {
  width: 8em; 
}

.item-2 {
  width: 4em; 
}
```

## @warn и @error
Если вам необходимо предупредить пользователя о том, что он воспользовался вашим миксином как-то не так, вы можете использовать warn. К примеру, у нас есть миксин для задания цвета блока по цифре:
```scss 
$first-color: 1;

@mixin color-block($color) {
  @if $color == 1 {
    color: #fff;
  }
  @if $color == 2 {
    color: #000;
  }
  @else {
    @warn "Не подходящий цвет!";
  }
}
```
В консоль компилятора будет выведено предупреждение, но что если это очень важно и ошибиться совсем нельзя? Используйте error:
```scss 
$first-color: 3;

@mixin color-block($color) {
  @if $color == 1 {
    color: #fff;
  }
  @if $color == 2 {
    color: #000;
  }
  @else {
    @error"Не подходящий цвет!";
  }
}
```
Теперь наш scss файл даже не обработается, если указан неправильный цвет