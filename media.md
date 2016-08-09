---
layout: media
title: Media
---

{% row %}

{% col 2-3 %}
## Bindings

Bindings for other languages are created and maintained by the community and are
not part of GLFW itself.  Please [let us
know](https://github.com/glfw/website/issues) if any fully functional bindings
are missing in the list below.  We will happily list multiple bindings for the
same language.

| Language    | Maintainer          | Description |
| ----------- | ------------------- | ----------- |
| Ada         | Felix Krause        | [Programming Language Binding](https://github.com/flyx/OpenGLAda) |
| C++         | Giorgio Marcias     | [Wrapper Library](https://github.com/giorgiomarcias/glfwm) |
| C#          | Andy Korth          | [Programming Language Binding](https://github.com/andykorth/Pencil.Gaming) |
| Common Lisp | Alex Charlton       | [Programming Language Binding](https://github.com/AlexCharlton/cl-glfw3) |
| D           | Mike Parker         | [Programming Language Binding](https://github.com/DerelictOrg/DerelictGLFW3) |
| Dart        | Harry Stern         | [Programming Language Binding](https://github.com/google/dart-glfw) |
| Duktape     | Laurent Zubiaur     | [Programming Language Binding](https://github.com/lzubiaur/duk-glfw) |
| Go          | Coşku Baş           | [Programming Language Binding](https://github.com/go-gl/glfw) |
| Haskell     | Brian Lewis         | [Programming Language Binding](https://github.com/bsl/GLFW-b) |
| Java        | Nathan Sweet        | [Programming Language Binding](https://github.com/badlogic/jglfw) |
| Julia       | Jay Weisskopf       | [Programming Language Binding](https://github.com/JuliaGL/GLFW.jl) |
| LuaJIT      | Oleg Dudka          | [Programming Language Binding](https://github.com/Playermet/luajit-glfw) |
| Nimrod      | Erik Andersson      | [Programming Language Binding](https://github.com/EXetoC/nim-glfw) |
| Node.js     | Mikaël Sévenier     | [Programming Language Binding](https://github.com/mikeseven/node-glfw) |
| Python      | Florian Rhiem       | [Programming Language Binding](https://github.com/FlorianRhiem/pyGLFW) |
| Python      | Nicolas P. Rougier  | [Programming Language Binding](https://github.com/rougier/pyglfw) |
| Rebol       | François Jouen      | [Programming Language Binding](https://github.com/ldci/glfw-rebol) |
| Red         | François Jouen      | [Programming Language Binding](https://github.com/ldci/glfw-red) |
| Ruby        | Noel Cower          | [Programming Language Binding](https://github.com/nilium/ruby-glfw3) |
| Rust        | Brendan Zabarauskas | [Programming Language Binding](https://github.com/bjz/glfw-rs) |
| Scheme      | Tomas Möre          | [Programming Language Binding](https://github.com/black0range/gambit-GLFW) |
{% endcol %}

{% col 1-3 %}
## Media

As GLFW doesn't itself render anything and uses only standard window manager
decorations, there is little to show of GLFW itself.  Instead, here is a small
showcase of software using GLFW.

If you feel your application should be listed here, please
[contact us](community.html).

{% for post in site.tags.media %}

{% assign loopindex = forloop.index | modulo: 2 %}

{% if loopindex == 1 %}
<div class="pure-g-r">
{% endif %}

<div class="pure-u-1-2">
<div class="thumbnail">
<a href="{{ post.url }}" class="hint--bottom hint--rounded" aria-label="{{ post.title }}">
<img alt="{{ post.photoalt }}" src="{{ post.photomin }}">
</a>
</div>
</div>

{% if loopindex == 0 or forloop.last == true %}
</div>
{% endif %}

{% endfor %}
{% endcol %}

{% endrow %}
