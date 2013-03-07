---
layout: default
title: An OpenGL library
---

## Welcome

**GLFW** is a free, Open Source, multi-platform library for opening a window,
creating an OpenGL context and managing input.  It is easy to integrate into
existing applications and does not lay claim to the main loop.

GLFW is written in C and has native support for Windows, Mac OS X and many
Unix-like systems using the X Window System, such as Linux and FreeBSD.

GLFW is licensed under the [zlib/libpng license](license.html).

### Features
- Easy to use API in the style of the OpenGL APIs
- Gives you a window and OpenGL context with two function calls
- Explicit support for MSAA and OpenGL 3.2+, including profiles and flags
- Input can be either polled or delivered via callbacks
- Basic Unicode character input
- Supports both static and dynamic linking
- Open Source with a liberal OSI-certified [license](license.html)
- Makefiles or project files for most popular C/C++ compilers
- Examples and comprehensive [documentation](documentation.html)

If GLFW isn't what you are looking for, there are [alternatives](links.html#alternatives_to_glfw).

{% for post in site.posts %}
---
### {{ post.title }}
<span class="date">{{ post.date | date: "%b %d, %Y" }}</span>
{{ post.content }}
{% endfor %}

If you find any bugs, please help us by reporting them in our
[bug tracker](http://sourceforge.net/tracker/?group_id=72569).
If you encounter any problems using GLFW, please [contact us](community.html).
