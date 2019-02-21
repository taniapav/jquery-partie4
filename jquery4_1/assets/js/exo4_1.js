$(function(){
	var userChoice = '';
	var tie = 0;
	var win = 0;
	var loose = 0;
	// je dèclare la variaable userChoice, avant pour que toute mes fonctions ont l'accses
	// Lors du clique de l'utilisateur sur l'une des possibilités (pierre, feuille, ou ciseaux),
	// la fonction se lance.
	$('#pierre, #feuille, #ciseaux').click(function(){
		userChoice = $(this).attr('id');
		console.log(userChoice);
	});

	$('#shifumi').click(function() {
		// La fonction click() lancée, l'ordinateur parcours le tableau computerPossibility
		// et choisi aléatoirement entre pierre, feuille ou ciseaux à l'aide de la fonction Math.random.
		var computerPossibility = ['pierre', 'feuille', 'ciseaux'];
		var rondom = Math.floor(Math.random()*3);
		var computerChoice = computerPossibility[rondom];
		console.log(computerChoice);


		// 2. Possibilites
		switch (true) {
			// On évalue ensuite les choix effectués par le joueur et l'ordinateur à l'aide de l'instruction switch(),
			// qui, le cas affichera le résultat
			// 1. En cas d'égalité :
			case (userChoice == computerChoice) :
			alert('Egalité');
		//  dans la variable tie je stocke le nombre d'egalites
		 	tie++;
			break;
			// 2. Dans le cas où le joueur gagne :
			case ((userChoice == 'pierre' && computerChoice == 'ciseaux')	|| (userChoice == 'feuille' && computerChoice == 'pierre') || (userChoice == 'ciseaux' && computerChoice == 'feuille')) :
			alert('Human gagne');
    //Dans la variable win je stock le nombre de victoires humain
			win++;
			break;

			default :
			alert('Computer gagne');
    //Dans la variable loose je stock le nombre de defaites humain
			loose++;
			break;
		}
		$('#resultwin').text(win);
		$('#resultloose').text(loose);
		$('#resulttie').text(tie);
	});
});
