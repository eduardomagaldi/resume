const fs = require('fs')
const files = readFiles('./src/helpers/data/')

// const string = ',,,,",",,,,'
// const replaced = replaceCommasInsideQuotes(string)
// console.log('replaced', replaced)

function readFiles(dirname, onFileContent, onError) {
  fs.readdir(dirname, function (err, filenames) {
    filenames.forEach(function (filename) {
      fs.readFile(dirname + filename, 'utf-8', function (err, content) {
        if (err) {
          console.log('err', err)
          return
        }

        csvToJson(filename, content)

        throw new Error('bla')
      })
    })
  })
}

function csvToJson(filename, content) {
  const csvArray = content.split('\n')
  const json = []
  let titles = null

  csvArray.forEach((line, index) => {
    if (line) {
      const output = {}
      const replaced = replaceCommasInsideQuotes(line)
      const splitted = replaced.split(',')

      if (index === 0) {
        titles = splitted
      } else {
        titles.forEach((title, indexTitle) => {
          output[title] = splitted[indexTitle]
        })

        json.push(output)
      }
    }
  })
}

function replaceCommasInsideQuotes(string) {
  return string.replace(/"[^"]+"/g, function (v) {
    return v.replace(/,/g, '[[COMMA]]')
  })
}
