---
layout: default
title: FAQ
---

## Frequently Asked Questions

This page attempts to address some of the most commonly asked questions that we
have received from GLFW users.

If your questions are not answered here, please do
[contact us](community.html).

---
## Table of Contents

### Introduction

- [1.1 What is GLFW?](#11__what_is_glfw)
- [1.2 What is GLFW not?](#12__what_is_glfw_not)
- [1.3 Why yet another OpenGL toolkit?](#13__why_yet_another_opengl_toolkit)
- [1.4 What platforms are supported by GLFW?](#14__what_platforms_are_supported_by_glfw)
- [1.5 What versions of OpenGL are supported by GLFW?](#15__what_versions_of_opengl_are_supported_by_glfw)


### General Questions

- [2.1 Why use separate red/green/blue bit depths?](#21__why_use_separate_redgreenblue_bit_depths)
- [2.2 Why is it not possible to change video modes after a window has been opened?](#22__why_is_it_not_possible_to_change_video_modes_after_a_window_has_been_opened)
- [2.3 What texture file formats does GLFW support?](#23__what_texture_file_formats_does_glfw_support)
- [2.4 Will sound support be added to GLFW?](#24__will_sound_support_be_added_to_glfw)
- [2.5 Will font or text rendering support be added to GLFW?](#25__will_font_or_text_rendering_support_be_added_to_glfw)
- [2.6 Will pop-up menu support be added to GLFW?](#26__will_popup_menu_support_be_added_to_glfw)
- [2.7 Will message box support be added to GLFW?](#27__will_message_box_support_be_added_to_glfw)
- [2.8 What is Unicode and ISO 8859-1?](#28__what_is_unicode_and_iso_88591)
- [2.9 Is GLFW thread safe?](#29__is_glfw_thread_safe)
- [2.10 Can I check several keys at once?](#210__can_i_check_several_keys_at_once)
- [2.11 What timer APIs does GLFW use?](#211__what_timer_apis_does_glfw_use)
- [2.12 What window system APIs does GLFW use?](#212__what_window_system_apis_does_glfw_use)
- [2.13 Why doesn't your gl.h have the functions I need?](#213__why_doesnt_your_glh_have_the_functions_i_need)
- [2.14 Why do my objects look all wrong?](#214__why_do_my_objects_look_all_wrong)
- [2.15 Can I use GLEW with GLFW?](#215__can_i_use_glew_with_glfw)
- [2.16 Can any of the parameters to glfwOpenWindow be zero?](#216__can_any_of_the_parameters_to_glfwopenwindow_be_zero)
- [2.17 How do I use C++ methods as callbacks?](#217_how_do_i_use_c_methods_as_callbacks)


### Windows Specific Questions

- [3.1 What compilers are supported by GLFW?](#31__what_compilers_are_supported_by_glfw)
- [3.2 Why do I get link errors when trying to build my program?](#32__why_do_i_get_link_errors_when_trying_to_build_my_program)
- [3.3 Why doesnt glfwSwapInterval work?](#33__why_doesnt_glfwswapinterval_work)


### Mac OS X Specific Questions

- [4.1 Why can I not focus or interact with my program window?](#41__why_can_i_not_focus_or_interact_with_my_program_window)
- [4.2 How do I create an OpenGL 3.2 context?](#42__how_do_i_create_an_opengl_30_context)


### Unix/X11 Specific Questions

- [5.1 Why doesn't glfwOpenWindow work in my private build?](#51__why_doesnt_glfwopenwindow_work_in_my_private_build)


---
## Introduction

### 1.1 - What is GLFW?

GLFW is a small C library that lets you create and manage an OpenGL context and
its associated window, enumerate and change display modes, as well as handle
inputs such as keyboard, mouse, joystick and time.

GLFW provides a thin, multi-platform abstraction layer, primarily for
applications whose sole graphics output is through the OpenGL API.  While GLFW
is very useful when developing multi-platform OpenGL applications,
single-platform developers can also benefit from avoiding the drudgery of kludgy
platform-specific APIs.

The reason that libraries like GLFW are needed is that OpenGL by itself does not
provide any mechanisms for creating the necessary context, managing windows,
user input, timing etc.  As stated in the OpenGL 3.1 Specification (chapter 2,
first paragraph):

> OpenGL is concerned only with rendering into a framebuffer (and reading values
> stored in that framebuffer). There is no support for other peripherals
> sometimes associated with graphics hardware, such as mice and keyboards.
> Programmers must rely on other mechanisms to obtain user input.

GLFW matches the description of *other mechanisms* quite well.

### 1.2 - What is GLFW not?

GLFW is *by design* not...


- a user interface library.  It allows you to create a single, OpenGL-capable
  window.  No menus, no buttons.
- an image loading library.  It has a legacy facility for loading Targa files
  for testing purposes, nothing more.
- a Windows-only library.  Requests for features that cannot be portably
  implemented *will be denied* unless they are unobtrusive (like the Win32 port
  looking for a `GLFW_ICON` resource).
- capable of rendering text.  There are already several libraries that render
  text with OpenGL, and consistent cross-platform text rendering cannot depend
  on the platform's text rendering facilities anyway.
- capable of rendering anything at all.  Rendering is up to you and/or other
  libraries.
- equipped with a menu system.
- integrated into *any* user interface toolkit on *any* platform.  Good UI
  toolkits already provide OpenGL-capable widgets.
- able to play back sound.
- GLUT or SDL.


### 1.3 - Why yet another OpenGL toolkit?

There are already [several toolkits](links.html#alternatives_to_glfw)
available for aiding OpenGL development.  The most commonly used are
[freeglut](http://freeglut.sourceforge.net/), an Open Source
implementation of GLUT, and [SDL](http://www.libsdl.org/).

However, GLUT is getting quite old and freeglut is mostly concerned with
providing a stable clone of it, while SDL is sometimes tricky to integrate into
existing code and has never had OpenGL as its main focus.

We therefore believe that there is room for a lightweight, modern library for
managing OpenGL contexts, windows and input.

### 1.4 - What platforms are supported by GLFW?

Currently, GLFW supports Windows, Mac OS X and Unix-like operating systems with
the X Window System, such as Linux and FreeBSD.

GLFW is designed to be as portable as possible, and the code has been written
with portability in mind.

### 1.5 - What versions of OpenGL are supported by GLFW?

This question likely stems from the original version of the
[`WGL_ARB_create_context`](http://www.opengl.org/registry/specs/ARB/wgl_create_context.txt)
and
[`GLX_ARB_create_context`](http://www.opengl.org/registry/specs/ARB/glx_create_context.txt)
extensions, which stated that the old context creation mechanism would be
limited to OpenGL version 2.1.  However, this is no longer the case and the
specifications have been updated accordingly.

GLFW 2.6 and earlier use only the older context creation mechanism, which
on Windows and X11 may return contexts of any version, however new, provided
they implement the
[`ARB_compatibility`](http://www.opengl.org/registry/specs/ARB/compatibility.txt)
extension.  Most modern drivers do this.

Explicit creation of OpenGL contexts of version 3.0 and above on Windows and
X11, including profiles and flags, is supported by GLFW 2.7 and later.

However, Mac OS X did not support OpenGL 3.0 or later at the time that GLFW 2.7
was released, and the support that Apple has since added only includes
forward-compatible OpenGL 3.2 core profile contexts.  Additionally, creating
such contexts requires new code, so older versions of GLFW cannot create
OpenGL 3.0 contexts on Mac OS X.

The first version of to support creation of OpenGL 3.2 contexts on OS X Lion was
GLFW 2.7.2.

---
## General Questions

### 2.1 - Why use separate red/green/blue bit depths?

In short, because it more closely matches the way most platforms describe
OpenGL-capable pixel formats, which in the past actually mattered.

Today, when nearly everyone just asks for 24-bit color and gets it, it matters
less.  It does, however, make the API slightly more future-proof, as the values
specified can be passed nearly unmodified to the window system.

This doesn't, of course, prevent you from presenting the familiar, single value
color depths to the user.

### 2.2 - Why is it not possible to change video modes after a window has been opened?

There is limited support for mode switching in the form of `glfwSetWindowSize`.
In fullscreen mode, this will change the video mode to that closest matching the
current mode, with refresh mode and color depth preserved.

However, some cards do not behave well when the video mode is changed once the
window has been opened.  Also, under X Window System it is only possible to set
the color depth of an OpenGL window at the time of creating the OpenGL context
(i.e. when opening the window).

### 2.3 - What texture file formats does GLFW support?

**Note that the image and texture loading facilities are deprecated and have
been [removed](http://wiki.glfw.org/wiki/Rationale_for_removing) in GLFW 3.0.**

Through the `glfwReadImage` and `glfwLoadTexture2D` functions, GLFW supports the
Truevision Targa version 1 (TGA) file format.

Supported pixel formats are: 8-bit gray-scale, 24-bit RGB, 32-bit RGBA and
colormap (24/32-bit colors). Note that colormap images are always converted to
24-bit or 32-bit true color. Files that are RLE encoded (compressed) are also
supported.

### 2.4 - Will sound support be added to GLFW?

No.

However, if you are looking for an OpenGL-like API for sound, have a look at
[OpenAL](http://connect.creativelabs.com/openal/).

### 2.5 - Will font or text rendering support be added to GLFW?

No.

There are already several competent font rendering toolkits available for
OpenGL, none of which require integration with a context or window management
library.

### 2.6 - Will pop-up menu support be added to GLFW?

No.

### 2.7 - Will message box support be added to GLFW?

Not right now.

The main issue keeping this from being added is the lack of a standard,
Unicode-enabled UI toolkit on Unix-like systems such as Linux and FreeBSD.
Depending on, say, Gtk+, would therefore introduce a dependency on a huge amount
of code not necessarily present on the user's machine.

As there is no reason why message box code has to be integrated into GLFW,
it is better to leave that functionality to a separate library.

### 2.8 - What is Unicode and ISO 8859-1?

**Unicode** (sometimes referred to as ISO 10646), is a character coding standard
that encodes virtually every character from every written language in the world
into a common character set. It is gaining acceptance worldwide, and today most
platforms, computer languages and APIs have some sort of support for Unicode
(GLFW now being one of them).

*Visit
[The Unicode Consortium](http://www.unicode.org)
for more information about Unicode.*

*See also
[Wikipedia on Unicode](http://en.wikipedia.org/wiki/Unicode).*

**ISO 8859-1** (also known as *Latin 1*), is a very limited subset of the
Unicode character set. It represents the lowest 0-255 codes of the Unicode
character set, and can thus be coded with a single byte.  Character codes 32-126
are equal to the US-ASCII character set. However, with the additional character
codes 160-255, ISO 8859-1 is able to support many European languages.

*See also
[Wikipedia on ISO 8859-1](http://en.wikipedia.org/wiki/ISO/IEC_8859-1).*

### 2.9 - Is GLFW thread safe?

No.  However, neither is OpenGL.

**Note that the threading facilities are deprecated and have been
[removed](http://wiki.glfw.org/wiki/Rationale_for_removing) in GLFW 3.0.**

The threading part of the GLFW API (threads, mutexes and condition variables) is
thread safe, as is the `glfwSleep` function.  Other functions are NOT thread
safe, and calling them from different threads may result in an inconsistent GLFW
state.

It is strongly recommended that all OpenGL and GLFW calls (except for thread
management and synchronization calls) are made from the main thread, which
should not be a big problem since only a single window is supported. This method
is also compatible with the future direction of GLFW.

### 2.10 - Can I check several keys at once?

Yes, you can.

The function `glfwGetKey` lets you check the state of any keyboard key
(including special keys). You can even call the function from within a callback
function, which makes it possible to check for things like CTRL+F3 key events
(when you get a `GLFW_KEY_F3` key press event, check the state of the left or
right CTRL key with `glfwGetKey(GLFW_KEY_LCTRL)` or
`glfwGetKey(GLFW_KEY_RCTRL)`, or both).

### 2.11 - What timer APIs does GLFW use?

On Windows, the `QueryPerformanceCounter` API is used if available, with
`timeGetTime` as a fallback.

On Mac OS X, the Cocoa port uses `mach_absolute_time` and the legacy Carbon port
uses `gettimeofday`.

On Unix-like operating systems using the X11 port, the POSIX `CLOCK_MONOTONIC`
time source is used if available, with `gettimeofday` as a fallback.

### 2.12 - What window system APIs does GLFW use?

On Windows, plain Win32 is used for window and input management, and WGL (with
extensions) is used to create contexts.

On Mac OS X, Cocoa is used for window and input management, and NSOpenGL for
context creation.

On Unix-like systems using the X Window System, the Xlib API is used for window
and input management, the XRandR or XF86VidMode extension (if available) for
display mode management, and GLX (with extensions) for context creation.

There is also a legacy Carbon port available for use on older versions of
Mac OS X, using AGL for windowed context creation and CGL for fullscreen
context creation.  Note that this port only allows 32-bit applications.

### 2.13 - Why doesn't your gl.h have the functions I need?

GLFW does not provide any version of either `gl.h` or `glu.h`.  The `glfw.h`
header file includes the versions already present in your development
environment.

However, if you are using Windows, you cannot get anything newer than
OpenGL 1.2 without using extensions.  As the extension management in GLFW is
very rudimentary, we recommend that you use a dedicated extension loading
library such as
[GLEW](http://glew.sourceforge.net/) or
[GLee](http://elf-stone.com/glee.php).

### 2.14 - Why do my objects look all wrong?

GLFW does not exist between your code and OpenGL.  Think instead of GLFW as
connecting your code to OpenGL and then getting out of the way.  If you get
incorrect rendering results, it is therefore most likely due to errors in your
code, the OpenGL implementation or both.

### 2.15 - Can I use GLEW with GLFW?

Yes, as long as you include the GLEW header before the GLFW one.  The GLEW
header defines all the necessary magic macros to make sure the `gl.h` that GLFW
attempts to include doesn't interfere.

### 2.16 - Can any of the parameters to glfwOpenWindow be zero?

Yes.  In fact, all parameters except the window mode can be zero, i.e.  this is
perfectly legal:

{% highlight c %}
glfwOpenWindow(0, 0, 0, 0, 0, 0, 0, 0, GLFW_WINDOW);
{% endhighlight %}

Any parameter that is zero gets its desired value chosen by GLFW.  Then, all
parameters except the window mode are matched as closely as possible to what is
available on the system.  However, only the following parameters and hints are
required to match exactly:


- The window mode (i.e. the last parameter to `glfwOpenWindow`)
- The `GLFW_STEREO` hint
- The `GLFW_OPENGL_PROFILE` hint, if set to a non-zero value
- The `GLFW_OPENGL_FORWARD_COMPAT` hint


To find out the actual properties of the window and OpenGL context, use the
`glfwGetWindowParam` function after the window has been opened.

To see what you get on your machine using only default values, you can use the
`defaults` test in the GLFW source distribution.


### 2.17 How do I use C++ methods as callbacks?

You cannot use regular methods as callbacks, as GLFW is a C library and doesn't
know about objects and `this` pointers.  If you wish to receive callbacks to
a C++ object, use static methods or regular functions as callbacks, store the
pointer to the object you wish to call in some location reachable from the
callbacks and use it to call methods on your object.

---
## Windows Specific Questions

### 3.1 - What compilers are supported by GLFW?

Currently, GLFW releases are tested with Visual C++ 2008, 2010 and 2012,
standalone MinGW, MinGW with MSYS, and the Cygwin packages for MinGW.

The Windows binary distribution of GLFW contains pre-compiled libraries
for all of the compilers mentioned above.

If your compiler is not supported, please don't hesitate to
[contact us](community.html).

### 3.2 - Why do I get link errors when trying to build my program?

If you get errors like this one when you try to compile a program using GLFW:

> `error LNK2001: unresolved external symbol _glfwGetWindowParam`

*(Example from Microsoft Visual C++)*

then you have most likely not linked your program against GLFW correctly.  How
to do this is described in section 4.2.2 of the `readme.html` file that is
included in the GLFW source and binary distributions.

### 3.3 - Why doesn't glfwSwapInterval work?

This is a known problem with certain ATI/AMD card/driver combinations, where the
driver apparently ignores requests for enabling vertical sync.  GLFW itself only
only passes the specified interval to the `wglSwapIntervalEXT` function and the
rest is up to the driver.

However, if you encounter this problem on non-ATI/AMD hardware and you have
verified in your display driver settings that vertical sync has not been
forcibly disabled, please report this as a bug in GLFW.

---
## Mac OS X Specific Questions

### 4.1 - Why can I not focus or interact with my program window?

Your program most likely lacks an application bundle.

A simple shell script for creating application bundles sufficient for running
GLFW applications can be found in the source distribution as
`examples/bundle.sh`.

To learn more about bundles, see the
[Bundle Programming Guide](http://developer.apple.com/mac/library/documentation/CoreFoundation/Conceptual/CFBundles/)
on the Apple Developer Connection.

### 4.2 - How do I create an OpenGL 3.0+ context?

Firstly, you need GLFW 2.7.2 or later and Mac OS X 10.7 or later.

The only OpenGL 3.0+ context configuration currently supported by Mac OS X is
forward-compatible, core profile OpenGL 3.2.  To create such a context, you
should set the following hints:

{% highlight c %}
glfwOpenWindowHint(GLFW_OPENGL_VERSION_MAJOR, 3);
glfwOpenWindowHint(GLFW_OPENGL_VERSION_MINOR, 2);
glfwOpenWindowHint(GLFW_OPENGL_FORWARD_COMPAT, GL_TRUE);
glfwOpenWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);
{% endhighlight %}

---
## Unix/X11 Specific Questions

### 5.1 - Why doesn't glfwOpenWindow work in my private build?

You most likely did not specify a mechanism for OpenGL extension entry point
retrieval.  If no mechanism was selected, `glfwGetProcAddress` always returns
false, which causes `glfwOpenWindow` to fail.

See `readme.html` section 2.2 for more details. 
