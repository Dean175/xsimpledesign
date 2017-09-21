/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'social-icon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'ss-icon-googleplus': '&#xe60c;',
		'ss-icon-facebook': '&#xe600;',
		'ss-icon-twitter': '&#xe601;',
		'ss-icon-feed': '&#xe602;',
		'ss-icon-youtube': '&#xe603;',
		'ss-icon-vimeo': '&#xe604;',
		'ss-icon-flickr': '&#xe605;',
		'ss-icon-flickr2': '&#xe606;',
		'ss-icon-dribbble': '&#xe607;',
		'ss-icon-skype': '&#xe608;',
		'ss-icon-linkedin': '&#xe609;',
		'ss-icon-stumbleupon': '&#xe60a;',
		'ss-icon-pinterest': '&#xe60b;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/ss-icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
