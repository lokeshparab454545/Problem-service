const { marked } = require("marked");
const sanitizeHtml = require("sanitize-html");
const TurndownService = require("turndown");

function sanitizeMarkdown(markdownContent) {
  var turndownService = new TurndownService();
  const convertedHTML = marked(markdownContent);
  const sanitizeHTML = sanitizeHtml(convertedHTML, {
    allowedTags: sanitizeHtml.defaults.allowedTags,
  });

  return turndownService.turndown(sanitizeHTML);
}

module.exports = sanitizeMarkdown;
