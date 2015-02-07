<!-- Sticky header -->
<header class="menu">
  <div class="menuspacer">
	<button class="menutoggle" id="menutoggle"></button>
	<div class="menudropdown" id="menudropdown">
		<nav class="menuoptions" >
			<a href="/#marketing-section" class="menuoption para-primaryLink">Marketing</a>
			<a href="/#services-section" class="menuoption para-primaryLink">Services</a>
			<a href="/#info-section" class="menuoption para-primaryLink">Info</a>
			<a href="/#media-section" class="menuoption para-primaryLink">Media</a>
			<a href="/#x1-logo" class="menuoption para-primaryLink">Home</a>
		</nav>
		<div class="menusuboptions" >
			<nav class="menusuboptionset menusuboptionset-marketing">
				<a href="/marketing/driving.php" class="menuoption para-primaryLink">Driving the right marketing strategy</a>
				<a href="/marketing/invest.php" class="menuoption para-primaryLink">Investing your marketing money wisely</a>
				<a href="/marketing/directanddigital.php" class="menuoption para-primaryLink">Direct and digital marketing media allocation</a>
				<a href="/marketing/description.php" class="menuoption para-primaryLink">Description and target finding</a>
				<a href="/marketing/target.php" class="menuoption para-primaryLink">Target Engagement</a>
				<a href="/marketing/easy.php" class="menuoption para-primaryLink">Making it easy for your target to buy</a>
				<a href="/marketing/track.php" class="menuoption para-primaryLink">What to track, when and how</a>
				<a href="/marketing/web.php" class="menuoption para-primaryLink">Web-2-Promotion to accelerate your sales</a> 
			</nav>
			<nav class="menusuboptionset menusuboptionset-services">
				<a href="/services/design.php" class="menuoption para-primaryLink">Design and Branding</a>
				<a href="/services/printing.php" class="menuoption para-primaryLink">Printing</a>
				<a href="/services/physical.php" class="menuoption para-primaryLink">Physical Asset Management</a>
				<a href="/services/web.php" class="menuoption para-primaryLink">Web-2-Production</a>
				<a href="/services/direct.php" class="menuoption para-primaryLink">Direct Mail</a>
			</nav>
			<nav class="menusuboptionset menusuboptionset-info">
				<a href="/info/contacts.php" class="menuoption para-primaryLink">Contacts</a>
			</nav>
			<nav class="menusuboptionset menusuboptionset-media">
				<a href="/media/articles.php" class="menuoption para-primaryLink">Articles</a>
				<a href="/media/videos.php" class="menuoption para-primaryLink">Videos</a>
				<a href="/media/marketing.php" class="menuoption para-primaryLink">Marketing Links</a>
			</nav>
		</div>
	  </div>
  </div>
</header>

<script>

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

</script>
