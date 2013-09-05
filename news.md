---
layout: default
title: News archive
---

## News archive
{% for post in site.tags.news %}
---
<article>
<a href="{{ post.url }}">
<h3>{{ post.title }}</h3>
</a>
<time datetime="{{ post.date | date: "%Y-%m-%d" }}">
</time>

<h5>Posted on {{ post.date | date: "%B %e, %Y" }}</h5>

{{ post.content }}
</article>
{% endfor %}
