/* ----- JS for sakene som skulle skrives ut på side 2 ----- */

//her lager jeg array for hver av sakene slik at de kan filtreres
const casesArray = [{
        id: 1001,
        imageUrl: "img/case1.jpg",
        title: "Hacket minibanker i København sentrum",
        date: "06-10-2019",
        description: "Fire russere ble arrestert i Jernbanegaden midt i København sentrum. De siktes for å ha hacket danske minibanker, så kontantene sprutet ut av maskinene. Det melder Ekstra Bladet. De pågrepne knyttes til tre tyverier med et samlet utbytte på 1.424.000 kroner. Russerne blir siktet for databedrageri og fremstilles i dag, mandag, for varetektsfengsling i Københavns dommervagt. Det er ennå ukjent hvordan de stiller seg til siktelsen.",
        type: "Cyberkriminalitet",
        solved: true
    },
    {
        id: 1002,
        imageUrl: "img/case2.jpg",
        title: "PST-siktede Bertheussen tidligere dømt til fengsel: Gikk i terapi for å slutte med svindel",
        date: "04-10-2019",
        description: "Det er ventet at Politiets sikkerhetstjeneste (PST) i løpet av de nærmeste dagene vil oversende sin innstilling til tiltale i saken mot Laila Bertheussen (54) til Det nasjonale statsadvokatembetet.",
        type: "Tyveri",
        solved: false
    },
    {
        id: 1003,
        imageUrl: "img/case3.jpg",
        title: "PST ber nordmenn gjøre mer for å beskytte seg mot spionasje",
        date: "04-10-2019",
        description: "PST ber nordmenn være langt mer bevisst på utenlandske spionasje. Nordmenn på reise i enkelte land – som Russland – rådes til å ta forholdsregler.",
        type: "Spionasje",
        solved: true
    },
    {
        id: 1004,
        imageUrl: "img/case4.jpg",
        title: "PST-alarm: Datanettverk på vidt gap",
        date: "03-10-2019",
        description: "Norske teknologibedrifter og forsknings- og utdanningssteder tiltrekker seg stater som er på jakt etter kunnskap de ikke besitter selv. I første rekke er Politiets sikkerhetstjeneste (PST) bekymret for teknologi som kan brukes i produksjon av masseødeleggelsesvåpen. Her står Iran, Nord-Korea, Syria, Pakistan, India og Israel på listen over land man skal være på vakt overfor.",
        type: "Tyveri",
        solved: true
    },
    {
        id: 1005,
        imageUrl: "img/case5.jpg",
        title: "En oppskrift på cyber-lapskaus?",
        date: "02-10-2019",
        description: "Lista over aktører som skal gripe inn mot cyberkriminalitet begynner å bli lang, og siste skudd på stammen er et nytt nasjonalt cybersikkerhetssenter i Nasjonal sikkerhetsmyndighet. Det kan være vanskelig å forstå hvem som skal gjøre hva og hvor man skal henvende seg. Vi advarer mot tung lesning.",
        type: "Cyberkriminalitet",
        solved: false
    },
    {
        id: 1006,
        imageUrl: "img/case6.jpg",
        title: "Mer til dataovervåking for å stoppe spionasje og terror",
        date: "02-10-2019",
        description: "Utgiftene til Politiets sikkerhetstjeneste PST øker kraftig med 9,9 prosent. Årsaken er utvidede fullmakter til dataovervåking. Regjeringen begrunner økningen med at PST trenger mer data «for å hindre terror, spionasje, sabotasje og utenlandske påvirkningsoperasjoner i Norge».",
        type: "Spionasje",
        solved: true
    }
];

//filtrering av sakene
let showCase1 = casesArray.filter(cases => cases.solved == true);

document.getElementById("full-sak").innerHTML += JSON.stringify(showCase1);
document.getElementById("grid-container").innerHTML += JSON.stringify(showCase1);

//etter dette ville jeg endret oppsettet ved å parse også laget en html object literal