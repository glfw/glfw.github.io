---
layout: default
title: Download
---

{% for post in site.tags.changelog limit:1 %}

## Download

The current version is **{{ post.title }}**, which was released on
<time datetime="{{ post.date | date: "%Y-%m-%d" }}">
{{ post.date | date: "%B %e, %Y" }}</time>.
See the [version history](changelog.html) for a list of changes.

---
### Source archive

<a class="download" href="http://sourceforge.net/projects/glfw/files/glfw/{{ post.title }}/glfw-{{ post.title }}.zip/download" title="Download Source (ZIP)">Download</a>

This contains:

- The complete source code for the GLFW library
- A collection of example and test programs
- CMake project files for the library and all programs
- Full [documentation](documentation.html)

This is the recommended version for all platforms.

---
### Binaries for 32-bit Windows

<a class="download" href="http://sourceforge.net/projects/glfw/files/glfw/{{ post.title }}/glfw-{{ post.title }}.bin.WIN32.zip/download" title="Download Win32 Binaries (ZIP)">Download</a>

This contains:

- The GLFW header file
- 32-bit release mode DLLs and static libraries for Microsoft&trade; Visual C++
  2008, Visual C++ 2010, Visual C++ 2012 and MinGW
- Full [documentation](documentation.html)

---
### Binaries for 64-bit Windows

<a class="download" href="http://sourceforge.net/projects/glfw/files/glfw/{{ post.title }}/glfw-{{ post.title }}.bin.WIN64.zip/download" title="Download Win64 Binaries (ZIP)">Download</a>

This contains:

- The GLFW header file
- 64-bit release mode DLL and static library for Microsoft&trade; Visual C++
  2012 and MinGW-w64
- Full [documentation](documentation.html)

---
## Git repository

The latest version of the source code, including tags for all releases, is
always available in our [Git repository](https://github.com/glfw/glfw).

{% endfor %}
