# guicaro.github.io

Personal Jekyll website for `www.guicaro.com`, styled with a local jekyllBear-inspired theme.

## Requirements

- Ruby
- Jekyll

If Jekyll is not installed:

```sh
gem install jekyll
```

## Run Locally

```sh
jekyll serve
```

Open `http://localhost:4000`.

To include draft posts:

```sh
jekyll serve --drafts
```

## Build

```sh
jekyll build
```

The generated site is written to `_site/`.

## Site Structure

- `_config.yml` controls site metadata, permalinks, and navigation.
- `index.html` is the homepage.
- `blog.md` lists blog posts.
- `_posts/` contains published posts.
- `_layouts/` contains page, blog, and post templates.
- `_includes/` contains shared HTML partials.
- `assets/style.css` contains the active theme styles.
- `assets/img/` and `assets/docs/` contain static files.

## Notes

- This repo does not currently use a `Gemfile`.
- Old theme assets under `assets/css/`, `assets/scss/`, and `assets/js/` are retained but not loaded by the current layouts.
