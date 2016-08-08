---
layout: default
title: Download
---

{% assign glfwversion = site.tags.changelog.first.title %}
{% assign releasedate = site.tags.changelog.first.date | date: "%Y-%m-%d" %}

## Download

The current version is **{{ glfwversion }}**, which was released on
<strong>{% include time.html date=releasedate %}</strong>.
See the [version history](changelog.html) for a list of changes.

### Source package

{% row %}
{% col 2-3 %}
This package contains the complete source code, CMake build files,
[documentation](documentation.html), examples and test programs. It
is the recommended download for all platforms and offers the most control.

The latest version of the source code, including tags for all releases,
is always available in our Git repository.
{% endcol %}
{% col 1-3 %}
{% button https://github.com/glfw/glfw/releases/download/{{ glfwversion }}/glfw-{{ glfwversion }}.zip %}
Source package
{% endbutton %}
{% button https://github.com/glfw/glfw %}
GitHub repository
{% endbutton %}
{% endcol %}
{% endrow %}

### Windows pre-compiled binaries

{% row %}
{% col 2-3 %}
These packages contain complete GLFW header file,
[documentation](documentation.html) and release mode DLL and static
library binaries for Visual C++ 2010 (32-bit only), Visual C++ 2012, Visual C++
2013, Visual C++ 2015, MinGW (32-bit only) and MinGW-w64.
{% endcol %}
{% col 1-3 %}
{% button https://github.com/glfw/glfw/releases/download/{{ glfwversion }}/glfw-{{ glfwversion }}.bin.WIN32.zip %}
32-bit Windows binaries
{% endbutton %}
{% button https://github.com/glfw/glfw/releases/download/{{ glfwversion }}/glfw-{{ glfwversion }}.bin.WIN64.zip %}
64-bit Windows binaries
{% endbutton %}
{% endcol %}
{% endrow %}

### Linux and OS X binaries

Please download and compile the source package above.  There is a [guide for
compiling GLFW](/docs/latest/compile.html) in the documentation.

Some package systems, for example NuGet, MacPorts and Arch Linux include
relatively up-to-date GLFW packages, but most sadly do not.  If you intend to
use a GLFW package, please verify that its version fits your needs.
