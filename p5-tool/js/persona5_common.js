function supports_templating() {
	return 'content' in document.createElement('template');
}

function generate_persona_link(persona) {
	return "<a href=\"personas.html?persona=" + persona + "\">" + persona + "<a>";
}

function generate_skill_cost(skill) {
    if (skill.element != 'passive') {
        if (skill.cost < 100) {
            return String(skill.cost) + '% HP'
        }
        else {
            return String(skill.cost / 100) + ' SP';
        }
    }
    else
    {
        return "-"
    }
}

function generate_persona_levels(personas) {

}

var _RESISTANCES_DICTIONARY = {
    ab: "Ab",
	rp: "Rp",
	nu: "Nu",
	rs: "Rs",
	"-": "-",
	wk: "Wk",
	unknown: "??"
}

var _RESISTANCES_COLORS = {
	ab: "color:lime",
	rp: "color:cyan",
	nu: "color:darkgray",
	rs: "color:teal",
	"-": "color:black",
	wk: "color:red",
	unknown: "color:red"
}

var _STATS_LIST = ["st", "ma", "en", "ag", "lu"];
function parse_stats(stats, properties, start_index) {
    for (var i = 0; i < _STATS_LIST.length; i++) {
        var curr_stat = stats[_STATS_LIST[i]];
        var curr_property = properties[i + start_index];

        curr_property.innerHTML = curr_stat;
    }
}

var _RESISTANCES_LIST = ["phys", "ranged", "fire", "ice", "electric", "wind", "psy", "nuclear", "bless", "curse"];
function parse_elemental_resistances(resistances, properties, start_index) {
	for (var i = 0; i < _RESISTANCES_LIST.length; i++) {
		var curr_resistance = resistances[_RESISTANCES_LIST[i]];
		var curr_property = properties[i + start_index];
					
		curr_property.innerHTML = _RESISTANCES_DICTIONARY[curr_resistance];
		curr_property.setAttribute("style", _RESISTANCES_COLORS[curr_resistance]);
	}
}

var _ELEMENTS_LIST = _RESISTANCES_LIST.concat(["almighty", "ailment", "healing", "support", "passive"]);

var _ELEMENTS_ORDER = {};
for (var i = 0; i < _ELEMENTS_LIST.length; i++) {
    _ELEMENTS_ORDER[_ELEMENTS_LIST[i]] = 100 + i;
}

var _ARCANA_LIST = ["Fool", "Magician", "Priestess", "Empress", "Emperor", "Hierophant", "Lovers", "Chariot", "Justice", "Hermit", "Fortune", "Strength", "Hanged Man", "Death", "Temperance", "Devil", "Tower", "Star", "Moon", "Sun", "Judgement"];
var _ARCANA_ORDER = {}
for (var i = 0; i < _ARCANA_LIST.length; i++) {
    _ARCANA_ORDER[_ARCANA_LIST[i]] = i;
}

function generate_element_icon(element) {
	return "<img alt=" + _ELEMENTS_ORDER[element] + " src=img/icons/" + element + ".png>";
}

