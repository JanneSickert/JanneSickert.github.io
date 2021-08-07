var wasWrote = false
const START_UNDER = 770 // write <br>'s under 770px width.
var nrOfBr
var theDocument

var writeBr = function() {
	for (var i = 0; i < nrOfBr; i++) {
		theDocument.write("<br>")
	}
}

function check() {
	setTimeout(function() {
		var myWidth = window.innerWidth
		if (myWidth < START_UNDER) {
			if (wasWrote == false) {
				writeBr()
				wasWrote = true
			}
		} else {
			if (wasWrote) {
				location.reload()
				wasWrote = false
			}
		}
		check()
	}, 50)
}

function main(pDocument, nr) {
	theDocument = pDocument
	nrOfBr = nr
	check()
}
