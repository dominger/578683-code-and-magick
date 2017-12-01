"use strict";

var characterMenu = document.querySelector (".setup");
characterMenu.classList.remove ("hidden"); // через classList удаляем класс hidden

var similarListElement = document.querySelector (".setup-similar-list"); // список похожих волшебников
var similarWizardTemplate = document.querySelector("#similar-wizard-template").content.querySelector
                      (".setup-similar-item");// копируем содержимое шаблона template, сам шаблон
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

// функция генерации слуайных данных персонажа
var generateDataCharacter = function (arrayData) {
  var randomNumber = Math.floor(Math.random() * arrayData.length);
  return arrayData[randomNumber];
}

  var wizards = [
    {
      name: generateDataCharacter(WIZARD_NAMES),
      familys: generateDataCharacter(WIZARD_FAMILYS),
      coatColor: generateDataCharacter(COAT_COLOR),
      eyesColor: generateDataCharacter(EYES_COLOR)
    },
    {
      name: generateDataCharacter(WIZARD_NAMES),
      familys: generateDataCharacter(WIZARD_FAMILYS),
      coatColor: generateDataCharacter(COAT_COLOR),
      eyesColor: generateDataCharacter(EYES_COLOR)
    },
    {
      name: generateDataCharacter(WIZARD_NAMES),
      familys: generateDataCharacter(WIZARD_FAMILYS),
      coatColor: generateDataCharacter(COAT_COLOR),
      eyesColor: generateDataCharacter(EYES_COLOR)
    },
    {
      name: generateDataCharacter(WIZARD_NAMES),
      familys: generateDataCharacter(WIZARD_FAMILYS),
      coatColor: generateDataCharacter(COAT_COLOR),
      eyesColor: generateDataCharacter(EYES_COLOR)
    }
  ];

// заполнение блока DOM элементами на основе JS-объектов
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true); //клонируем (cloneNode) содержимое шаблона, (true) - до самого конца

  wizardElement.querySelector(".setup-similar-label").textContent = wizard.name
                                                        + " " + wizard.familys; // добавляем новые И + Ф
  wizardElement.querySelector(".wizard-coat").style.fill = wizard.coatColor; // добавляем цвет пальто
  wizardElement.querySelector(".wizard-eyes").style.fill = wizard.eyesColor; // добавляем цвет глаз

  return wizardElement;
}

var fragment = document.createDocumentFragment(); // контейнер, временная группировка элементов в document
                                                // после вставки элементов, контейнер createDocumentFragment удаляется
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i])); // вставка элементов в DOM
}

document.querySelector(".setup-similar").classList.remove("hidden"); // показываем блок похожих персонажей
similarListElement.appendChild(fragment); // добавляем в список похожих персонажей (appendChild)



