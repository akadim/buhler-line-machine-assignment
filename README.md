# Buhler Line Machines Assignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Important Notes:

  - You will notice that Attacher, Packer and the Running state icons are quite different, I used the ones in the project just to save up time, since I didn't find the other icons right away.
  - I added `json-server` package to simulate getting the data from the server, the server data is located in `src/db.json`
  - The web app is divided into 2 modules:
      - `CoreModule` which contains the Header and the Navigation components
      - `LineMachineModule` inside the `features` folder, which contains the `LineMachine` component 
  - You will find the Machine model `machine.ts` and the machine state enum `line-machine-enum.ts` in the `src/app/model` folder .
  - `src/app/apis`: REST API Service

## Author

KADIM Ahmed
