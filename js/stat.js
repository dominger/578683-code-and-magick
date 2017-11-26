"use strict";

window.renderStatistics = function(ctx, names, times){

 //построение фигуры
 ctx.shadowColor = "rgba(0, 0, 0, 0.7)"; //тень
 ctx.shadowOffsetY = 10; //сдвиг тени по X
 ctx.shadowOffsetX = 10; //сдвиг тени по Y
 ctx.fillStyle = "white"; //заливка фигуры
 ctx.fillRect(100, 10, 420, 270); //построение

 //редактирование текста
 ctx.font = '16px PT Mono';
 ctx.fillText("Ура вы победили!", 120, 40); //"текст, X, Y"
 ctx.fillText("Список результатов:", 120, 60); //"текст, X, Y"

 //нахождение максимальных результатов
 var max = -1;
 for(var i = 0; i < times.length; i++){
   var time = times[i];
   if(time > max){
     max = time;
   }
 }

 var indent = 115; //сдвиг
 var initialX = 120; //расположение по X
 var initialY = 10; //расположение по Y
 var histogramHeight = 150; //высота гистограммы
 var histogramWidth = 40; //ширина колонки
 var step = histogramHeight / (max - 0); //пропорция по высоте

 for(var i = 0; i < times.length; i++){
   ctx.shadowColor = "rgba(0, 0, 0, 0)"; //убрать тень у диаграмм

   var randomNumber = Math.random().toFixed(1); //случайное число с округлением
   if(names[i] == "Вы"){
     ctx.fillStyle = "rgba(255, 0, 0, 1)";
     ctx.fillRect(initialX + indent * i, 270 - times[i] * step - initialY,
       histogramWidth, times[i] * step);
   }else{
     ctx.fillStyle = "rgba(0, 0, 255, " + randomNumber + ")";
     ctx.fillRect(120 + indent * i, 270 - times[i] * step - initialY,
       histogramWidth, times[i] * step);
   }
     ctx.fillStyle = "black";
     ctx.fillText(names[i], initialX + indent * i,
       270 - initialY + 15);

   ctx.fillText(Math.round(times[i]), initialX + indent * i,
     270 - times[i] * step - initialY - 10);
 }
};



