$(function(){
  $('#submit').click(function(){
    var regexNumber
    var firstGrade = $('#noteun').val();
    var secondGrade = $('#notedeux').val();
    var thridGrade = $('#notetrois').val();
    var fourthGrade = $('#notequatre').val();
    var fifthGrade = $('#notecinq').val();

    var sum = parsefloat(firstGrade) + parsefloat(secondGrade) + parsefloat(thridGrade) + parsefloat(fourthGrade) + parsefloat(fifthGrade);
    var average = sum / 5;
console.log(firstGrade);
    if(average >= 0 && average < 10){
    alert('Votre moyenne est: ' + average + ' En dessous de la moyenne.');
    }
    if(average >=10 && average < 13){
    alert('Votre moyenne est: ' + average + ' Moyen');
    }
    if(average >= 13 && average < 16){
    alert('Votre moyenne est: ' + average + ' Bien');
    }
    if(average >= 16 && average < 20){
    alert('Votre moyenne est: ' + average + ' Très bien.');
    }
    if(average == 20){
    alert('Votre moyenne est: ' + average + ' Excellent');
  }
  });
});
