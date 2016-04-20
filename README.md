# CitrusByte

FizzBuzz(Dazz) implementation

## Content

* [Preview](#preview)
* [Setup](#setup)
* [Usage](#usage)

## Preview

FizzBuzz implementation, where easily different events could be supplied.
Currently the following events are supplied:
- Multiple of 3 -> `Fizz`
- Multiple of 5 -> `Buzz`
- Multiple of 7 -> `Dazz`

From these base events, multilpies can be combined:

- If multiple to more than one number, it concatenates the according strings ->
  Multiple of 3 and 5 -> `FizzBuzz` / Multiple of 5 and 7 -> `BuzzDazz`
- If multiple to 0 -> concatenates all strings, since 0 is multiple of all
  numbers -> `FizzBuzzDazz`

## Setup

```
git clone git@github.com:dvalchanov/citrusbyte-fizzbuzz.git
cd citrusbyte-fizzbuzz
npm install
```

## Usage

### `start`

Start the server -> open `localhost:3000`

```
npm start
```

### `test`

Run the tests

```
npm test
```
