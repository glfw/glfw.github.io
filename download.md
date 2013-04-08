---
layout: default
title: Download
---

{% for post in site.tags.changelog limit:1 %}

## Download

The current version is {{ post.title }} ([release notes](release-{{ post.title }}.html)), which was
released on {{ post.date | date: "%B %e, %Y" }}.

---
### Source archive

<a class="download" href="http://sourceforge.net/projects/glfw/files/glfw/{{ post.title }}/glfw-{{ post.title }}.zip/download" title="Download Source (ZIP)">Download</a>

This contains:

- The complete source code for the GLFW library
- A collection of example and test programs
- Makefiles for many different compilers and systems
- Project files for Microsoft Visual C++ 2008, 2010 and 2012
- Bindings and examples for Pascal and D
- The [User Guide and Reference Manual](documentation.html)
- The [readme and release notes](release-{{ post.title }}.html)

This is the recommended version for all platforms.

---
### Binaries for 32-bit Windows

<a class="download" href="http://sourceforge.net/projects/glfw/files/glfw/{{ post.title }}/glfw-{{ post.title }}.bin.WIN32.zip/download" title="Download Win32 Binaries (ZIP)">Download</a>

This contains:

- The GLFW header file
- 32-bit release mode DLLs and static libraries for Microsoft&trade; Visual C++
  2008, Visual C++ 2010, Visual C++ 2012 and MinGW
- The [User Guide and Reference Manual](documentation.html)
- An abbreviated version of the release notes

---
### Binaries for 64-bit Windows

<a class="download" href="http://sourceforge.net/projects/glfw/files/glfw/{{ post.title }}/glfw-{{ post.title }}.bin.WIN64.zip/download" title="Download Win64 Binaries (ZIP)">Download</a>

This contains:

- The GLFW header file
- 64-bit release mode DLL and static library for Microsoft&trade; Visual C++
  2012 and MinGW-w64
- The [User Guide and Reference Manual](documentation.html)
- An abbreviated version of the release notes

---
## Subversion repository

The latest version of the 2.x source code is always available in our
[Subversion repository](http://sourceforge.net/scm/?type=svn&group_id=72569).

**Note** that the Subversion version may or may not be usable, depending on when
you do the checkout. If you wish to know more about the development version,
please [contact the developers](community.html).

{% endfor %}