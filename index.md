---
layout: default
title: An OpenGL library
---

## Welcome

**GLFW** is an Open Source, multi-platform library for creating windows with
OpenGL contexts and managing input and events.  It is easy to integrate into
existing applications and does not lay claim to the main loop.

GLFW is written in C and has native support for Windows, Mac OS X and many
Unix-like systems using the X Window System, such as Linux and FreeBSD.

GLFW is licensed under the [zlib/libpng license](license.html).

### Features
- Easy to use API in the style of the OpenGL APIs
- Gives you a window and OpenGL context with two function calls
- Explicit support for MSAA, sRGB, robustness, OpenGL 3.2+ and OpenGL ES
- Support for multiple monitors, high-DPI, gamma ramps and clipboard
- Input can be either polled or delivered via callbacks
- UTF-8 for all strings and basic Unicode character input
- Supports both static and dynamic linking
- Open Source with a liberal OSI-certified [license](license.html)
- Examples and comprehensive [documentation](documentation.html)

If GLFW isn't what you are looking for, there are
[alternatives](links.html#alternatives_to_glfw).

{% for post in site.tags.news limit:10 %}
---
<a href="{{ post.url }}">
<h3>{{ post.title }}</h3>
<span class="date">
<div class="dateday">{{ post.date | date: "%e" }}</div>
<div>{{ post.date | date: "%b" }}</div>
<div class="dateyear">{{ post.date | date: "%Y" }}</div>
</span>
</a>

{{ post.content }}
{% endfor %}

---
<p>See the <a href="news.html">news archive</a> for older posts.</p>
