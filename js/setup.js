"use strict";

var KEYCODE_ENTER = 13;
var KEYCODE_ESC = 27;

var setup = document.querySelector (".setup");
var setupClose = document.querySelector(".setup-close");
var setupOpen = document.querySelector(".setup-open-icon");

/*
начало открытия и закрытие меню персонажа
*/

var onPopupEscPress = function (evt) {
  if (evt.keyCode === KEYCODE_ESC) {
    setup.classList.add ("hidden"); // через classList добавляем класс hidden
  }
};

var openPopup = function () {
  setup.classList.remove ("hidden"); // через classList удаляем класс hidden
  document.addEventListener("keydown", onPopupEscPress);
}

var closePopup = function () {
  setup.classList.add ("hidden"); // через classList добавляем класс hidden
  document.removeEventListener("keydown", onPopupEscPress);
}

// открытие меню персонажа через клик по крестику
setupOpen.addEventListener("click", function () {
  openPopup();
});

// открытие меню персонажа через enter по крестику
setupOpen.addEventListener("keydown", function (evt) {
  if (evt.keyCode === KEYCODE_ENTER) {
    openPopup();
  }
});

// закрытия меню персонажа через клику по крестику
setupClose.addEventListener("click", function () {
  closePopup();
});

// закрытия меню персонажа через enter по крестику
setupClose.addEventListener("keydown", function (evt) {
  if (evt.keyCode === KEYCODE_ENTER) {
    closePopup();
  }
});

// если фокус находится на форме ввода имени, то окно закрываться не должно
var enterName = document.querySelector(".setup-user-name");

// валидация ввода имени персонажа
var userEnterName = document.querySelector(".setup-user-name");
userEnterName.addEventListener("invalid", function (evt) {
  if (userEnterName.validity.tooShort) {
    userEnterName.setCustomValidity("Имя должно состоять минимум из 2-х символов");
  } else if (userEnterName.validity.tooLong) {
    userEnterName.setCustomValidity("Имя не должно превышать 25-ти символов");
  } else if (userEnterName.validity.valueMissing) {
    userEnterName.setCustomValidity("Необходимо заполнить поле");
  } else {
    userEnterName.setCustomValidity("");
  }
});

/*
конец открытия и закрытие меню персонажа
*/

document.querySelector(".setup-similar").classList.remove("hidden"); // показываем блок похожих персонажей
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

var COAT_COLORS = [
  "rgb(241, 43, 107)",
  "rgb(241, 43, 107)",
  "rgb(146, 100, 161)",
  "rgb(56, 159, 117)",
  "rgb(215, 210, 55)",
  "rgb(0, 0, 0)"
];

var EYES_COLORS = [
  "black",
  "red",
  "blue",
  "yellow",
  "green"
];

var FIREBALL_COLORS = [
  "#ee4830",
  "#30a8ee",
  "#5ce6c0",
  "#e848d5",
  "#e6e848"
];

// рагдомная генерация данных персонажа
var generateDataPerson = function (array) {
  var randomNameNumber = Math.floor(Math.random() * array.length);
  return array[randomNameNumber];
}

// массив персонажей
var wizards = [
  {
    name: generateDataPerson(WIZARD_NAMES),
    familys: generateDataPerson(WIZARD_FAMILYS),
    coatColor: generateDataPerson(COAT_COLORS),
    eyesColor: generateDataPerson(EYES_COLORS)
  },
  {
    name: generateDataPerson(WIZARD_NAMES),
    familys: generateDataPerson(WIZARD_FAMILYS),
    coatColor: generateDataPerson(COAT_COLORS),
    eyesColor: generateDataPerson(EYES_COLORS)
  },
  {
    name: generateDataPerson(WIZARD_NAMES),
    familys: generateDataPerson(WIZARD_FAMILYS),
    coatColor: generateDataPerson(COAT_COLORS),
    eyesColor: generateDataPerson(EYES_COLORS)
  },
  {
    name: generateDataPerson(WIZARD_NAMES),
    familys: generateDataPerson(WIZARD_FAMILYS),
    coatColor: generateDataPerson(COAT_COLORS),
    eyesColor: generateDataPerson(EYES_COLORS)
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

similarListElement.appendChild(fragment); // добавляем в список похожих персонажей (appendChild)

// изменение цвета мантии персонажа по нажатию
var setupWizardCoat = document.querySelector(".wizard-coat");
setupWizardCoat.onclick = function () {
  setupWizardCoat.style.fill = generateDataPerson(COAT_COLORS);
};

// изменение цвета глаз персонажа по нажатию
var setupWizardEyes = document.querySelector(".wizard-eyes");
setupWizardEyes.onclick = function () {
  setupWizardEyes.style.fill = generateDataPerson(EYES_COLORS);
};

// изменение цвета fireball-a персонажа по нажатию
var setupFireballColors = document.querySelector(".setup-fireball-wrap");
setupFireballColors.onclick = function () {
  setupFireballColors.style.backgroundColor = generateDataPerson(FIREBALL_COLORS);
};
