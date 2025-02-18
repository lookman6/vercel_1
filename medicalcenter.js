const jobs = [
  {
    title: "Clinique La Grace Marie",
    image: "images/clinique.svg",
    details:
      "Consultations gynécologiques (Cancers gynécologiques) ",
    openPositions: "2",
    link: "https://cliniquelagracemarie.com/",
  },

  {
    title: "Clinique les Genêts",
    image: "images/clinique.svg",
    details:
      "Consultations gynécologiques (Cancers gynécologiques)",
    openPositions: "3",
    link: "http://www.les-genets.net/index.php/services/maternite",
  },

  {
    title: "La clinique Wolobougou",
    image: "images/clinique.svg",
    details:
      "Cette clinique-maternité met l'accent sur l'accès aux soins pour les femmes, en particulier celles des zones rurales.",
    openPositions: "1",
    link: "https://www.lacliniquewolobougou.com/",
  },

  {
    title: "Marie Stopes Burkina Faso",
    image: "images/clinique.svg",
    details:
      "consultations santé sexuelle et reproductive, cancers gynécologiques",
    openPositions: "1",
    link: "https://www.mariestopes.bf/nos-services/sante-sexuelle-et-de-la-reproduction/consultation-gynecologique/",
  },

  {
    title: "CHU Yalgado Ouédraogo à Ouagadougou",
    image: "images/clinique.svg",
    details:
      "Ce CHU dispose d'un service d'oncologie pédiatrique et prend également en charge les adultes. Contact: +226 25 31 16 55",
    openPositions: "4",
    link: "https://chuyobf.org/",
  },

  {
    title: "Centre de radiothérapie de Bogodogo à Ouagadougou",
    image: "images/clinique.svg",
    details:
      "Traitements de radiothérapie sur place. Il prend en charge plusieurs types de cancers, notamment le cancer du col de l'utérus, de la prostate, du foie, etc. Adresse: CM du secteur 30, rue 30.246, Karpala, Ouagadougou, Burkina Faso",
    openPositions: "1",
    link: "#",
  },
];

const jobsHeading = document.querySelector(".jobs-list-container h2");
const jobsContainer = document.querySelector(".jobs-list-container .jobs");
const jobSearch = document.querySelector(".jobs-list-container .job-search");

let searchTerm = "";

if (jobs.length == 1) {
  jobsHeading.innerHTML = `${jobs.length} centres sanitaires`;
} else {
  jobsHeading.innerHTML = `${jobs.length} centres sanitaires`;
}

const createJobListingCards = () => {
  jobsContainer.innerHTML = "";

  jobs.forEach((job) => {
    if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      let jobCard = document.createElement("div");
      jobCard.classList.add("job");

      let image = document.createElement("img");
      image.src = job.image;

      let title = document.createElement("h3");
      title.innerHTML = job.title;
      title.classList.add("job-title");

      let details = document.createElement("div");
      details.innerHTML = job.details;
      details.classList.add("details");

      let detailsBtn = document.createElement("a");
      detailsBtn.href = job.link;
      detailsBtn.innerHTML = "Details";
      detailsBtn.classList.add("details-btn");
      detailsBtn.target="_blank";
     /* let openPositions = document.createElement("span");
      openPositions.classList.add("open-positions");

      if (job.openPositions == 1) {
        openPositions.innerHTML = `${job.openPositions} open position`;
      } else {
        openPositions.innerHTML = `${job.openPositions} open positions`;
      }*/

      jobCard.appendChild(image);
      jobCard.appendChild(title);
      jobCard.appendChild(details);
      jobCard.appendChild(detailsBtn);
      //jobCard.appendChild(openPositions);

      jobsContainer.appendChild(jobCard);
    }
  });
};

createJobListingCards();

jobSearch.addEventListener("input", (e) => {
  searchTerm = e.target.value;

  createJobListingCards();
});
