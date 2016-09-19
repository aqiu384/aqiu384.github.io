function supports_templating() {
	return 'content' in document.createElement('template');
}

function generate_icon_img(icon) {
	return (icon == null) ? "" : "<img src=img/" + icon + ">";
}

function generate_demon_link(demon) {
	return "<a href=\"demons.html?demon=" + demon + "\">" + demon + "<a>";
}

var _RESISTANCES_DICTIONARY = {
	absorb: "Dr",
	repel: "Rp",
	null: "Nu",
	resist: "Rs",
	"-": "-",
	weak: "Wk",
	unknown: "??"
}

var _RESISTANCES_COLORS = {
	absorb: "color:lime",
	repel: "color:cyan",
	null: "color:darkgray",
	resist: "color:teal",
	"-": "color:black",
	weak: "color:red",
	unknown: "color:red"
}

var _AFFINITIES_COLORS = {
	"-9": "Red", "-8": "Red", "-7": "OrangeRed", "-6": "Tomato", "-5": "Coral",
	"-4": "DarkOrange", "-3": "Orange", "-2": "LightSalmon", "-1": "Gold",
	0: "Black", 1: "LawnGreen", 2: "Lime", 3: "SpringGreen", 4: "MediumSpringGreen",
	5: "LimeGreen", 6: "MediumSeaGreen", 7: "SeaGreen", 8: "ForestGreen"
}

var _STATS_LIST = ["hp", "mp", "st", "dx", "ma", "ag", "lu"];
function parse_base_stats(stats, properties, start_index) {
	for (var i = 0; i < _STATS_LIST.length; i++) {
		properties[i + start_index].innerHTML = stats[_STATS_LIST[i]];
	}
}

var _RESISTANCES_LIST = ["phys", "gun", "fire", "ice", "elec", "force", "light", "dark"];
function parse_elemental_resistances(resistances, properties, start_index) {
	for (var i = 0; i < _RESISTANCES_LIST.length; i++) {
		var curr_resistance = resistances[_RESISTANCES_LIST[i]];
		var curr_property = properties[i + start_index];
					
		curr_property.innerHTML = _RESISTANCES_DICTIONARY[curr_resistance];
		curr_property.setAttribute("style", _RESISTANCES_COLORS[curr_resistance]);
	}
}

var _AFFINITIES_LIST = _RESISTANCES_LIST.concat(["almighty", "recovery", "ailment", "auxilary"]);
function parse_elemental_affinities(affinities, properties, start_index) {
	for (var i = 0; i < _AFFINITIES_LIST.length; i++) {
		var affinity = affinities[_AFFINITIES_LIST[i]];
		var property = properties[i + start_index];
		
		property.setAttribute("style", "color:" + _AFFINITIES_COLORS[affinity]);
					
		if (affinity > 0) {
			property.innerHTML = "+" + String(affinity);
		} else if (affinity < 0) {
			property.innerHTML = "-" + String(affinity * -1);
		} else {
			property.innerHTML = "-";
		}
	}
}