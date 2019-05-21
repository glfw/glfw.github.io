---
layout: default
title: Version history
---

## Version history

This is the complete log of user-visible changes for each version since the
project started.  For a task oriented view of changes and additions in recent
versions, see the [release notes](/docs/latest/news.html).

{% for post in site.tags.changelog %}

<article>
<header>

<h3>Version {{ post.title }}</h3>
<small>Released on {% include time.html date=post.date %}</small>

</header>

{{ post.content }}

</article>
{% endfor %}

### Version 1.0.2
- Improved fullscreen functionality
- Added fullscreen support for X11

### Version 1.0.1
- Added support for the X Window System
- Fixed bugs

### Version 1.0
- First release
- Only supported Windows
