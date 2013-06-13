---
layout: default
title: Download
---

{% comment %}Getting a list of all posts tagged changelog, sorted from newest to oldest{% endcomment %}
{% for post in site.tags.changelog %}

{% comment %}Getting first character of post title (Version string){% endcomment %}
{% capture major_version_string %}
{{ post.title | substring: 0, 1 }}
{% endcapture %}

{% comment %}Providing links to the latest mainline GLFW release{% endcomment %}
{% if major_version_string contains '3' %}

## Download

The current version is {{ post.title }}, which was released on
{{ post.date | date: "%B %e, %Y" }}.

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

The latest version of the 3.0 source code is always available in our
[Git repository](https://github.com/glfw/glfw).

{% break %}
{% endif %}
{% endfor %}
