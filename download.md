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
### Source Code
<div class="pure-g-r">
<div class="pure-u-2-3">
<p>
These packages contain complete GLFW source code, CMake project files,
<a href="documentation.html">documentation</a>, examples and test programs.
</p>
<p>
The latest version of the source code, including tags for all releases,
 is always available in our <a href="https://github.com/glfw/glfw">Git repository</a>.
</p>
</div>
<div class="pure-u-1-3">
<a href="http://sourceforge.net/projects/glfw/files/glfw/{{ post.title }}/glfw-{{ post.title }}.zip/download">
<div class="button">Source Archive</div>
</a>
<a href="https://github.com/glfw/glfw">
<div class="button">Git Repository</div>
</a>
</div>
</div>

---
### Windows Binary Packages
<div class="pure-g-r">
<div class="pure-u-2-3">
<p>
These packages contain complete GLFW header file,
 <a href="documentation.html">documentation</a>,
 release mode dynamic and static libraries for Microsoft&trade; Visual C++
 2008, Visual C++ 2010, Visual C++ 2012 and MinGW.
</p>
</div>
<div class="pure-u-1-3">
<a href="http://sourceforge.net/projects/glfw/files/glfw/{{ post.title }}/glfw-{{ post.title }}.bin.WIN32.zip/download">
<div class="button">32-bit Windows Binaries</div>
</a>
<a href="http://sourceforge.net/projects/glfw/files/glfw/{{ post.title }}/glfw-{{ post.title }}.bin.WIN64.zip/download">
<div class="button">64-bit Windows Binaries</div>
</a>
</div>
</div>

### Linux and Mac OS X Binary Packages
Please use official packages provided by your Linux distribution.
Compiling from source is preferred method in case there isn't any
official packages available or access to bleeding edge GLFW is required.

---
### Bindings
Here is a list of GLFW bindings for other programming languages 
maintained and provided by volunteers and GLFW community.

| Language | Status   | Maintainer          | Project Page |
| -------- | -------- | ------------------- | ------------ |
| C#       | Active   | Antonie Blom        | [https://github.com/antonijn/Pencil.Gaming](https://github.com/antonijn/Pencil.Gaming) |
| D        | Active   | Mike Parker         | [https://github.com/aldacron/Derelict3/tree/master/import/derelict/glfw3](https://github.com/aldacron/Derelict3/tree/master/import/derelict/glfw3) |
| Go       | Active   | Coşku Baş           | [https://github.com/go-gl/glfw3](https://github.com/go-gl/glfw3) |
| Haskell  | Active   | Brian Lewis         | [https://github.com/bsl/GLFW-b](https://github.com/bsl/GLFW-b) |
| Java     | Active   | Nathan Sweet        | [https://github.com/badlogic/jglfw](https://github.com/badlogic/jglfw) |
| Python   | Inactive | Orson Peters        | [https://github.com/nightcracker/pyglfw](https://github.com/nightcracker/pyglfw) |
| Rust     | Active   | Brendan Zabarauskas | [https://github.com/bjz/glfw-rs](https://github.com/bjz/glfw-rs) |

{% endfor %}
