---
layout: default
title: Version history
---

## Version history
<ul>
{% for post in site.tags.changelog %}
<li>
<time datetime="{{ post.date | date: "%Y-%m-%d" }}">
</time>
<span>{{ post.date | date: "%Y-%m-%d" }} &emsp;</span>
<a href="{{ post.url }}">
Version {{ post.title }}
</a>
</li>
{% endfor %}
</ul>

---
### Version 1.0.2
- Improved fullscreen functionality
- Added fullscreen support for X11

---
### Version 1.0.1
- Added support for the X Window System
- Fixed bugs

---
### Version 1.0
- First release
- Only supported Windows
