<!-- Sticky header -->
<header class="menu">
  <div class="menuspacer">
	<button class="menutoggle" id="menutoggle"></button>
	<div class="menudropdown" id="menudropdown">
		<nav class="menuoptions" >
			<a href="/#marketing-section" class="menuoption para-primaryLink">Marketing</a>
			<a href="/#services-section" class="menuoption para-primaryLink">Services</a>
			<a href="/#info-section" class="menuoption para-primaryLink">Contacts</a>
			<a href="/#media-section" class="menuoption para-primaryLink">Media</a>
			<a href="/#x1-logo" class="menuoption para-primaryLink">Home</a>
		</nav>
		<div class="menusuboptions" >
			<nav class="menusuboption menusuboption-marketing">
				<a href="/marketing/driving" class="menuoption para-primaryLink">submenu</a>
				<a href="/marketing/driving" class="menuoption para-primaryLink">submenu</a>
				<a href="/marketing/driving" class="menuoption para-primaryLink">submenu</a>
			</nav>
			<nav class="menusuboption menusuboption-services">
				<a href="/marketing/driving" class="menuoption para-primaryLink">submenu</a>
				<a href="/marketing/driving" class="menuoption para-primaryLink">submenu</a>
				<a href="/marketing/driving" class="menuoption para-primaryLink">submenu</a>
			</nav>
			<nav class="menusuboption menusuboption-info">
				<a href="/marketing/driving" class="menuoption para-primaryLink">submenu</a>
				<a href="/marketing/driving" class="menuoption para-primaryLink">submenu</a>
				<a href="/marketing/driving" class="menuoption para-primaryLink">submenu</a>
			</nav>
			<nav class="menusuboption menusuboption-media">
				<a href="/marketing/driving" class="menuoption para-primaryLink">submenu</a>
				<a href="/marketing/driving" class="menuoption para-primaryLink">submenu</a>
				<a href="/marketing/driving" class="menuoption para-primaryLink">submenu</a>
			</nav>
		</div>
	  </div>
  </div>
</header>

<script>

(function(){

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

(function(){

	var i = 0;
	var menuoptions = document.querySelectorAll('.menuoptions .menuoption');
	var submenus = document.querySelectorAll('.menusuboption');

	for (; i < menuoptions.length; i += 1) {
		menuoptions[i].addEventListener( 'click', openSubMenu, false );
	}

	function openSubMenu ( e ) {
		console.log(this.className);

		return false;
	}

}());

</script>
