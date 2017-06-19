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

### Linux and macOS binaries

Please download and compile the source package above.  There is a [guide for
compiling GLFW](/docs/latest/compile.html) in the documentation.

Some package systems, for example NuGet, MacPorts and Arch Linux include
relatively up-to-date GLFW packages, but most sadly do not.  If you intend to
use a GLFW package, please verify that its version fits your needs.

### Bindings

Bindings for other languages are created and maintained by the community and are
not part of GLFW itself.  Please [let us
know](https://github.com/glfw/website/issues) if any fully functional bindings
are missing in the list below.  We will happily list multiple bindings for the
same language.

| Language    | Maintainer          | Website |
| ----------- | ------------------- | ------- |
| Ada         | Felix Krause        | [https://github.com/flyx/OpenGLAda](https://github.com/flyx/OpenGLAda) |
| C#          | Andy Korth          | [https://github.com/andykorth/Pencil.Gaming](https://github.com/andykorth/Pencil.Gaming) |
| Common Lisp | Alex Charlton       | [https://github.com/AlexCharlton/cl-glfw3](https://github.com/AlexCharlton/cl-glfw3) |
| Crystal     | Caleb Harrison      | [https://github.com/calebuharrison/LibGLFW](https://github.com/calebuharrison/LibGLFW) |
| D           | Mike Parker         | [https://github.com/DerelictOrg/DerelictGLFW3](https://github.com/DerelictOrg/DerelictGLFW3) |
| Dart        | Harry Stern         | [https://github.com/google/dart-glfw](https://github.com/google/dart-glfw) |
| Duktape     | Laurent Zubiaur     | [https://github.com/lzubiaur/duk-glfw](https://github.com/lzubiaur/duk-glfw) |
| Go          | Coşku Baş           | [https://github.com/go-gl/glfw](https://github.com/go-gl/glfw) |
| Haskell     | Brian Lewis         | [https://github.com/bsl/GLFW-b](https://github.com/bsl/GLFW-b) |
| Java        | Nathan Sweet        | [https://github.com/badlogic/jglfw](https://github.com/badlogic/jglfw) |
| Julia       | Jay Weisskopf       | [https://github.com/JuliaGL/GLFW.jl](https://github.com/JuliaGL/GLFW.jl) |
| LuaJIT      | Oleg Dudka          | [https://github.com/Playermet/luajit-glfw](https://github.com/Playermet/luajit-glfw) |
| .NET        | Victor P. R. Müller | [https://github.com/realvictorprm/GLFW3.NET](https://github.com/realvictorprm/GLFW3.NET) |
| Nimrod      | Erik Andersson      | [https://github.com/EXetoC/nim-glfw](https://github.com/EXetoC/nim-glfw) |
| Node.js     | M. Damian Mulligan  | [https://github.com/glek/node-glfw-bindings](https://github.com/glek/node-glfw-bindings) |
| Node.js     | Mikaël Sévenier     | [https://github.com/mikeseven/node-glfw](https://github.com/mikeseven/node-glfw) |
| Python      | Florian Rhiem       | [https://github.com/FlorianRhiem/pyGLFW](https://github.com/FlorianRhiem/pyGLFW) |
| Python      | Nicolas P. Rougier  | [https://github.com/rougier/pyglfw](https://github.com/rougier/pyglfw) |
| Rebol       | François Jouen      | [https://github.com/ldci/glfw-rebol](https://github.com/ldci/glfw-rebol) |
| Red         | François Jouen      | [https://github.com/ldci/glfw-red](https://github.com/ldci/glfw-red) |
| Ruby        | Noel Cower          | [https://github.com/nilium/ruby-glfw3](https://github.com/nilium/ruby-glfw3) |
| Rust        | Brendan Zabarauskas | [https://github.com/bjz/glfw-rs](https://github.com/bjz/glfw-rs) |
| Scheme      | Tomas Möre          | [https://github.com/black0range/gambit-GLFW](https://github.com/black0range/gambit-GLFW) |

