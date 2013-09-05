---
layout: default
title: Version history
---

## Version history
{% for post in site.tags.changelog %}
---
<article>
<a href="{{ post.url }}">
<h3>Version {{ post.title }}</h3>
</a>
<time datetime="{{ post.date | date: "%Y-%m-%d" }}">
</time>

<h5>Released on {{ post.date | date: "%B %e, %Y" }}</h5>

{{ post.content }}
</article>
{% endfor %}

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
