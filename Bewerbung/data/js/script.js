/*
    Cookie information
    ------------------
    localStorage:
        ID 66:
            If a button is pressed on a certificate, 
            the respective certificate is addressed as a cookie and then loaded in the reload process. 
            The file name is not saved in the cookie object but in localStorage. 
            This method also saves data in the browser using an ID.
        ID 65:
            Store 1 if cookie was accept null value if not.
*/

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
var deleteFunction = null
const HTML_ID = "bildZeugnis"
const STORAGE_ID = "66"
const ACCEPT_COOKIE = "65"

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

var noCookies = function(pDocument, language) {
    const PIC_PATH = "/Bewerbung/data/pics/"
    var message = {
        de: "Wenn sie die Cookies ablehnen können sie die restlichen"
         + " Zeugnisse im Verzeichniss " + PIC_PATH + " einsehen. "
         + "Schreibe ja um alle Cookies zu löschen.",
        en: "If you reject the cookies you can see the remaining "
         + "certificates in the directory " + PIC_PATH + " Write yes to delete all cookies."
    }
    if (language === "de") {
        var res = prompt(message.de)
        if (res === "ja") {
            deleteFunction()
            alert("Alle Cookies wurden gelöscht.");
        } else {
            setFunction(ACCEPT_COOKIE, "1")
            alert("Alle Cookies wurden beibehalten.")
        }
    } else {
        var res = prompt(message.en)
        if (res === "yes") {
            deleteFunction()
            alert("All cookies have been deleted.");
        } else {
            setFunction(ACCEPT_COOKIE, "1")
            alert("All cookies were retained.")
        }
    }
    pDocument.getElementById('mbmcookie').style.display = 'none';
}

var yesCookies = function(pDocument) {
    setFunction(ACCEPT_COOKIE, "1")
    pDocument.getElementById('mbmcookie').style.display = 'none';
}

function main(writeFunction, sf, gf, df) {
    aWriteFunction = writeFunction;
    setFunction = sf
    getFunction = gf
    deleteFunction = df
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

function checkSetCookies(pDocument) {
    if (getFunction(ACCEPT_COOKIE) === "1") {
        pDocument.getElementById('mbmcookie').style.display = 'none'
    }
}
