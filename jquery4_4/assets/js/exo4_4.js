$(function(){
  $('#button').click(function(){
    var regexName = /^([A-Z]{1}[a-zÀ-ÖØ-öø-ÿ]+)([- ]{1}[A-Z]{1}[a-zÀ-ÖØ-öø-ÿ]+){0,1}$/;
    var regexDate = /^\d{4}[\-](0?[1-9]|1[012])[\-](0?[1-9]|[12][0-9]|3[01])$/;
    var regexPlace = /^[A-Z]{1}[a-zA-Zéèêàç\-']*/;
    var regexText =/^[A-Za-z0-9\-, À-ÖØ-öø-ÿ]+$/;

    var lastName = $('#lastName').val();
    var firstName = $('#firstName').val();
    var birthdate = $('#birthdate').val();
    var birthplace = $('#birthplace').val();
    var employment = $('#employment').val();
    var society = $('#society').val();

    // var regexName = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)$/;
    if (lastName.match(regexName) && firstName.match(regexName) && birthdate.match(regexDate) && birthplace.match(regexPlace) && employment.match(regexText) && society.match(regexText)){
      alert(lastName + firstName + ' né le ' + birthdate + ' à ' + birthplace + ' actuellement ' + employment + ' à '+ society);
    }else{
      alert('champs invalide');
    }
  });
});
