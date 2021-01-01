# GLFW website

This is the [Jekyll](https://jekyllrb.com/) source for the
[glfw.org](https://www.glfw.org/) website.

The sources for this website are under the [zlib/libpng
license](https://opensource.org/licenses/Zlib), the same as the library.

## Development environment setup

### Docker

Having [Docker](https://www.docker.com/) installed, spinning up a local Jekyll
development server is as easy as running:

```
docker-compose up
```

### Manual

Having [Ruby](https://www.ruby-lang.org/) properly installed and configured on
your machine, these Ruby gems should be manually installed as well:

```
gem install jekyll jekyll-seo-tag jekyll-sitemap rouge
```

Finally start the Jekyll development server by running:

```
jekyll serve
```

**Note**: Please set `JEKYLL_ENV=production` environment variable before running
production build.
