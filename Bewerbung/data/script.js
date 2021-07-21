const URLS = {
    abi: "Abi.bmp",
    j1: "J1-2.bmp",
    j2: "J2-1.bmp"
}

var aWriteFunction = null;
var setFunction = null;
var getFunction = null;
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

function abi() {
    aWriteFunction(makeCommand(URLS.abi))
}

function j1() {
    aWriteFunction(makeCommand(URLS.j1))
}

function j2() {
    aWriteFunction(makeCommand(URLS.j2))
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
    } else {
        abi();
    }
}