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

<div class="pure-g-r">

<div class="pure-u-2-3">
<h3>Features</h3>
<ul>
<li>Easy to use API in the style of the OpenGL APIs</li>
<li>Gives you a window and OpenGL context with two function calls</li>
<li>Explicit support for MSAA, sRGB, robustness, OpenGL 3.2+ and OpenGL ES</li>
<li>Support for multiple monitors, high-DPI, gamma ramps and clipboard</li>
<li>Input can be either polled or delivered via callbacks</li>
<li>UTF-8 for all strings and basic Unicode character input</li>
<li>Supports both static and dynamic linking</li>
<li>Open Source with a liberal OSI-certified <a href="license.html">license</a></li>
<li>Examples and comprehensive <a href="documentation.html">documentation</a></li>
</ul>

If GLFW isn't what you are looking for, there are
<a href="links.html#alternatives_to_glfw">alternatives</a>.
</div>

<div class="pure-u-1-3">
<h3>Get Latest Stable Release</h3>
{% for post in site.tags.changelog limit:1 %}
<h4>Release date:
<time datetime="{{ post.date | date: "%Y-%m-%d" }}">
{{ post.date | date: "%B %e, %Y" }}</time></h4>
<a href="download.html">
<div class="button">
<h1>GLFW {{ post.title }}</h1>
<h4>Ready For Download!</h4>
</div>
</a>
{% endfor %}
</div>

</div>

---

## Latest News
<div class="pure-g-r">

{% for post in site.tags.news limit:3 %}
<div class="pure-u-1-3">
<article>
<h3>{{ post.title }}</h3>
<time datetime="{{ post.date | date: "%Y-%m-%d" }}">
</time>

<h5>Posted on {{ post.date | date: "%B %e, %Y" }}</h5>

{{ post.content }}
</article>
</div>
{% endfor %}

</div>

See the <a href="news.html">news archive</a> for older posts.
