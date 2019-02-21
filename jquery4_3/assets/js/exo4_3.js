$(function(){
  $('#button').click(function(){
  var lastName = $('#nom').val();
  var firstName = $('#prenom').val();
  var email = $('#nom').val();
  var number = $('#nom').val();
  // Dans la première partie (partie surlignée en plus clair ci-dessus),
  // nous demandons tout simplement à l’utilisateur de commencer soit par une lettre non accentuée en majuscule ou en minuscule,
  //  soit par l’un des caractères suivants : « éèîïÉÈÎÏ ».
  // On demande ensuite que cette première lettre soit suivie par au moins une autre lettre en minuscule
  // ou par l’un des caractères suivants : « éèêàçîï ».
  // Notez l’utilisation du signe + pour demander « au moins une autre… ».
  // Cette deuxième partie commence soit par un apostrophe, un tiret ou un espace \s,
  // puis se poursuit par le deuxième prénom en soi (on réutilise la première partie de la regex ici).
  var regexName = /^([A-Z]{1}[a-zÀ-ÖØ-öø-ÿ]+)([- ]{1}[A-Z]{1}[a-zÀ-ÖØ-öø-ÿ]+){0,1}$/;
   ///^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)$/;
  var regexemail = /^[a-zA-Z-]+@[a-zA-Z-]+\.[a-zA-Z]{2,6}$/;
  var regexnumber = /^(00|\+33)[1-9]( *[0-9]{2}){4}$/;
  // if(lastName.match(regexName) && firstName.match(regexName) && email.match(regexemail) && number.match(regexnumber)){
  //   alert('c\'est bon');
  // }else{
  //   alert('c\'est pas bon');
  // }

    if (lastName.match(regexName) {
      alert('nom valide');
    }else{
     alert('Nom invilide');
    }
    if (firstName.match(regexName) {
      alert('prenom valide');
    }else{
     alert('Prénom invilide');

    }
    if (email.match(regexemail) {
      alert('mail valide');
    }else{
     alert('nom invilide');
    }
    if (number.match(regexName) {
      alert('numero valide');
    }else{
     alert('Entrez un chiffre');
    }
 });
});
