# jsonresume-theme-onepage-simplified

A simplified theme for [JSON Resume](http://jsonresume.org/), designed for printing. 

Tries to fit as much information as possible onto a single page without making sections look cluttered.

## Example

http://themes.jsonresume.org/theme/onepage-simplified

## Running

```
npm install -g resume-cli
git clone https://github.com/akarsh/jsonresume-theme-onepage-simplified.git
cd jsonresume-theme-onepage-simplified
npm install
resume serve
```

You should now see this message in terminal/cmd:

```
Preview: http://localhost:4000
Press ctrl-c to stop
```

You can print directly from the served html.

## Options

For the "experience" and "skills" sections, you can optionally replace the "highlights" list with a "details" list with this format:

```
"details": [
  { "text": "Javascript", "comment": "expert" },
  { "text": "Coffeescript", "comment": "expert" },
  { "text": "Ruby", "comment": "competent" },
  { "text": "Java", "comment": "novice" }
]
```

See included resume.json for more details.

### Note

The website parameters in work experience, publishing, volunterring are commented in the [resume.hbs](resume.hbs) file. As the website url are consuming more space in the print version of the resume.

### Credits

This project uses Open Source components. You can find the source code of their open source projects along with license information below. We acknowledge and are grateful to these developers for their contributions to open source.

* Project: [jsonresume-theme-onepage](https://github.com/ainsleyc/jsonresume-theme-onepage)

  Author: [Ainsley Chong](https://github.com/ainsleyc)

  License: [MIT](https://github.com/ainsleyc/jsonresume-theme-onepage/blob/master/LICENSE)

* Project: [jsonresume-theme-onepage-ds](https://github.com/divyenduz/jsonresume-theme-onepage-ds)

  Author: [Divyendu Singh](https://github.com/divyenduz)

  License: [MIT](https://github.com/divyenduz/jsonresume-theme-onepage-ds/blob/master/LICENSE)

* Project: [jsonresume-theme-boilerplate](https://github.com/jsonresume/jsonresume-theme-boilerplate)

  Author: [8+ contributors](https://github.com/jsonresume/jsonresume-theme-boilerplate/graphs/contributors)

  License: [MIT](https://github.com/jsonresume/resume-cli/blob/master/LICENSE)