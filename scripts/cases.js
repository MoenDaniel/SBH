/* ----- JS for sakene som kommer på forsiden ----- */

//output
const mainOutput = document.getElementById("grid-container");

//de individuelle casene, med tilhørende info
const case1 = {
    id: 1001,
    imageUrl: "img/case1.jpg",
    title: "Hacket minibanker i København sentrum",
    date: "06-10-2019",
    description: "Fire russere ble arrestert i Jernbanegaden midt i København sentrum. De siktes for å ha hacket danske minibanker, så kontantene sprutet ut av maskinene. Det melder Ekstra Bladet. De pågrepne knyttes til tre tyverier med et samlet utbytte på 1.424.000 kroner. Russerne blir siktet for databedrageri og fremstilles i dag, mandag, for varetektsfengsling i Københavns dommervagt. Det er ennå ukjent hvordan de stiller seg til siktelsen.",
    type: "Cyberkriminalitet",
    solved: true
};

const case2 = {
    id: 1002,
    imageUrl: "img/case2.jpg",
    title: "PST-siktede Bertheussen tidligere dømt til fengsel: Gikk i terapi for å slutte med svindel",
    date: "04-10-2019",
    description: "Det er ventet at Politiets sikkerhetstjeneste (PST) i løpet av de nærmeste dagene vil oversende sin innstilling til tiltale i saken mot Laila Bertheussen (54) til Det nasjonale statsadvokatembetet.",
    type: "Tyveri",
    solved: false
};

const case3 = {
    id: 1003,
    imageUrl: "img/case3.jpg",
    title: "PST ber nordmenn gjøre mer for å beskytte seg mot spionasje",
    date: "04-10-2019",
    description: "PST ber nordmenn være langt mer bevisst på utenlandske spionasje. Nordmenn på reise i enkelte land – som Russland – rådes til å ta forholdsregler.",
    type: "Spionasje",
    solved: true
};

const case4 = {
    id: 1004,
    imageUrl: "img/case4.jpg",
    title: "PST-alarm: Datanettverk på vidt gap",
    date: "03-10-2019",
    description: "Norske teknologibedrifter og forsknings- og utdanningssteder tiltrekker seg stater som er på jakt etter kunnskap de ikke besitter selv. I første rekke er Politiets sikkerhetstjeneste (PST) bekymret for teknologi som kan brukes i produksjon av masseødeleggelsesvåpen. Her står Iran, Nord-Korea, Syria, Pakistan, India og Israel på listen over land man skal være på vakt overfor.",
    type: "Tyveri",
    solved: true
}

const case5 = {
    id: 1005,
    imageUrl: "img/case5.jpg",
    title: "En oppskrift på cyber-lapskaus?",
    date: "02-10-2019",
    description: "Lista over aktører som skal gripe inn mot cyberkriminalitet begynner å bli lang, og siste skudd på stammen er et nytt nasjonalt cybersikkerhetssenter i Nasjonal sikkerhetsmyndighet. Det kan være vanskelig å forstå hvem som skal gjøre hva og hvor man skal henvende seg. Vi advarer mot tung lesning.",
    type: "Cyberkriminalitet",
    solved: false
}

const case6 = {
    id: 1006,
    imageUrl: "img/case6.jpg",
    title: "Mer til dataovervåking for å stoppe spionasje og terror",
    date: "02-10-2019",
    description: "Utgiftene til Politiets sikkerhetstjeneste PST øker kraftig med 9,9 prosent. Årsaken er utvidede fullmakter til dataovervåking. Regjeringen begrunner økningen med at PST trenger mer data «for å hindre terror, spionasje, sabotasje og utenlandske påvirkningsoperasjoner i Norge».",
    type: "Spionasje",
    solved: true
}

//setter de sammen til et artikkel object
const caseArticle = (object) => {
    //gir de HTML elementer
    const newArticle = document.createElement("article");
    const newPicture = document.createElement("img");
    const newTitle = document.createElement("h3");
    const newDate = document.createElement("h4");
    const newDescription = document.createElement("p");
    const newType = document.createElement("h5");
    const newSolved = document.createElement("h4");
    const readMoreBtn = document.createElement("button");

    //henter bilde
    newPicture.setAttribute("src", object.imageUrl);
    //setter alt for bildet for universell utforming
    newPicture.setAttribute("alt", `Bilde tilhørende saken: ${object.title}`);

    //henter resten av infoen
    newTitle.innerHTML = object.title;
    newDate.innerHTML = object.date;
    newDescription.innerHTML = object.description;
    //gir type en hashtag ved å bruke object literals
    //newType.innerHTML = `#${object.type}`;


    //les mer knapp, med dens attributter og eventlistener for click
    readMoreBtn.innerHTML = object.button;
    readMoreBtn.innerHTML = ("Les mer..");
    readMoreBtn.setAttribute("id", object.id);
    readMoreBtn.setAttribute("class", "btn");;
    readMoreBtn.addEventListener("click", moveToCase);


    //append child
    newArticle.appendChild(newTitle);
    newArticle.appendChild(newPicture);
    newArticle.appendChild(newTitle);
    newArticle.appendChild(newDate);
    newArticle.appendChild(newDescription);
    newArticle.appendChild(newType);
    newArticle.appendChild(newSolved);
    //newArticle.appendChild(readMoreBtn);

    mainOutput.appendChild(newArticle);
}

//event som skjer når brukeren trykker knappen.
const moveToCase = (e) => {
    //setter case id i localStorage så casene kan filtreres på neste side
    localStorage.setItem("case id", e.target.id);
    //sender brukeren til neste side(sak.html)
    window.location = "sak.html";
}

//skriver ut de individuelle casene. hadde lyst til å lage en for each loop så websiden skriver ut nye saker uten at de må kalles på individuelt
caseArticle(case1);
caseArticle(case2);
caseArticle(case3);
caseArticle(case4);
caseArticle(case5);
caseArticle(case6);

/* Prøver å lage loop her for å skrive ut casene, men får ikke til :) */

/*const nmbrSpan = document.getElementById("case id");
nmbrSpan.innerHTML = caseArticle();


if(localStorage.length > 0) {

    let caseArticle = JSON.parse(localStorage.getItem("case id") );

    let html = "";
    
    caseArticle.forEach( case ) => {
        html += `${caseArticle}`
    }

    nmbrSpan.innerHTML = html;

} else {
    nmbrSpan.innerHTML = "Du har ikke valgt sak."
};*/