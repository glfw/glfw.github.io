---
layout: frontpage
title: An OpenGL library
---

{% assign glfwversion = site.tags.changelog.first.title %}
{% assign releasedate = site.tags.changelog.first.date %}

## Welcome

{% row %}

{% col 2-3 %}

**GLFW** is an Open Source, multi-platform library for creating windows with
OpenGL contexts and managing input and events.  It is easy to integrate into
existing applications and does not lay claim to the main loop.

GLFW is written in C and has native support for Windows, OS X and many Unix-like
systems using the X Window System, such as Linux and FreeBSD.

GLFW is licensed under the [zlib/libpng license](license.html).
{% endcol %}

{% col 1-3 %}

{% button http://sourceforge.net/projects/glfw/files/glfw/{{ glfwversion }}/glfw-{{ glfwversion }}.zip/download %}
Download GLFW {{ glfwversion }}
<br>
<small>Released on {% include time.html date=releasedate %}</small>
{% endbutton %}

{% button https://github.com/glfw/glfw %}
Clone on GitHub
{% endbutton %}

{% include milestone.html %}

{% endcol %}

{% endrow %}

---

{% include features.html %}

No library can be perfect for everyone, and GLFW is no exception.  If GLFW isn't
what you're looking for, there are [alternatives](alternatives.html).

---

## Latest news

{% row %}

{% for post in site.tags.news limit:3 %}
{% col 1-3 %}
<article>
<header>

<h3>{{ post.title }}</h3>
<small>
Posted on {% include time.html date=post.date %}
</small>

</header>

{{ post.content }}

</article>
{% endcol %}
{% endfor %}

{% endrow %}

See the [news archive](news.html) for older posts.
