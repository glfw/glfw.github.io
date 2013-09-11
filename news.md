---
layout: default
title: News archive
---

## News archive
<ul>
{% for post in site.tags.news %}
<li>
<time datetime="{{ post.date | date: "%Y-%m-%d" }}">
</time>
<span>{{ post.date | date: "%Y-%m-%d" }} &emsp;</span>
<a href="{{ post.url }}">
{{ post.title }}
</a>
</li>
{% endfor %}
</ul>
