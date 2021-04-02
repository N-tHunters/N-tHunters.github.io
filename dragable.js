function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
	e = e || window.event;
	e.preventDefault();
	// get the mouse cursor position at startup:
	pos3 = e.clientX;
	pos4 = e.clientY;
	document.onmouseup = closeDragElement;
	// call a function whenever the cursor moves:
	document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
	e = e || window.event;
	e.preventDefault();
	// calculate the new cursor position:
	pos1 = pos3 - e.clientX;
	pos2 = pos4 - e.clientY;
	pos3 = e.clientX;
	pos4 = e.clientY;
	// set the element's new position:
	elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
	elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
	// stop moving when mouse button is released:
	document.onmouseup = null;
	document.onmousemove = null;
    }
}

var animatedElements = [];



function animateElement(elmnt) {
    var rect = elmnt.getBoundingClientRect();
    var width = window.screen.width - 200;
    var height = window.screen.height - 200;
    
    var x = Math.floor((Math.random() * width) + 1);
    var y = Math.floor((Math.random() * height) + 1);

    elmnt.style.top = height + "px";
    elmnt.style.left = width + "px";

    animatedElements.push({el: elmnt, tpos: [x, y], dpos: [Math.round(rect.left), Math.round(rect.top)], fin: false});
}

function makeAnimatedDragable() {
    for(var element of animatedElements) {
	element.el.className += " dragable";
    }
}

function animate() {
    for(var element of animatedElements) {
	var cy = parseInt(element.el.style.top.substr(0, element.el.style.top.length - 2));
	var cx = parseInt(element.el.style.left.substr(0, element.el.style.left.length - 2));

	var dx = 0;
	var dy = 0;

	if(cx < element.tpos[0]) dx = 1;
	if(cx > element.tpos[0]) dx = -1;

	if(cy < element.tpos[1]) dy = 1;
	if(cy > element.tpos[1]) dy = -1;

	if(cx == element.tpos[0] && cy == element.tpos[1]) {
	    if(Math.floor((Math.random() * 10) + 1) < 6 && element.tpos != element.dpos) {
		var width = window.screen.width - 200;
		var height = window.screen.height - 200;
		
		var x = Math.floor((Math.random() * width) + 1);
		var y = Math.floor((Math.random() * height) + 1);
		element.tpos = [x, y];
	    } else {
		element.tpos = element.dpos;
	    }
	}

	element.el.style.top = (cy + dy) + 'px';
	element.el.style.left = (cx + dx) + 'px';
    }
}
