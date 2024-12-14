const map = new Map()

map.set('Locatelli Advogados', getLocatelliData('Locatelli Advogados'))
map.set('Tilda', getTildaData('Tilda'))
map.set('Wundertax', getWundertaxData('Wundertax'))
map.set('Talent Rocket', getTalentRocketData('Talent Rocket'))
map.set('BTG Pactual', getBtgData('BTG Pactual'))
map.set('Mira Educação', getMiraData('Mira Educação'))
map.set('F.biz', getFbizData('F.biz'))
map.set('Vérios Investimentos', getVeriosData('Vérios Investimentos'))
map.set('B2ml Sistemas', getB2mlData('B2ml Sistemas'))

export default map

function getLocatelliData(name: string) {
  return {
    company: name,

    logoShortPath: '/logo/short/logo-locatelli-min.png',
    logoPath: '/logo/logo-locatelli.svg',
    logoColor: '#E94E25',
    logoWidth: '170px',

    sector: 'Tax law',
    location: 'São Paulo, Brazil',
    percentage: 19.6,
    year: 2024,
  }
}

function getTildaData(name: string) {
  return {
    company: name,

    logoShortPath: '/logo/tilda.png',
    logoPath: '/logo/tilda.png',
    logoColor: '#409B88',
    logoWidth: '60px',

    location: 'Berlin, Germany',
    sector: 'Mental health',
    percentage: 2.8,
  }
}

function getWundertaxData(name: string) {
  return {
    company: name,

    logoShortPath: '/logo/short/wundertax.png',
    logoPath: '/logo/wundertax.svg',
    logoColor: '#41CB9C',
    logoWidth: '200px',

    sector: 'Income tax',
    location: 'Berlin, Germany',
    percentage: 6.7,
  }
}

function getTalentRocketData(name: string) {
  return {
    company: name,

    logoShortPath: '/logo/short/talentrocket.png',
    logoPath: '/logo/talentrocket.png',
    logoColor: '#04182B',
    logoWidth: '80px',

    sector: 'Lawyer recruitment',
    location: 'Munich, Germany',
    percentage: 16.8,
  }
}

function getBtgData(name: string) {
  return {
    company: name,
    logoShortPath: '/logo/short/btg.png',
    logoPath: '/logo/btg.png',
    logoWidth: '150px',

    via: {
      name: 'BRQ',
      logoPath: '/logo/brq.png',
    },
    sector: 'Investment banking',
    location: 'São Paulo, Brazil',
    logoColor: '#0C1E62',
    percentage: 2.2,
  }
}

function getMiraData(name: string) {
  return {
    company: name,
    sector: 'Education',
    logoShortPath: '/logo/short/mira.jpeg',
    logoWidth: '150px',

    logoPath: '/logo/mira.png',
    location: 'São Paulo, Brazil',
    logoColor: '#F6892B',
    percentage: 9.5,
  }
}

function getFbizData(name: string) {
  return {
    company: name,
    sector: 'Advertising',
    location: 'São Paulo, Brazil',
    logoShortPath: '/logo/short/fbiz.jpg',
    logoPath: '/logo/short/fbiz.jpg',
    logoColor: '#FADD02',
    logoWidth: '60px',
    percentage: 12.8,
  }
}

function getVeriosData(name: string) {
  return {
    company: name,
    sector: 'Investments',
    logoShortPath: '/logo/short/verios.jpeg',
    logoPath: '/logo/verios.png',
    location: 'São Paulo, Brazil',
    logoColor: '#3EB9BD',
    percentage: 16.8,
    logoWidth: '130px',
  }
}

function getB2mlData(name: string) {
  return {
    company: name,
    sector: 'Software development',
    logoShortPath: '/logo/short/b2ml.png',
    logoPath: '/logo/b2ml.png',
    location: 'Itajubá, Brazil',
    logoColor: '#282828',
    percentage: 12.8,
    year: 2010,
    first: true,
    logoWidth: '130px',
  }
}
