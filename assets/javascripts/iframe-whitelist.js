(function() {
  if (Discourse.dialect_deprecated) { return; }

  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/www\.freesound\.org\/embed\/sound\/iframe\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/w\.soundcloud\.com\/player\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/graphics8\.nytimes\.com\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/www\.youtube\.com\/embed\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/discordapp\.com\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/countingdownto\.com\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/countingdownto\.com\/w\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/w2\.countingdownto\.com\/.+/i);
})();
