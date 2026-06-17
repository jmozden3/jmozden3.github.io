source "https://rubygems.org"

# Build this site locally with the EXACT same versions GitHub Pages uses.
# The github-pages gem pins Jekyll, Kramdown, the minima theme, and every
# supported plugin (jekyll-feed / jekyll-sitemap / jekyll-seo-tag, which are
# activated via _config.yml) to GitHub's deployed versions — so a local
# `bundle exec jekyll serve` renders the same as the published site.
gem "github-pages", group: :jekyll_plugins

# Windows / JRuby don't ship timezone data; Jekyll needs it for dates.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Faster, more reliable file-watching for live-reload on Windows.
gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Ruby 3.4+ dropped these from the standard library; Jekyll 3.9 still expects them.
gem "webrick", "~> 1.8"
gem "csv"
gem "base64"
gem "logger"
