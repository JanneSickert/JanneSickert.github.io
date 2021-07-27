var writer = null
const START_UNDER = 770

function loadData() {
	var myWidth = window.innerWidth
	writeBr(myWidth)
}

function writeBr(myHeight) {
	if (myHeight < START_UNDER) {
		writer()
	}
}

function main(pWriter) {
	writer = pWriter
	loadData()
}