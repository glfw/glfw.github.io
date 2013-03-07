---
layout: default
title: Patch submitter's guide
---

## Patch submitter's guide

### Introduction

This is an introductory guide for people wishing to contribute code to the GLFW
project.

Following the advice in this guide will both help getting your patch reviewed
quicker and will make it more likely to be accepted into the project.

---
### Important points

- Provide patch files in the [unified diff](http://en.wikipedia.org/wiki/Unified_diff) format
- Use our [coding standards](http://wiki.glfw.org/wiki/Coding_standards)
- Add good comments
- Provide a concise description of your patch
- Put only one feature (or closely related set of features) into a given patch

---
### How to create a patch

1. Check out the appropriate branch of the source tree
2. Make the appropriate changes to the sources
3. Produce a patch file in the [unified diff](http://en.wikipedia.org/wiki/Unified_diff) format
4. Submit the patch file to our
[patch tracker](https://sourceforge.net/tracker/?func=browse&group_id=72569&atid=534940),
including a description of both what the patch does and why it does it

---
### Naming scheme

The naming of patch files for GLFW follows this pattern:

{% highlight bash %}
glfw-<version>_<platform>_<key>.patch
{% endhighlight %}

For instance, if your patch is against GLFW version 2.6 and it adds support for
Foo on Win32, it would be called `glfw-2.6_win32_foo.patch`.
