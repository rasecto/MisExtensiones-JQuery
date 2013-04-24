/* extension simple que permite establecer un texto de comentario
   en campos de formulario tipo texto  */


(function($) {

	/* objeto con funciones utilitarias */

	var _utility = (

	function() {

		return {

			addClasses: function($seleccion, classes) {
                 
                                /* restriccion a argumento cadena */
                 
				classes = ( $.type(classes) != "string") ? "":classes;

				var vector_clasess = classes.split(" "),

					length = vector_clasess.length;

				for (var i = 0; i < length; i++) {

					$seleccion.addClass(vector_clasess[i]);
				}

			},
			removeClasses: function($seleccion, classes) {

				/* restriccion a argumento cadena */
                 
				classes = ( $.type(classes) != "string") ? "":classes;
               
				var vector_clasess = classes.split(" "),

					length = vector_clasess.length;

				for (var i = 0; i < length; i++) {

					$seleccion.hasClass(vector_clasess[i]) && $seleccion.removeClass(vector_clasess[i]);

				}
			}

		};
	}

	)();


	$.extend($.fn, {

		showCommentInput: function(comment, focus_class, blur_class) {
			return this.filter("input:text").val(comment).on({

				focus: function() {

					var $input = $(this),

						text = $.trim($input.val());

					/* if simple anidado en una sola linea */

					(text.length && comment == text) && $input.val("");

					/* clase añadida a $input */

					_utility.addClasses($input, focus_class);

				},
				blur: function() {

					var $input = $(this),

						texto = $.trim($input.val());

					/* if de una sola linea */

					!texto.length && $input.val(comment);

					/* clase quitada y añadida a $input */

					_utility.removeClasses($input, focus_class);
					_utility.addClasses($input, blur_class);


				}


			});
		}

	});


})(jQuery);