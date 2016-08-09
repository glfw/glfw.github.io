---
layout: default
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

| Language    | Maintainer          | Website |
| ----------- | ------------------- | ------- |
| Ada         | Felix Krause        | [https://github.com/flyx/OpenGLAda](https://github.com/flyx/OpenGLAda) |
| C#          | Andy Korth          | [https://github.com/andykorth/Pencil.Gaming](https://github.com/andykorth/Pencil.Gaming) |
| Common Lisp | Alex Charlton       | [https://github.com/AlexCharlton/cl-glfw3](https://github.com/AlexCharlton/cl-glfw3) |
| D           | Mike Parker         | [https://github.com/DerelictOrg/DerelictGLFW3](https://github.com/DerelictOrg/DerelictGLFW3) |
| Dart        | Harry Stern         | [https://github.com/google/dart-glfw](https://github.com/google/dart-glfw) |
| Duktape     | Laurent Zubiaur     | [https://github.com/lzubiaur/duk-glfw](https://github.com/lzubiaur/duk-glfw) |
| Go          | Coşku Baş           | [https://github.com/go-gl/glfw](https://github.com/go-gl/glfw) |
| Haskell     | Brian Lewis         | [https://github.com/bsl/GLFW-b](https://github.com/bsl/GLFW-b) |
| Java        | Nathan Sweet        | [https://github.com/badlogic/jglfw](https://github.com/badlogic/jglfw) |
| Julia       | Jay Weisskopf       | [https://github.com/JuliaGL/GLFW.jl](https://github.com/JuliaGL/GLFW.jl) |
| LuaJIT      | Oleg Dudka          | [https://github.com/Playermet/luajit-glfw](https://github.com/Playermet/luajit-glfw) |
| Nimrod      | Erik Andersson      | [https://github.com/EXetoC/nim-glfw](https://github.com/EXetoC/nim-glfw) |
| Node.js     | Mikaël Sévenier     | [https://github.com/mikeseven/node-glfw](https://github.com/mikeseven/node-glfw) |
| Python      | Florian Rhiem       | [https://github.com/FlorianRhiem/pyGLFW](https://github.com/FlorianRhiem/pyGLFW) |
| Python      | Nicolas P. Rougier  | [https://github.com/rougier/pyglfw](https://github.com/rougier/pyglfw) |
| Rebol       | François Jouen      | [https://github.com/ldci/glfw-rebol](https://github.com/ldci/glfw-rebol) |
| Red         | François Jouen      | [https://github.com/ldci/glfw-red](https://github.com/ldci/glfw-red) |
| Ruby        | Noel Cower          | [https://github.com/nilium/ruby-glfw3](https://github.com/nilium/ruby-glfw3) |
| Rust        | Brendan Zabarauskas | [https://github.com/bjz/glfw-rs](https://github.com/bjz/glfw-rs) |
| Scheme      | Tomas Möre          | [https://github.com/black0range/gambit-GLFW](https://github.com/black0range/gambit-GLFW) |
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
<a href="{{ post.url }}">
<img alt="{{ post.photoalt }}" src="{{ post.photourl }}">
</a>
</div>
</div>

{% if loopindex == 0 or forloop.last == true %}
</div>
{% endif %}

{% endfor %}
{% endcol %}

{% endrow %}
