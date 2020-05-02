Following are the commands to setup the basic typescript server: 

1. `npm init`

2.Installing Dependencies

`npm install -D typescript`
`npm install -D tslint`

3. Install the Express framework:

`npm install express -S`
`npm install @types/express -D`

4. Configuring TypeScript : either add the tsconfig.json or an alternative to manually creating and populating the
   tsconfig.json file is running: `tsc --init`. This command will generate a nicely commented tsconfig.json file.

5. Now you can configure TypeScript linting for the project. In a terminal running in the
   root of your project’s directory, run the following command to generate a tslint.json file:
   `./node_modules/.bin/tslint --init`

6. Open the newly generated tslint.json file and add the no-console rule accordingly:

`"rules": { "no-console": false }`

7. Updating the Package.json file

`"start": "tsc && node dist/app.js"`

8. Setting Up The Folder Structure

   ```
   mkdir src
   cd src
   touch app.ts
   ```

9. Creating and Running a Basic Express Server

Open up the app.ts file and paste in the following code snippet:

```
import express from 'express';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});

```

10. `npm start`
