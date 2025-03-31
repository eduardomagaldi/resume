const map = new Map();
map.set("B2ml Sistemas", getB2mlData("B2ml Sistemas"));
map.set("B2ml Sistemas", getB2mlData("B2ml Sistemas"));
map.set("Vérios", getVeriosData("Vérios"));
map.set("F.biz", getFbizData("F.biz"));
map.set("Mira Educação", getMiraData("Mira Educação"));
map.set("BTG Pactual", getBtgData("BTG Pactual"));
map.set("Talent Rocket", getTalentRocketData("Talent Rocket"));
map.set("Wundertax", getWundertaxData("Wundertax"));
map.set("Tilda", getTildaData("Tilda"));
map.set("Locatelli Advogados", getLocatelliData("Locatelli Advogados"));

export default map;

function getLocatelliData(name: string) {
  return {
    company: name,
    className: "locatelli",
    logoShortPath: "logo/short/logo-locatelli-min.png",
    logoPath: "logo/logo-locatelli.svg",
    logoColor: "#E94E25",
    logoWidth: "170px",

    sector: "Tax law",
    city: "São Paulo",
    country: "Brazil",
    percentage: 19.6,
    year: 2024,
  };
}

function getTildaData(name: string) {
  return {
    company: name,
    className: "tilda",
    logoShortPath: "logo/tilda.png",
    logoPath: "logo/tilda.png",
    logoColor: "#409B88",
    logoWidth: "60px",
    city: "Berlin",
    country: "Germany",
    sector: "Mental health",
    percentage: 2.8,
  };
}

function getWundertaxData(name: string) {
  return {
    company: name,
    className: "wundertax",
    logoShortPath: "logo/short/wundertax.png",
    logoPath: "wundertax.jpg",
    logoColor: "#41CB9C",
    logoWidth: "200px",
    city: "Berlin",
    country: "Germany",
    sector: "Income tax",
    percentage: 6.7,
  };
}

function getTalentRocketData(name: string) {
  return {
    company: name,
    className: "talentrocket",
    logoShortPath: "logo/short/talentrocket.png",
    logoPath: "logo/talentrocket.png",
    logoColor: "#04182B",
    logoWidth: "80px",
    sector: "Lawyer recruitment",
    city: "Munich",
    country: "Germany",
    percentage: 16.8,
  };
}

function getBtgData(name: string) {
  return {
    company: name,
    className: "btg",
    logoShortPath: "logo/short/btg.png",
    logoPath: "logo/btg.png",
    logoWidth: "150px",

    via: {
      name: "BRQ",
      logoPath: "/logo/brq.png",
    },
    sector: "Investment banking",
    city: "São Paulo",
    country: "Brazil",
    logoColor: "#0C1E62",
    percentage: 2.2,
  };
}

function getMiraData(name: string) {
  return {
    company: name,
    className: "mira",
    sector: "Education",
    logoShortPath: "logo/short/mira.jpeg",
    logoWidth: "150px",

    logoPath: "logo/mira.png",
    city: "São Paulo",
    country: "Brazil",
    logoColor: "#F6892B",
    percentage: 9.5,
  };
}

function getFbizData(name: string) {
  return {
    company: name,
    className: "fbiz",
    sector: "Advertising",
    city: "São Paulo",
    country: "Brazil",
    logoShortPath: "logo/short/fbiz.jpg",
    logoPath: "logo/short/fbiz.jpg",
    logoColor: "#ecd000",
    logoWidth: "60px",
    percentage: 12.8,
  };
}

function getVeriosData(name: string) {
  return {
    company: name,
    className: "verios",
    sector: "Investments",
    logoShortPath: "logo/short/verios.jpeg",
    logoPath: "logo/verios.png",
    city: "São Paulo",
    country: "Brazil",
    logoColor: "#3EB9BD",
    percentage: 16.8,
    logoWidth: "130px",
  };
}

function getB2mlData(name: string) {
  return {
    company: name,
    className: "b2ml",
    sector: "Software",
    logoShortPath: "logo/short/b2ml.png",
    logoPath: "logo/b2ml.png",
    city: "Itajubá",
    country: "Brazil",
    logoColor: "#282828",
    percentage: 12.8,
    year: 2010,
    first: true,
    logoWidth: "130px",
  };
}
