---
layout: default
title: Download
---

{% for post in site.tags.changelog limit:1 %}

## Download

The current version is **{{ post.title }}**, which was released on
**<time datetime="{{ post.date | date: "%Y-%m-%d" }}">
{{ post.date | date: "%B %e, %Y" }}</time>**.
See the [version history](changelog.html) for a list of changes.

### Source package

{% row %}
{% col 2-3 %}
This package contains the complete source code, CMake build files,
[documentation](documentation.html), examples and test programs. It
is the recommended download for all platforms and offers the most control.

The latest version of the source code, including tags for all releases,
is always available in our [Git repository](https://github.com/glfw/glfw).
{% endcol %}
{% col 1-3 %}
<a href="http://sourceforge.net/projects/glfw/files/glfw/{{ post.title }}/glfw-{{ post.title }}.zip/download">
<div class="button">Source package</div>
</a>
{% endcol %}
{% endrow %}

### Windows pre-compiled binaries

{% row %}
{% col 2-3 %}
These packages contain complete GLFW header file,
[documentation](documentation.html) and release mode DLL and static
library binaries for Visual C++ 2010, Visual C++ 2012 and MinGW / MinGW-w64.
{% endcol %}
{% col 1-3 %}
<a href="http://sourceforge.net/projects/glfw/files/glfw/{{ post.title }}/glfw-{{ post.title }}.bin.WIN32.zip/download">
<div class="button">32-bit Windows binaries</div>
</a>
<a href="http://sourceforge.net/projects/glfw/files/glfw/{{ post.title }}/glfw-{{ post.title }}.bin.WIN64.zip/download">
<div class="button">64-bit Windows binaries</div>
</a>
{% endcol %}
{% endrow %}

### Linux and OS X binaries

Please compile from source or (where available) use the binaries provided by your package system.

### Bindings

Here is a list of GLFW bindings for other programming languages 
maintained and provided by volunteers and GLFW community.

| Language | Maintainer          | Website |
| -------- | ------------------- | ------- |
| C#       | Antonie Blom        | [https://github.com/antonijn/Pencil.Gaming](https://github.com/antonijn/Pencil.Gaming) |
| D        | Mike Parker         | [https://github.com/aldacron/Derelict3](https://github.com/aldacron/Derelict3) |
| Go       | Coşku Baş           | [https://github.com/go-gl/glfw3](https://github.com/go-gl/glfw3) |
| Haskell  | Brian Lewis         | [https://github.com/bsl/GLFW-b](https://github.com/bsl/GLFW-b) |
| Java     | Nathan Sweet        | [https://github.com/badlogic/jglfw](https://github.com/badlogic/jglfw) |
| Ruby     | Noel Cower          | [https://github.com/nilium/ruby-glfw3](https://github.com/nilium/ruby-glfw3) |
| Rust     | Brendan Zabarauskas | [https://github.com/bjz/glfw-rs](https://github.com/bjz/glfw-rs) |

{% endfor %}
