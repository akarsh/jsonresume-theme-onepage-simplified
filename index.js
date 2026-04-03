import Handlebars from "handlebars";
import template from "./resume.hbs?raw";
import css from "./style.css?inline";

const COURSES_COLUMNS = 3;

const PREPEND_SUMMARY_CATEGORIES = [
  "work",
  "volunteer",
  "awards",
  "publications"
];

function validateArray(arr) {
  return Array.isArray(arr) && arr.length > 0;
}

export function render(resume) {
  // Clone to avoid mutating original object (important in serverless)
  resume = JSON.parse(JSON.stringify(resume));

  // Split courses into columns
  if (validateArray(resume.education)) {
    resume.education.forEach((block) => {
      if (validateArray(block.courses)) {
        const splitCourses = Array.from({ length: COURSES_COLUMNS }, () => []);
        let columnIndex = 0;

        block.courses.forEach((course) => {
          splitCourses[columnIndex].push(course);
          columnIndex = (columnIndex + 1) % COURSES_COLUMNS;
        });

        block.courses = splitCourses;
      }
    });
  }

  // Move summary into highlights
  PREPEND_SUMMARY_CATEGORIES.forEach((category) => {
    if (resume[category]) {
      resume[category].forEach((block) => {
        if (!block.highlights) block.highlights = [];

        if (block.summary) {
          block.highlights.unshift(block.summary);
          delete block.summary;
        }
      });
    }
  });

  return Handlebars.compile(template)({
    css: `<style>${css}</style>`,
    resume,
  });
}
