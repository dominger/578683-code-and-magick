"use strict";

var characterMenu = document.querySelector(".setup");
characterMenu.classList.remove("hidden"); //через classList удаляем класс hidden

document.querySelector(".setup-similar").classList.remove("hidden");

var similarListElement = document.querySelector(".setup-similar-list"); //список похожих волшебников
var similarWizardTemplate = document.querySelector("#similar-wizard-template")
  .content; //копируем содержимое шаблона template, сам шаблон
          // никак не отрисовывается в DOM дереве

var WIZARD_NAMES = [
  "Иван",
  "Хуан Себастьян",
  "Мария",
  "Кристоф",
  "Виктор",
  "Юлия",
  "Люпита",
  "Вашингтон"
];

var WIZARD_FAMILYS = [
  "да Марья",
  "Верон",
  "Мирабелла",
  "Вальц",
  "Онопко",
  "Топольницкая",
  "Нионго",
  "Ирвинг"
];

var COAT_COLOR = [
  "rgb(241, 43, 107)",
  "rgb(241, 43, 107)",
  "rgb(146, 100, 161)",
  "rgb(56, 159, 117)",
  "rgb(215, 210, 55)",
  "rgb(0, 0, 0)"
];

var EYES_COLOR = [
  "black",
  "red",
  "blue",
  "yellow",
  "green"
];

// функция получения случайного числа
function compareRandom(a, b) {
  return Math.random() - 0.5;
}

// функция (sort), перемешивает указанный массив
WIZARD_NAMES.sort(compareRandom);
WIZARD_FAMILYS.sort(compareRandom);
COAT_COLOR.sort(compareRandom);
EYES_COLOR.sort(compareRandom);

var wizards = [
  {
    name: WIZARD_NAMES[0],
    family: WIZARD_FAMILYS[0],
    /*coatColor: function() {
      for(var i = 0; i < COAT_COLOR.length; i++) {
        return COAT_COLOR[i];
      }
    }*/ //  ??? как быть с цветом мантий, если цветов меньше чем самих персонажей, а нам нужно случайный цвет,
            // как это через оюъект можно сделать ???
  },
  {
    name: WIZARD_NAMES[1],
    family: WIZARD_FAMILYS[1],
  },
  {
    name: WIZARD_NAMES[2],
    family: WIZARD_FAMILYS[2],
  },
  {
    name: WIZARD_NAMES[3],
    family: WIZARD_FAMILYS[3],
  },
  {
    name: WIZARD_NAMES[4],
    family: WIZARD_FAMILYS[4],
  },
  {
    name: WIZARD_NAMES[5],
    family: WIZARD_FAMILYS[5],
  },
  {
    name: WIZARD_NAMES[6],
    family: WIZARD_FAMILYS[6],
  },
  {
    name: WIZARD_NAMES[7],
    family: WIZARD_FAMILYS[7],
  }
];

for(var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true); //клонируем (cloneNode) содержимое
                                                            // шаблона, (true) - до самого конца
  wizardElement.querySelector(".setup-similar-label").textContent = wizards[i].name
                                                      + " " + wizards[i].family; // добавляем новые И + Ф

  wizardElement.querySelector(".wizard-coat").style.fill = COAT_COLOR[i];
  wizardElement.querySelector(".wizard-eyes").style.fill = EYES_COLOR[i];
  //wizardElement.querySelector(".wizard-coat").style.fill = wizards[i].coatColor();

  similarListElement.appendChild(wizardElement); // добавляем в список похожих персонажей (appendChild)

  if(i >= 3) { // ??? вопрос тут. Так он выводит 4 магов, а если бех такого условия, то ровно столько,
             // сколько длина объекта wizards, если не так, то как быть, как красивее ???
    break;
  }
}

