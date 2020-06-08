export default function render(markup, link) {
    const scriptLink = JSON.stringify({ link });
    return `
          <!DOCTYPE html>
          <html>
            <head>
            <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <title>news</title>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
              <link rel="stylesheet" type="text/css" href="/bundle.css">
              <link href="https://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet">
              <script defer type="text/javascript" src="/bundle.js"></script>
              <script>window.LINK = ${scriptLink}</script>
            </head>
            <body>
              <div id="App">${markup}</div>
            </body>
          </html>
        `;
}
