# CUBA Platform front-end and TypeScript SDK generator

The generator is `@cuba-platform/front-generator` npm package which
 * provides an ability to generate:
    * [Polymer 2 starter](https://doc.cuba-platform.com/manual-7.0/polymer_ui.html)
    * [React starter](src/generators/react-typescript/app/template/README.md)
    * Framework agnostic TS SDK
 * is used by [CUBA Studio](https://doc.cuba-platform.com/studio/) for [front module](https://doc.cuba-platform.com/manual-7.0/front_ui.html) creation

## Using via command line

### Prerequisites

Install [Node.js](https://nodejs.org/en/download/) 10.15+ and npm 6+ (usually comes with node). Install [CUBA Studio](https://doc.cuba-platform.com/studio/#installation).

Install the generator using the npm package manager: 

```bash
npm install -g @cuba-platform/front-generator
```

Then you will be able to run it via command line:

```bash
gen-cuba-front
```

Alternatively you can also run the generator without installation using `npx`:

```bash
npx @cuba-platform/front-generator
```

### Workflow

In order to create some project-related stuff we need to pass project information to the generator. There are two types of ways of doing it

#### Interactive

Open your project in Intellij/CUBA Studio. Open settings (`File > Settings`), then open `Languages & Frameworks > CUBA` . Tick the `Old Studio integration` checkbox:

![GitHub Logo](etc/studio-integration.png)

After that when running generator without any options it will automatically detect CUBA projects opened in Studio: 

```bash
gen-cuba-front sdk:all
```
![Interactive project selection](etc/interactive-projects.png)

#### Manual

Alternatively you can export project model manually. In main menu select `CUBA > Advanced > Export project model`. Studio will generate `projectModel.json` file.

Use `--model` cli option to specify destination to project model file:

```bash
gen-cuba-front sdk:all --model /work/cuba-samples/sample-sales/projectModel.json
```


### CLI Options
* `-v, --version`: prints current version of the generator.
* `-h, --help`: prints help for given command.

#### Common generation options 

* `--model`: path to exported project model.
* `--dest`: destination directory (default: current).


## Development
Run locally
```bash
npm run watch
npx gen-cuba-front
```

## Testing
```bash
npm test
```

## Integration tests
Integration tests are used compiled version of front-generator. To apply your code changes you need to run ```npm run compile``` before testing.
<br>
Apps and sdk generated in ```./tmp``` directory.
### Run all
```bash
npm run test:e2e
```

### SDK generation
```bash
npm run test:e2e:sdk
```
