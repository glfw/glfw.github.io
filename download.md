---
layout: default
title: Download
description: GLFW source code and binary distribution download links.
---

{% assign glfw_version = site.changelogs.last.version %}
{% assign release_date = site.changelogs.last.date | date: "%Y-%m-%d" %}

{% assign url_repo = "https://github.com/glfw/glfw" %}

{% capture url_dist_src %}
{{ url_repo  }}/releases/download/{{ glfw_version }}/glfw-{{ glfw_version }}.zip
{% endcapture %}

{% capture url_dist_bin_win64 %}
{{ url_repo  }}/releases/download/{{ glfw_version }}/glfw-{{ glfw_version }}.bin.WIN64.zip
{% endcapture %}

{% capture url_dist_bin_win32 %}
{{ url_repo  }}/releases/download/{{ glfw_version }}/glfw-{{ glfw_version }}.bin.WIN32.zip
{% endcapture %}

{% capture url_dist_bin_macos %}
{{ url_repo  }}/releases/download/{{ glfw_version }}/glfw-{{ glfw_version }}.bin.MACOS.zip
{% endcapture %}

## Download

The current version is **{{ glfw_version }}**, which was released on
<strong>{% include time.html date=release_date %}</strong>.
See the [release notes](docs/latest/news.html) for details.

### Source package

<div class="pure-g">
<div class="pure-u-1 pure-u-md-15-24" markdown="1">
This package contains the complete source code with CMake build files,
[documentation](docs/latest/), examples and test programs. It
is the recommended download for all platforms and offers the most control.

All development is done on GitHub.  The `master` branch is our integration
branch for the next feature release while the `3.3-stable` branch only adds bug
fixes for patch releases.
</div>
<div class="pure-u-1 pure-u-md-1-24"></div>
<div class="pure-u-1 pure-u-md-8-24" markdown="1">
{% include button.html link=url_dist_src label="Source package" %}
{% include button.html link=url_repo label="GitHub repository" %}
</div>
</div>

### Windows pre-compiled binaries

<div class="pure-g">
<div class="pure-u-1 pure-u-md-15-24" markdown="1">
These packages contain the GLFW header files, [documentation](docs/latest/) and
release mode static libraries, DLLs and import libraries for Visual C++
2010-2019, MinGW-w64 and plain MinGW.

Binaries for Visual C++ 2010 and plain MinGW are only available in the 32-bit
package.
</div>
<div class="pure-u-1 pure-u-md-1-24"></div>
<div class="pure-u-1 pure-u-md-8-24" markdown="1">
{% include button.html link=url_dist_bin_win64 label="64-bit Windows binaries" %}
{% include button.html link=url_dist_bin_win32 label="32-bit Windows binaries" %}
</div>
</div>

### macOS pre-compiled binaries

<div class="pure-g">
<div class="pure-u-1 pure-u-md-15-24" markdown="1">
This package contains the GLFW header files, [documentation](docs/latest/) and
release mode static and dynamic libraries for macOS 10.8 and later.  Both Intel,
ARM and Universal binaries are included.
</div>
<div class="pure-u-1 pure-u-md-1-24"></div>
<div class="pure-u-1 pure-u-md-8-24" markdown="1">
{% include button.html link=url_dist_bin_macos label="64-bit macOS binaries" %}
</div>
</div>

### Linux and BSD binaries

Check if your package system provides GLFW {{ glfw_version }} or another version
new enough to be useful to you.

If not, please download and [compile GLFW from
source](docs/latest/compile.html).  A source package is available above, or you
could [clone it from GitHub](https://github.com/glfw/glfw).

