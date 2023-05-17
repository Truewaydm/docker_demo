import fs from 'fs'

fs.appendFile('my-file.txt', 'File saved Node.js', (err) => {
    if (err) throw err
    console.log('File saved!')
})

setTimeout(() => console.log('The end'), 100000)