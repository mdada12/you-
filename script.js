<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Form</title>
    <script defer src="script1.js"></script>
  </head>
  <body>
    <div id="error"></div>
    <form id="form" action="viewgrade.html" method="GET">
      <div>
        <label for="name">Student Name</label>
        <input id="name" name="name" type="text" required />
      </div>
      <div>
        <label for="grade">Student Grade</label>
        <input id="grade" name="grade" type="grade" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  </body>
</html>