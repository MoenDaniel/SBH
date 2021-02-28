/* ----- JS for scriptene som er relevante på mer enn en webside ----- */

/* -----JS for hamburgermenyen----- */
/* variabel for menyknappen */

/* henter knappen */
const menuIcon = document.getElementById("menu-icon");
/* variabel for slideout menyen*/
const slideoutMenu = document.getElementById("slideout-menu");

/* eventListener for klikk */
menuIcon.addEventListener('click', function () {
  /* Viser/skjuler menyen ved å manipulere CSSen sin opacity på menyen basert på nåværende opacity */
  if (slideoutMenu.style.opacity == "1") {
    slideoutMenu.style.opacity = '0';
    slideoutMenu.style.pointerEvents = 'none';
  } else {
    slideoutMenu.style.opacity = '1';
    slideoutMenu.style.pointerEvents = 'auto';
  }
})



/* ----- Til toppen knapp ----- */
//Henter elementet
toTopBtn = document.getElementById("to-top-btn");

//funksjon som kjøres når "til toppen" knappen klikkes
function toTopFunction() {
  //scroller til toppen
  document.documentElement.scrollTop = 0;
}




/* ----- JS for GSAP animering av websidens banner logo ----- */
const pstBanner = $("#pst-banner");
TweenMax.to(pstBanner, 5, {
  scale: 1.2
});

TweenMax.from(pstBanner, 5, {
  opacity: 0
});



/* ----- Legge til ny sak i localStorage ----- */

// function som kjøres når HTML-knappen "Publiser sak" klikkes
function storeInfo() {
  //Henter input verdiene
  let inputTitle = document.getElementById("case-title").value;
  let inputDate = document.getElementById("case-date").value;
  let inputDescription = document.getElementById("case-description").value;
  let inputType = document.getElementById("case-type").value;

  //gir de verdier
  let submittedCase = {
    title: inputTitle,
    date: inputDate,
    description: inputDescription,
    type: inputType
  };

  //stringifyer de for å sette de i localStorage
  localStorage.setItem("stringifiedCase", JSON.stringify(submittedCase));
};


/* ----- Skrive ut ny sak fra localStorage ----- */

//function som kjøres hver gang en websides body loades så alle får refreshet localStorage
function getInfo() {
  //output
  const outputP = document.getElementById("output-p");

  //if/else statement som skriver ut om localStorage har noe i seg, og gir tilbakemelding om brukeren ikke har
  if (localStorage.length > 0) {

    //parser localStorage for å legge verdiene i html
    const caseParsed = JSON.parse(localStorage.getItem("stringifiedCase"));
    const html = `
    <article>
      <h3>${caseParsed.title}</h3>
      <h4>${caseParsed.date}</h4>
      <p>${caseParsed.description}</p>
      <h5>#${caseParsed.type}</h5>
    </article>

    
    <article>
      <button id="clear-localstorage-btn" onclick="removeArticle();window.location.reload();" class="btn">Slett sak</button>
    </article>
    `;
    //over har jeg laget knapp for å kunne slette saken fra localStorage

    //output av den parset versjonen
    outputP.innerHTML = html;


  } else {
    //gir brukeren tilbakemelding om at de ikke har saker i localStorage
    outputP.innerHTML = "Du har ingen saker.";
  }
}


//prøver å fjerne saken fra localStorage når clear-local-storage-btn knappen trykkes på, men får ikke til


function removeArticle() {
  localStorage.removeItem("stringifiedCase");
}