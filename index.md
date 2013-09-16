---
layout: default
title: An OpenGL library
---

{% assign glfwversion = site.tags.changelog.first.title %}
{% assign releasedate = site.tags.changelog.first.date %}

## Welcome

**GLFW** is an Open Source, multi-platform library for creating windows with
OpenGL contexts and managing input and events.  It is easy to integrate into
existing applications and does not lay claim to the main loop.

GLFW is written in C and has native support for Windows, Mac OS X and many
Unix-like systems using the X Window System, such as Linux and FreeBSD.

GLFW is licensed under the [zlib/libpng license](license.html).

{% row %}

{% col 2-3 %}
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
- [Language bindings](download.html#Bindings) for a lot of different languages

If GLFW isn't what you are looking for, there are
[alternatives](links.html#alternatives_to_glfw).
{% endcol %}

{% col 1-3 %}
### &emsp;

<a href="http://sourceforge.net/projects/glfw/files/glfw/{{ glfwversion }}/glfw-{{ glfwversion }}.zip/download">
<div class="button">
<p>Download GLFW {{ glfwversion }}</p>
<p><small>Released on 
<time datetime="{{ releasedate | date: "%Y-%m-%d" }}">
{{ releasedate | date: "%B %e, %Y" }}</time>
</small></p>
</div>
</a>

<a href="https://github.com/glfw/glfw">
<div class="button">
<p>Clone on GitHub</p>
</div>
</a>

{% endcol %}

{% endrow %}

---

## Latest news

{% row %}

{% for post in site.tags.news limit:3 %}
{% col 1-3 %}
<article>
<h3>{{ post.title }}</h3>
<time datetime="{{ post.date | date: "%Y-%m-%d" }}">
</time>

<h5>Posted on {{ post.date | date: "%B %e, %Y" }}</h5>

{{ post.content }}
</article>
{% endcol %}
{% endfor %}

{% endrow %}

See the [news archive](news.html) for older posts.
