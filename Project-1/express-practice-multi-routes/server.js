/* 
1.	Building 10 Routes and a view engine, say anything we want
2.	Makeing 2 different templates, and use them both in different routes ( We can only have 1 view engine but multiple templates )
*/
// Load express
// Require modules (general steps)
const express = require('express');

// Create our express app (general steps)
const app = express();

// Configure the app (app.set)
const fs = require('fs') // this engine requires the fs module
app.engine('madeline', (filePath, options, callback) => {  //define the view engine
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err)
        const rendered = content.toString()
            .replace('#title#', '<title>' + options.title + '</title>')
            .replace('#message#', '<h1>' + options.message + '</h1>')
            .replace('#content#','<div>'+ options.content + '</div>')
            .replace('#content2#','<div>'+ options.content2 + '</div>')
        return callback(null, rendered)
    }) 
})

app.set('views', './views')  // specify the views directory
app.set('view engine', 'madeline')


app.get('/', (req, res) => {
    res.render('template', { title: 'Yellow!  To start nothing!', message: 'Hello there!', content: 'I am da Blah man!' })
  })
  
  app.get('/1', (req, res) => {
    res.render('template', { title: 'Yellow! For 1st time!', message: 'Blah, Blah 1st round!', content: 'The most blaher in the world' })
  })
  
  app.get('/2', (req, res) => {
    res.render('template', { title: 'Blah alert! 2nd times!', message: 'Blah, Blah 2nd round!', content: 'Double contents are Taking Over, get ready for nothing!' })
  })

  app.get('/3', (req, res) => {
    res.render('template2', {  message: 'Blah, Blah 3rd round!', content: 'I can Blah better than round 1, 2.', content2: '  whatevar man!' })
  })

  app.get('/4', (req, res) => {
    res.render('template2', {  message: 'Blah, Blah 4th round!', content: 'I can Blah better than round 1, 2, 3.', content2: '  whatevar man!' })
  })

  app.get('/5', (req, res) => {
    res.render('template2', {  message: 'Blah, Blah 5th round!', content: 'I can Blah better than round 1, 2, 3, 4.', content2: '  whatevar man!' })
  })

  app.get('/6', (req, res) => {
    res.render('template2', {  message: 'Blah, Blah 6th round!', content: 'I can Blah better than round 1, 2, 3, 4, 5.', content2: '  whatevar man!' })
  })

  app.get('/7', (req, res) => {
    res.render('template2', {  message: 'Blah, Blah 7th round!', content: 'I can Blah better than round 1, 2, 3, 4, 5, 6.', content2: '  whatevar man!' })
  })


  app.get('/8', (req, res) => {
    res.render('template2', {  message: 'Blah, Blah 8th round!', content: 'I can Blah better than round 1, 2, 3, 4, 5, 6, 7.', content2: '  whatevar man!' })
  })

  app.get('/9', (req, res) => {
    res.render('template2', {  message: 'Blah, Blah 9th round!', content: 'I can Blah better than round 1, 2, 3, 4, 5, 6, 7, 8', content2: '  whatevar man!' })
  })

  app.get('/10', (req, res) => {
    res.render('template2', {  message: 'Blah, Blah 10th round!', content: 'I can Blah better than round 1, 2, 3, 4, 5, 6, 7, 8, 9.', content2: '  whatevar man!' })
  })


// i want to add the path /home and I want it to respond with 
// <h1> Home Page </h1>
app.get('/home', function (req, res) {  
    res.send('<h1>Home page </h1>');
});


// Tell the app to listen on port 3000 (general steps)
// for HTTP requests from clients
app.listen(3000, function() {
    console.log('Listenting on port 3000');
})