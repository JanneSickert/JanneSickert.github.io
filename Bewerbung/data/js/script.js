const ROOT = "../../pics/"
const URLS = {
    abi: ROOT + "AbiZeugnis.jpg",
    j1: ROOT + "Janne_Sickert_Zeugnis_J1-2.jpg",
    j2: ROOT + "Janne_Sickert_Zeugnis_J2-1.jpg",
	j3: ROOT + "Janne_Sickert_Zeugnis_J2-2.png"
}

var aWriteFunction = null
var setFunction = null
var getFunction = null
const HTML_ID = "bildZeugnis"
const STORAGE_ID = "66"

function makeCommand(url) {
    return ("<img id=\"" + HTML_ID + "\" src=\"" + url + "\" alt=''>")
}

function reload() {
    location.reload()
}

function cabi() {
    setFunction(STORAGE_ID, "abi")
    reload()
}

function cj1() {
    setFunction(STORAGE_ID, "j1")
    reload()
}

function cj2() {
    setFunction(STORAGE_ID, "j2")
    reload()
}

function cj3() {
	setFunction(STORAGE_ID, "j3")
    reload()
}

function abi() {
    aWriteFunction(makeCommand(URLS.abi))
}

function j1() {
    aWriteFunction(makeCommand(URLS.j1))
}

function j2() {
    aWriteFunction(makeCommand(URLS.j2))
}

function j3() {
	aWriteFunction(makeCommand(URLS.j3))
}

function main(writeFunction, sf, gf) {
    aWriteFunction = writeFunction;
    setFunction = sf
    getFunction = gf
    var value = getFunction(STORAGE_ID)
    if (value === "j1") {
        j1()
    } else if (value === "j2") {
        j2()
	} else if (value === "j3") {
		j3()
    } else {
        abi();
    }
}