---
layout: default
title: FAQ
---

## Frequently Asked Questions

This page attempts to address some of the most commonly asked questions that we
have received from GLFW users.

If your questions are not answered here, please do [contact us](community.html).

### Introduction

- [1.1 What is GLFW?](#11__what_is_glfw)
- [1.2 What is GLFW not?](#12__what_is_glfw_not)
- [1.3 Why yet another OpenGL library?](#13__why_yet_another_opengl_library)
- [1.4 What platforms are supported by GLFW?](#14__what_platforms_are_supported_by_glfw)
- [1.5 What versions of OpenGL are supported by GLFW?](#15__what_versions_of_opengl_are_supported_by_glfw)


### General

- [2.1 Why use separate red/green/blue bit depths?](#21__why_use_separate_redgreenblue_bit_depths)
- [2.2 Is it possible to change video modes after a window has been created?](#22__is_it_possible_to_change_video_modes_after_a_window_has_been_created)
- [2.3 Will image or texture loading support be added to GLFW?](#23__will_image_or_texture_loading_support_be_added_to_glfw)
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
- [2.16 How do I use C++ methods as callbacks?](#216_how_do_i_use_c_methods_as_callbacks)


### Windows

- [3.1 What compilers are supported by GLFW?](#31__what_compilers_are_supported_by_glfw)
- [3.2 Why do I get link errors when trying to build my program?](#32__why_do_i_get_link_errors_when_trying_to_build_my_program)
- [3.3 Why doesnt glfwSwapInterval work?](#33__why_doesnt_glfwswapinterval_work)
- [3.4 What libraries should I link with?](#34__what_libraries_should_i_link_with)
- [3.5 Why does my application freeze when I move or resize the window?](#35__why_does_my_application_freeze_when_i_move_or_resize_the_window)


### OS X

- [4.1 How do I create an OpenGL 3.2 context?](#41__how_do_i_create_an_opengl_30_context)
- [4.2 What libraries should I link with?](#42__what_libraries_should_i_link_with)
- [4.3 Why is my output in the lower-left corner of the window?](#43__why_is_my_output_in_the_lowerleft_corner_of_the_window)


### Unix / X11

- [5.1 What libraries should I link with?](#51__what_libraries_should_i_link_with)


---

## Introduction

### 1.1 - What is GLFW?

GLFW is a small C library that lets you create and manage windows with OpenGL
contexts, enumerate monitors and video modes as well as handle inputs such as
keyboard, mouse, joystick, clipboard and time.

GLFW provides a thin, multi-platform abstraction layer, primarily for
applications whose sole graphics output is through the OpenGL API.  While GLFW
is very useful when developing multi-platform OpenGL applications,
single-platform developers can also benefit from avoiding having to deal with
kludgy platform-specific APIs.

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

- a user interface library.  It allows you to create top-level windows with
  OpenGL contexts.  No menus, no buttons.
- a Windows-only library.  Requests for features that cannot be portably
  implemented will be denied unless they are unobtrusive, like the Windows port
  looking for a `GLFW_ICON` resource at window creation.
- a threading library.  There are already good cross-platform threading
  libraries and threading has been added to both the C11 and C++11 standard
  libraries.
- an image loading library.  There are already good cross-platform image loading
  libraries.
- capable of rendering text.  There are already several libraries that render
  text with OpenGL and consistent cross-platform text rendering cannot depend
  on the platform's text rendering facilities anyway.
- capable of rendering anything at all.  Rendering is up to you and/or other
  libraries.
- integrated with *any* user interface toolkit on *any* platform.  Good UI
  toolkits already provide OpenGL-capable widgets and having two libraries both
  talking to the vast global state of a window system is asking for trouble.
- able to play back sound.
- GLUT or SDL.


### 1.3 - Why yet another OpenGL library?

There are several other libraries available for aiding OpenGL development.  The
most common ones are [freeglut](http://freeglut.sourceforge.net/), an Open
Source implementation of GLUT, and [SDL](http://www.libsdl.org/).

However, freeglut is mostly concerned with providing a stable clone of GLUT,
while SDL is too large for some people and has never had OpenGL as its main
focus.

We therefore believe that there is room for a lightweight, modern library for
managing OpenGL contexts, windows and input.


### 1.4 - What platforms are supported by GLFW?

Currently, GLFW supports Windows, OS X and Unix-like operating systems with the
X Window System, such as Linux and FreeBSD.

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

However, OS X did not support OpenGL 3.0 or later at the time that GLFW 2.7 was
released, and the support that Apple has since added only includes
forward-compatible OpenGL 3.2 core profile contexts.  Additionally, creating
such contexts requires new code, so older versions of GLFW cannot create OpenGL
3.0 contexts on OS X.

The first version to support creation of OpenGL 3.2 contexts on OS X Lion and
later was GLFW 2.7.2.


---

## General

### 2.1 - Why use separate red/green/blue bit depths?

In short, because it more closely matches the way most platforms describe
OpenGL-capable pixel formats, which in the past actually mattered.

Today, when nearly everyone just asks for 24-bit color and gets it, it matters
less.  It does, however, make the API slightly more future-proof, as the values
specified can be passed nearly unmodified to the window system.

This doesn't, of course, prevent you from presenting the familiar, single value
color depths to the user.


### 2.2 - Is it possible to change video modes after a window has been created?

There is limited support for mode switching in the form of `glfwSetWindowSize`.
In full screen mode this will change the video mode to that closest matching
the current mode, with refresh mode and color depth preserved.


### 2.3 - Will image or texture loading support be added to GLFW?

No.


### 2.4 - Will sound support be added to GLFW?

No.

However, if you are looking for an OpenGL-like API for sound, have a look at
OpenAL.


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

Some parts are, specifically those needed to allow rendering from secondary threads.


### 2.10 - Can I check several keys at once?

Yes, you can.

The function `glfwGetKey` lets you check the state of any keyboard key
(including special keys). You can even call the function from within a callback
function, which makes it possible to check for things like Ctrl+F3 key events
(when you get a `GLFW_KEY_F3` key press event, check the state of the left or
right CTRL key with `glfwGetKey(window, GLFW_KEY_LEFT_CONTROL)` or
`glfwGetKey(window, GLFW_KEY_RIGHT_CONTROL)`, or both).


### 2.11 - What timer APIs does GLFW use?

On Windows, the `QueryPerformanceCounter` API is used if available, with
`timeGetTime` as a fallback.

On OS X, the Mach `mach_absolute_time` time source is used.

On Unix-like operating systems using the X11 port, the POSIX `CLOCK_MONOTONIC`
time source is used if available, with `gettimeofday` as a fallback.


### 2.12 - What window system APIs does GLFW use?

On Windows, plain Win32 is used for window and input management, and WGL (with
extensions) is used to create contexts.

On OS X, Cocoa is used for window and input management, and NSOpenGL for context
creation.

On Unix-like systems using the X Window System, the Xlib API is used for window
and input management, the XRandR or XF86VidMode extension (if available) for
display mode management, and GLX (with extensions) for context creation.

There is also an experimental EGL backend that works with the Win32 and Xlib
APIs.


### 2.13 - Why doesn't your gl.h have the functions I need?

GLFW does not provide any version of either `gl.h` or `glu.h`.  The `glfw3.h`
header file includes the versions already present in your development
environment.

However, if you are using Windows, you cannot get anything newer than
OpenGL 1.2 without using extensions.  As the extension management in GLFW is
very rudimentary, we recommend that you use a dedicated extension loading
library such as [GLEW](http://glew.sourceforge.net/).


### 2.14 - Why do my objects look all wrong?

GLFW does not exist between your code and OpenGL.  Think instead of GLFW as
connecting your code to OpenGL and then getting out of the way.  If you get
incorrect rendering results, it is therefore most likely due to errors in your
code, the OpenGL implementation or both.

The OpenGL.org wiki has an extensive article on
[common mistakes](https://www.opengl.org/wiki/Common_Mistakes) that may be
able to help you locate the problem.


### 2.15 - Can I use GLEW with GLFW?

Yes, as long as you include the GLEW header before the GLFW one.  The GLEW
header defines all the necessary magic macros to make sure the `gl.h` that GLFW
attempts to include doesn't interfere.


### 2.16 How do I use C++ methods as callbacks?

You cannot use regular methods as callbacks, as GLFW is a C library and doesn't
know about objects and `this` pointers.  If you wish to receive callbacks to
a C++ object, use static methods or regular functions as callbacks, store the
pointer to the object you wish to call as the user pointer for the window and
use it to call methods on your object.


---

## Windows

### 3.1 - What compilers are supported by GLFW?

Currently, GLFW releases are tested with Visual C++ 2010, 2012 and 2013,
standalone MinGW, MinGW with MSYS, and the Cygwin packages for MinGW.

The Windows binary distribution of GLFW contains pre-compiled libraries
for all of the compilers mentioned above.

If your compiler is not supported, please don't hesitate to
[contact us](community.html).


### 3.2 - Why do I get link errors when trying to build my program?

See the
[Building programs that use GLFW](http://www.glfw.org/docs/latest/build.html)
guide for details on how to compile and link programs on various platforms.


### 3.3 - Why doesn't glfwSwapInterval work?

Modern graphics drivers have settings that allow users to override an
application's request for (among other things) swap interval.  If such a setting
is enabled, `glfwSwapInterval` will have no effect.

Swap interval setting is also by default disabled by GLFW on Windows Vista and
later version when using DWM (Aero), as setting the swap interval there leads to
severe jitter on some hardware.  You can forcibly enable this with
a compile-time option.  See the
[Compiling GLFW](http://www.glfw.org/docs/latest/compile.html) guide for
details.


### 3.4 - What libraries should I link with?

See the
[Building programs that use GLFW](http://www.glfw.org/docs/latest/build.html)
guide for details.                 


### 3.5 - Why does my application freeze when I move or resize the window?

The Windows event loop is blocked by certain actions like dragging or resizing
a window, or opening the window menu.  This is part of the design of Windows and
cannot be changed by GLFW.  If you wish to keep rendering during such actions,
you should render from a secondary thread.


---

## OS X

### 4.1 - How do I create an OpenGL 3.0+ context?

The only OpenGL 3.x and 4.x contexts currently supported by OS X are
forward-compatible, core profile contexts.  The supported versions are 3.2
on 10.7 Lion and 3.3 and 4.1 on 10.9 Mavericks.  In all cases, your GPU needs to
support the specified OpenGL version for context creation to succeed.

To create either an OpenGL 3.2 or later context, you should set the following
hints:

{% highlight c %}
glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 2);
glfwWindowHint(GLFW_OPENGL_FORWARD_COMPAT, GL_TRUE);
glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);
{% endhighlight %}

This will give you a context for the highest version of OpenGL greater than or
equal to 3.2 that is supported by your OS and GPU.  This works because no
features were deprecated between OpenGL 3.2 and 4.1, making forward-compatible
OpenGL 4.1 backards-compatible with 3.2.  If the requested version is not
supported, window creation will fail.           

If your code requires OpenGL 3.3 or 4.1, you can specify those versions instead,
as well as any valid OpenGL version in between.


### 4.2 - What libraries should I link with?

See the
[Building programs that use GLFW](http://www.glfw.org/docs/latest/build.html)
guide for details.                 


### 4.3 - Why is my output in the lower-left corner of the window?

You are passing the window size, which is in screen coordinates, to
`glViewport`, which works with pixels.  On OS X with a Retina display, and
possibly on other platforms in the future, screen coordinates and pixels do not
map 1:1.  Use the framebuffer size, which is in pixels, instead of the window
size.  See the
[Window handling guide](http://www.glfw.org/docs/latest/window.html) for
details.


---

## Unix / X11

### 5.1 - What libraries should I link with?

See the
[Building programs that use GLFW](http://www.glfw.org/docs/latest/build.html)
guide for details.                 

