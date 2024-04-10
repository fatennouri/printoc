//TABLEAU DES SLIDES
let slides = [
	{
	  image: "assets/images/slideshow/slide1.jpg",
	  tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
	  image: "assets/images/slideshow/slide2.jpg",
	  tagLine:
		"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
	  image: "assets/images/slideshow/slide3.jpg",
	  tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
	  image: "assets/images/slideshow/slide4.png",
	  tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	},
  ];
  console.log("longueur du tableau : " + slides.length);
  
  // Mettre un event listener sur chacune des flèches.
  
  let left = document.querySelector(".arrow_left");
  let right = document.querySelector(".arrow_right");
  
  left.addEventListener("click", () => {
	MoveSlide(-1);
	ChangeDot(-1);
	console.log("Flèche gauchee cliquée");
  });
  
  right.addEventListener("click", () => {
	MoveSlide(-1);
	ChangeDot(1);
	console.log("Flèche droite cliquée");
  });
  
  // ajout du 4 bullet points dans le slider (une div pour chaque bullet avec la classe dot)
  
  let bullet = `<div class="dot"></div>`;
  
  let dots = document.querySelector(".dots");
  dots.innerHTML = `${bullet.repeat(slides.length)}`;
  dots.firstChild.className = "dot dot_selected";
  
  // gérer la sélection des bullet points (dots) dans le carrousel
  let bulletSelected = 0;
  function ChangeDot(sens) {
	bulletSelected = bulletSelected + sens;
	bulletPrecedent = bulletSelected - sens;
  
	if (bulletSelected > dots.childNodes.length - 1) {
	  bulletSelected = 0;
	}
	if (bulletSelected < 0) {
	  bulletSelected = dots.childNodes.length - 1;
	}
	console.log(dots.childNodes[bulletSelected]);
	dots.childNodes[bulletPrecedent].className = "dot";
	dots.childNodes[bulletSelected].className = "dot dot_selected";
  }
  // fonction pour naviguer entre les sliders du carrousel
  // variable pour mémoriser l'index de slider affiché actuellement dans le slider
  let numero = 0;
  
  function MoveSlide(sens) {
	// Lors du clique la variable numero et incrementer de 1 ou décrementer de -1
	numero = numero + sens;
  
	// si numero est supérieur à 0 on le remet à 0 afin de pouvoir boucler sur le tableau
	if (numero > slides.length - 1) {
	  numero = 0;
	}
  
	// Permet de ne pas dépasser la longueur du tableau cela va parcourir les items du tableau
	if (numero < 0) {
	  numero = slides.length - 1;
	}
  
	//modifier le slide au clic sur le bouton
	document.querySelector(".banner-img").src = slides[numero].image;
	document.querySelector(".text").innerHTML = `${slides[numero].tagLine}`;
  }
  