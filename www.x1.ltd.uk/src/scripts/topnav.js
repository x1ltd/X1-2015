(function(){'use strict';

	//	Find the toggle button
	var menutoggle = document.querySelector('#menutoggle');
	//	Find the options menu
	var menudropdown = document.querySelector('#menudropdown');

	//	Choose a class name too add to the options menu when it's open
	var menudropdownOpenClass = 'menudropdown--open';
	var menutoggleOpenClass = 'menutoggle--open';

	//	Start waiting for the menu to be clicked
	//		and decide what to do when it is
	menutoggle.addEventListener( 'click', toggleMenudropdown, false );
	menudropdown.addEventListener( 'click', toggleMenudropdown, false );

	//	Create the rule to be ran when the menu is clicked
	function toggleMenudropdown ( e ) {
		//	If the class of the menu options doesn't contain the chosen
		//		'open' class, add the open class
		if ( menudropdown.className.indexOf( menudropdownOpenClass ) < 0 ) {
			menudropdown.classList.add( menudropdownOpenClass );
			menutoggle.classList.add( menutoggleOpenClass );
		}
		//	Otherwise, if it already has the 'open' class,
		//		we'll remove it
		else {
			menudropdown.classList.remove( menudropdownOpenClass );
			menutoggle.classList.remove( menutoggleOpenClass );
		}
	}

})();

(function(){'use strict';

	var i = 0;
	var menuoptions = document.querySelectorAll('.menuoptions .menuoption');
	var submenusets = document.querySelectorAll('.menusuboptionset');

	var menuOpenclass = 'menuoption--open';
	var submenusetOpenclass = 'menusuboptionset--open';

	for (; i < menuoptions.length; i += 1) {
		menuoptions[i].addEventListener( 'mouseover', createOpenEvent( menuoptions[i] ), false );
	}

	openSubmenu( menuoptions[0] );

	function createOpenEvent ( menuitem ) {

		return function( e ) {
			if ( openSubmenu( menuitem ) ) {
				e.stopPropagation();
			}

			e.preventDefault();
		}

	}

	function openSubmenu ( menuitem ) {
		var href = menuitem.href.split('#')[1];
		var ref = '';
		var subset;
		var i;

		//	If this isn't aiming at a section
		//		we don't need to do anything
		//	For example, home doesn't have sub sections
		if ( !href ) {
			return true;
		}

		ref = href.split('-')[0];
		subset = document.querySelector( '.menusuboptionset-' + ref );

		for (i=0; i < menuoptions.length; i+=1) {
			menuoptions[i].classList.remove( menuOpenclass );
		}
		for (i=0; i < submenusets.length; i+=1) {
			submenusets[i].classList.remove( submenusetOpenclass );
		}

		menuitem.classList.add( menuOpenclass );
		subset.classList.add( submenusetOpenclass );

		return subset;
	}

}());