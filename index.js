const getPoemBtn = document.getElementById('get-poem')
const poemEl = document.getElementById('poem')
const poemURL = 'https://poetrydb.org/random,linecount/1;12/author,title,lines.json'

const getJSON = url => fetch(url).then(res => res.json())

const pipe = (...fns) => firstArg => fns.reduce((returnValue, fn) => fn(returnValue), firstArg)

const makeTag = tag => str => `<${tag}>${str}</${tag}>`

// complete this function
const makePoemHTML = () => {}
  const poem = poemJSON[0];

  const makeH2 = makeTag('h2');
  const makeEm = makeTag('em');
  const makeH3 = makeTag('h3');
  const makep = makeTag('p');

  const titleHTML = makeH2(poem.title);
  const authorHTML = pipe(
    name => 'by ${name}',
    makeEm,
    makeH3
  ) (poem.author);


  const stanzas = [];
  let currentStanza = [];

  for (const line of poem.lines) {
    if (line === '') {
      stanzas.push(currentStanza);
      currentStanza = [];
    } else {
      currentStanza.push(line);
    }
  }

  if (currentStanza.length > 0) {
    stanzas.push(currentStanza);
  }

// attach a click event to #get-poem
getPoemBtn.onclick = async function() {
  // renders the HTML string returned by makePoemHTML to #poem
  poemEl.innerHTML = makePoemHTML(await getJSON(poemURL))
}
