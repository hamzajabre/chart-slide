$(document).ready(function() {
		Reference = $(".carrousel li:first-child");
	$(".carrousel")
		.wrap('<div class="carrousel-conteneur"></div>')
	$(".carrousel-conteneur")
		.css("width",  Reference.width()  )
		.css("height", Reference.height() )
		.css("overflow", "hidden");
});

$(document).ready(function() {
		Reference = $(".carrousel li:first-child");
		NbElement = $(".carrousel li").length;
	$(".carrousel")
		.wrap('<div class="carrousel-conteneur"></div>')
		.css("width", (Reference.width() * NbElement) );
	$(".carrousel-conteneur")
		.width(  Reference.width()  )
		.height( Reference.height() )
		.css("overflow", "hidden");
});

$(document).ready(function() {

	$(".carrousel-conteneur")
		.width(  Reference.width()  )
		.height( Reference.height() )
		.css("overflow", "hidden")
		.after(''
			+	'<ul class="carrousel-pagination">'
			+	'	<li class="carrousel-prev"><button type="button">Précédent</button></li>'
			+	'	<li class="carrousel-next"><button type="button">Suivant</button></li>'
			+	'</ul>'
			+	'');
    });

    $(document).ready(function() {
       
            Cpt = 0;
            // Clic sur le bouton "Suivant"
            $(".carrousel-next button").click(function() {
                // Ajout +1 au compteur (nous allons sur la diapositive suivante)
                Cpt++;
                // Mouvement du carrousel en arrière-plan
                $(".carrousel").animate({
                    marginLeft : - (Reference.width() * Cpt)
                });
            });
            // Clic sur le bouton "Précédent"
            $(".carrousel-prev button").click(function() {
                // Soustraction -1 au compteur (nous allons sur la diapositive précédente)
                Cpt--;
                // Mouvement du carrousel en arrière-plan
                $(".carrousel").animate({
                    marginLeft : - (Reference.width() * Cpt)
                });
            });
    });