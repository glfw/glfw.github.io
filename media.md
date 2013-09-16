---
layout: default
title: Media
---

## Media

As GLFW doesn't itself render anything and uses only standard window manager
decorations, there is little to show of GLFW itself.  Instead, here is a small
showcase of software using GLFW.

If you feel your application should be listed here, please
[contact us](community.html).

{% for post in site.tags.media %}
---

### {{ post.title }}

{% row %}

{% col 1-2 %}
{{ post.content }}
{% endcol %}
{% col 1-2 %}
![{{ post.photoalt }}]({{ post.photourl }})

<p class="note">{{ post.copynotice }}</p>
{% endcol %}
{% endrow %}

{% endfor %}
