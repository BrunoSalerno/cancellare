const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('**', (req, res) => {
  res.status(200).send(`
    <!doctype html>
    <html>
      <head>
        <title>Cancellare.it</title>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        <div id="root"></div>
        <script type="text/javascript" src="/bundle.js"></script>
      </body>
    </html>`
  );
});


const port = process.env.PORT || 8080;
app.listen(port);
