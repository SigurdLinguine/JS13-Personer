let karakterer = [
    {
        navn: "Walter White",
        bilde: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Walter_White_S5B.png/220px-Walter_White_S5B.png",
        rolle: "Meth Cook",
        beskrivelse: "A high school chemistry teacher turned criminal mastermind"
    },
    {
        navn: "Jesse Pinkman",
        bilde: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Jesse_Pinkman_S5B.png/220px-Jesse_Pinkman_S5B.png",
        rolle: "Drug Dealer",
        beskrivelse: "A young drug addict forced to cook and sell meth with his old chemistry teacher"
    },
    {
        navn: "Saul Goodman",
        bilde: "https://www.mandatory.com/wp-content/uploads/sites/10/2022/05/bob-odenkirk.jpg",
        rolle: "Attorney",
        beskrivelse: "A sleezy lawyer with a rich past"
    },
    {
        navn: "Mike Ehrmantrout",
        bilde: "https://compote.slate.com/images/fb69a16d-7f35-4103-98c1-62d466196b9a.jpg?width=1200",
        rolle: "Distribution, security",
        beskrivelse: "Head of security for Los Pollos Hermanos"
    },
    {
        navn: "Gustavo Fring",
        bilde: "https://tv-fanatic-res.cloudinary.com/iu/s--nUX04MPp--/f_auto,q_auto/v1371223030/gustavo-fring-picture",
        rolle: "Drug Kingpin",
        beskrivelse: "Head of Los Pollos Hermanos"
    },
    {
        navn: "Hank Schrader",
        bilde: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/breaking-bad/4/45/Hank_Schrader.jpg",
        rolle: "DEA Agent",
        beskrivelse: "A humoristic cop looking to stop the distribution of meth from the source"
    },
    {
        navn :"Huell Babineaux",
        bilde: "https://m.media-amazon.com/images/M/MV5BYjA0NTAyN2MtZmY1Yy00Y2ZlLTljNjYtY2YxYWE0ZTMyNzhmXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
        rolle: "Thief",
        beskrivelse: "A loyal follower of Goodman's"
    },
    {
        navn: "Hidden Character! - The Crystal Ship",
        bilde: "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/albuquerque/Breaking-Bad-RV-Tours-21-cbb53c305056a36_cbb53d39-5056-a36a-0901a1132764be33.jpg",
        rolle: "Starter Meth Lab",
        beskrivelse: "An '80s Chevrolet campervan used as a meth lab"
    }
]

let textInput
let match = []
let g = Number

function displayImage(src) {
    img = document.getElementById("displayImage")
    img.src = src
}

function finnKarakter() {
    textInput = document.getElementById("inputText").value.toLowerCase()

    // Tilbakestill vindu hvis bruker prøver å søke etter ingenting
    if (textInput.length == 0) return
    
    // Reset resultater fra et annet søk om nødvendig
    document.getElementById("inputText").value = ""
    document.getElementById("displayName").innerHTML = ""
    document.getElementById("displayBeskrivelse").innerHTML = ""
    document.getElementById("displayRolle").innerHTML = ""
    document.getElementById("displayImage").src = ""
    document.getElementById("flere").innerHTML = ""
    g = 1
    match = []

    // Legger til karakterer som matcher søket til "match" og øker "g"
    for (let i = 0; i < karakterer.length; i++) {
        if (karakterer[i].navn.toLowerCase().includes(textInput)) {
            match.push(karakterer[i].navn)
            g = i
        }
    }

    // Display karakterens bilde, navn, rolle og beskrivelse om det har blitt funnet en match for det som ble skrevet inn av bruker
    if (match.length == 1) {
        displayImage(karakterer[g].bilde)
        document.getElementById("displayName").innerHTML = match
        document.getElementById("displayRolle").innerHTML = karakterer[g].rolle
        document.getElementById("displayBeskrivelse").innerHTML = karakterer[g].beskrivelse
        console.log(match)
    } else if (match.length > 2) {
        document.getElementById("flere").innerHTML = 'Mange karakterer har "' + textInput + '" i navnet. Vær mer spesifik'
    } else if (match.length > 1) {
        document.getElementById("flere").innerHTML = 'To karakterer har "' + textInput +'" i navnet, mente du ' + match[0] + ' eller ' + match[1] + '?'
    } else {
        document.getElementById("displayBeskrivelse").innerHTML = 'Ingen karakter ved navn "' + textInput + '" funnet '
    }
}

// Call function finnKarakter() når du enten trykker på "Search" knappen eller "Enter" på tastaturet
document.getElementById("inputButton").addEventListener("click", finnKarakter)

document.getElementById("inputText").addEventListener("keydown", function () {
    if (event.key === "Enter") {
        finnKarakter()
    }
})