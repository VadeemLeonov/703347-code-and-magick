'use strict';

var names = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
var secondNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

// Функция получающая случайный элемент массива

var getRandomElement = function (array) {
  var element = Math.floor(Math.random() * array.length);
  return array[element];
};


// Показываем блок setup

var setupSimilar = document.querySelector('.setup-similar');

var setup = document.querySelector('.setup');
var setupOpen = function () {
  setup.classList.remove('hidden');
  setupSimilar.classList.remove('hidden');
};

setupOpen();

// Создаем массив в котором будут данные персонажей

var wizards = [];

var getWizards = function (quantity) {
  for (var i = 1; i < quantity + 1; i++) {
    var object = {
      name: getRandomElement(names) + getRandomElement(secondNames),
      coatColor: getRandomElement(coatColors),
      eyesColor: getRandomElement(eyesColor)
    };

    wizards.push(object);
  }
};

getWizards(4);

// Создаем элементы для сгенерированных волшебников

var wizardListElement = document.querySelector('.setup-similar-list');

var createWizardElement = function (number) {

  var fragment = document.createDocumentFragment();
  var wizardSimilar = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  for (var i = 0; i < number; i++) {

    var wizardElement = wizardSimilar.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

    fragment.appendChild(wizardElement);
  }
  wizardListElement.appendChild(fragment);
};

createWizardElement(4);
