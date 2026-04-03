# jsonresume-theme-onepage-simplified

A simplified, compact, and printable theme for [JSON Resume](https://jsonresume.org/) that fits an entire resume on a single page.

> **About This Fork**: This is a maintained fork and continuation of [jsonresume-theme-onepage](https://github.com/ainsleyc/jsonresume-theme-onepage) by Ainsley Chong, combining improvements from the [jsonresume-theme-onepage-ds](https://github.com/divyenduz/jsonresume-theme-onepage-ds) variant. It offers modernized tooling, enhanced styling, and better maintainability while preserving the clean, single-page design philosophy.

## Table of Contents

- [Features](#features)
- [About This Fork](#about-this-fork)
- [Installation](#installation)
- [Usage](#usage)
- [JSON Resume Format](#json-resume-format)
- [Theme Features](#theme-features)
- [Customization](#customization)
- [Development](#development)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)
- [Authors](#authors)
- [Credits](#credits)

## Features

- 📄 **Single Page Design** - Optimized to fit a complete resume on one page
- 🎨 **Clean & Minimal** - Professional, distraction-free layout
- 🖨️ **Print-Friendly** - Perfect for PDF export and printing
- 📱 **Responsive** - Works on all screen sizes
- ⚡ **Lightweight** - Minimal dependencies
- 🎯 **Smart Formatting** - Automatically organizes courses into columns (3-column layout)

## About This Fork

This project builds upon the excellent foundation laid by [Ainsley Chong](https://github.com/ainsleyc)'s original [jsonresume-theme-onepage](https://github.com/ainsleyc/jsonresume-theme-onepage) theme. Key improvements in this version include:

- **Modern Tooling**: Updated to use Vite for faster builds and better development experience
- **Enhanced Styling**: Refined CSS for improved visual hierarchy and readability
- **Better Maintainability**: Cleaner codebase with improved build configuration
- **Active Maintenance**: Regular updates and community contributions
- **Backward Compatibility**: Maintains compatibility with the original theme format

For detailed fork history, see the [Credits](#credits) section.

## Installation

### Using pnpm (recommended)

```bash
pnpm add jsonresume-theme-onepage-simplified
```

### Using npm

```bash
npm install jsonresume-theme-onepage-simplified
```

### Using yarn

```bash
yarn add jsonresume-theme-onepage-simplified
```

## Usage

### With [resumed](https://github.com/rbardini/resume) CLI (Recommended)

```bash
npx resumed render resume.json --theme jsonresume-theme-onepage-simplified --output resume.html
```

### From Source

```bash
git clone https://github.com/akarsh/jsonresume-theme-onepage-simplified.git
cd jsonresume-theme-onepage-simplified
pnpm install
pnpm build
pnpm render
```

### Programmatically

```javascript
import theme from 'jsonresume-theme-onepage-simplified';
import resume from './resume.json';

const html = theme.render(resume);
```

## JSON Resume Format

Your resume should follow the [JSON Resume Schema](https://jsonresume.org/schema/). Here's a basic structure:

```json
{
  "basics": {
    "name": "Your Name",
    "label": "Professional Title",
    "email": "your.email@example.com",
    "phone": "+1 (555) 123-4567",
    "url": "https://yourwebsite.com",
    "summary": "A brief professional summary",
    "location": {
      "address": "123 Main St",
      "postalCode": "12345",
      "city": "City",
      "countryCode": "US",
      "region": "State"
    },
    "profiles": [
      {
        "network": "LinkedIn",
        "username": "yourprofile",
        "url": "https://linkedin.com/in/yourprofile"
      }
    ]
  },
  "work": [...],
  "education": [...],
  "skills": [...]
}
```

## Theme Features

### Smart Course Organization

Courses listed in education are automatically split into **3 columns** for compact display.

### Section Transformation

The theme intelligently transforms resume sections:
- Summaries in work, volunteer, awards, and publications sections are converted to highlights
- Skills are displayed with proficiency levels
- Education includes institutions and study types

## Customization

### Available Options

For the "experience" and "skills" sections, you can optionally replace the "highlights" list with a "details" list:

```json
"details": [
  { "text": "Javascript", "comment": "expert" },
  { "text": "Coffeescript", "comment": "expert" },
  { "text": "Ruby", "comment": "competent" },
  { "text": "Java", "comment": "novice" }
]
```

### Styling

The theme uses clean, minimal CSS in [style.css](style.css). You can:
- Fork this repository and modify `style.css` to customize appearance
- Override styles in your own stylesheet
- Modify the Handlebars template in [resume.hbs](resume.hbs)

### Website URLs

⚠️ **Note**: Website parameters in work experience, publishing, and volunteering are commented out in [resume.hbs](resume.hbs) to save space in the print version.

## Development

### Prerequisites

- Node.js 20+
- pnpm 10.33.0+

### Setup

```bash
git clone https://github.com/akarsh/jsonresume-theme-onepage-simplified.git
cd jsonresume-theme-onepage-simplified
pnpm install
```

### Build

```bash
pnpm build  # builds dist/index.js via Vite
```

### Testing

To test rendering locally after making changes:

```bash
pnpm build && pnpm render
```

This generates `resume.html` from `resume.json` using your modified theme.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Resources

- [JSON Resume](https://jsonresume.org/) - Official website
- [JSON Resume Schema](https://jsonresume.org/schema/) - Complete schema documentation
- [resumed CLI](https://github.com/rbardini/resume) - CLI tool for rendering resumes

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Test with `pnpm build && pnpm render`
5. Submit a pull request

## License

MIT - See [LICENSE.md](LICENSE.md) for details

## Authors

**Current Maintainers (This Fork):**
- [Divyendu Singh](https://github.com/divyenduz)
- [Akarsh Seggemu](https://github.com/akarsh)

**Original Creator:**
- [Ainsley Chong](https://github.com/ainsleyc) — See [Fork History](#fork-history) for details

## Credits

### Fork History

This project is a continuation and modernization of:

1. **[jsonresume-theme-onepage](https://github.com/ainsleyc/jsonresume-theme-onepage)** (Original)
   - Creator: [Ainsley Chong](https://github.com/ainsleyc)
   - The foundational single-page resume theme
   - License: MIT

2. **[jsonresume-theme-onepage-ds](https://github.com/divyenduz/jsonresume-theme-onepage-ds)** (Enhancement Fork)
   - Creator: [Divyendu Singh](https://github.com/divyenduz)
   - Added improvements and maintained the theme
   - License: MIT

3. **jsonresume-theme-onepage-simplified** (Current, This Repository)
   - Current Maintainers: [Divyendu Singh](https://github.com/divyenduz), [Akarsh Seggemu](https://github.com/akarsh)
   - Modern tooling, enhanced styling, active maintenance
   - License: MIT

### Open Source Dependencies

We also acknowledge these projects:

- **[jsonresume-theme-boilerplate](https://github.com/jsonresume/jsonresume-theme-boilerplate)** by [8+ contributors](https://github.com/jsonresume/jsonresume-theme-boilerplate/graphs/contributors) — [MIT License](https://github.com/jsonresume/resume-cli/blob/master/LICENSE)
