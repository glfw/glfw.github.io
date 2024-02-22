---
layout: default
title: An OpenGL library
description: GLFW project home page.
---

{% assign glfw_version = site.changelogs.last.version %}
{% assign release_date = site.changelogs.last.date %}

{% assign url_repo = "https://github.com/glfw/glfw" %}

{% capture url_dist_src %}
{{ url_repo  }}/releases/download/{{ glfw_version }}/glfw-{{ glfw_version }}.zip
{% endcapture %}

<div class="pure-g">
<div class="pure-u-1 pure-u-md-15-24" markdown="1">
**GLFW** is an Open Source, multi-platform library for OpenGL, OpenGL ES and
Vulkan development on the desktop.  It provides a simple API for creating
windows, contexts and surfaces, receiving input and events.

GLFW is written in C and supports Windows, macOS, Wayland and X11.

GLFW is licensed under the [zlib/libpng license](license.html).

</div>
<div class="pure-u-1 pure-u-md-1-24"></div>
<div class="pure-u-1 pure-u-md-8-24" markdown="1">

{% capture dl_btn_label %}
Download GLFW {{ glfw_version }}
<br>
<small>Released on {% include time.html date=release_date %}</small>
{% endcapture %}
{% include button.html link=url_dist_src label=dl_btn_label %}

{% include button.html link=url_repo label="Clone on GitHub" %}

{% include milestone.html %}

</div>
</div>

<br/>

<div class="pure-g">
<div class="pure-u-1 pure-u-md-15-24" markdown="1">

{% include features.html %}

No library can be perfect for everyone.  If GLFW isn't what you're looking for,
there are
[alternatives](https://www.opengl.org/wiki/Related_toolkits_and_APIs).

</div>
<div class="pure-u-1 pure-u-md-1-24"></div>
<div class="pure-u-1 pure-u-md-8-24" markdown="1">

{% for post in site.tags.news limit:3 %}
<article>
<header>

<h3>{{ post.title }}</h3>
<small>
Posted on {% include time.html date=post.date %}
</small>

</header>

{{ post.content }}

</article>
{% endfor %}

See the [news archive](news.html) for older posts.

</div>
</div>
