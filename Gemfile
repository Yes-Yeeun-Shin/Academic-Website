source "https://rubygems.org"

# Jekyll core
gem "jekyll", "~> 4.3"
gem "webrick", "~> 1.7"   # jekyll serve에 필요 (Ruby 3.x)

# Core plugins that directly affect site building
group :jekyll_plugins do
  gem "jekyll-environment-variables"
  gem "jekyll-archives-v2"
  gem "jekyll-email-protect"
  gem "jekyll-feed"
  gem "jekyll-get-json"
  gem "jekyll-imagemagick"
  gem "jekyll-jupyter-notebook"
  gem "jekyll-link-attributes"
  gem "jekyll-minifier"
  gem "jekyll-paginate-v2"     # ← v2만 사용
  gem "jekyll-regex-replace"
  gem "jekyll-scholar"
  gem "jekyll-sitemap"
  gem "jekyll-tabs"
  gem "jekyll-terser", git: "https://github.com/RobertoJBeltran/jekyll-terser.git"
  gem "jekyll-toc"
  gem "jekyll-twitter-plugin"
  gem "jemoji"
  gem "classifier-reborn"      # 빌드 중 콘텐츠 분류에 사용
end

# For development or external data fetching
group :other_plugins do
  gem "css_parser"
  gem "feedjira"
  gem "httparty"
  gem "observer"       # jekyll-scholar가 사용
  gem "ostruct"        # jekyll-twitter-plugin이 사용
  # gem "terser"       # jekyll-terser가 내부적으로 쓸 때만
end

gem "nokogiri", "~> 1.18"
