---
layout: default
title : 2.7.7 Release Notes
---

## GLFW 2.7.7 release notes

Table of contents

1. [Introduction](#1_introduction)
2. [Compiling GLFW and the example programs](#2_compiling_glfw_and_the_example_programs)
3. [Installing GLFW](#3_installing_glfw)
4. [Using GLFW](#4_using_glfw)
5. [Version history](#5_version_history)
6. [Directory structure of the GLFW distribution](#6_directory_structure_of_the_glfw_distribution)
7. [Contacting the project](#7_contacting_the_project)
8. [Acknowledgements](#8_acknowledgements)

---
## 1. Introduction

Welcome to version 2.7.7 of the GLFW library.  GLFW is a free, Open Source,
multi-platform library for OpenGL application development that provides a
powerful API for handling operating system specific tasks such as opening an
OpenGL window, reading keyboard, mouse, joystick and time input, creating
threads, and more.

GLFW 2.7 is expected to be the last major release of the 2.x series, with
most development now being done on what will become version 3.0.

This release adds fixes for a few minor bugs on each platform, support for
more swap interval methods on X11 and Visual C++ 2012 project files.

For a full list of changes, see the
[version history](#5_version_history).


## 2. Compiling GLFW and the example programs

A top level makefile can be found in the root directory of the GLFW
distribution that has been designed to work with several compilers. If you
simply enter the GLFW root directory in a shell and type `make` (or
`nmake`, `mingw32-make`, `gnumake`,
`gmake` or something else, depending on your development
envronment), and a list should appear with the currently supported options for
systems and compilers.

For example, one of the options is to compile GLFW for Windows using MinGW
and MSYS.  To do this, use:

{% highlight bash %}
make win32-msys
{% endhighlight %}

This will compile the GLFW static library and DLL as well as the supplied
example and test programs.

Currently supported compilers and systems are:

- Microsoft Visual C++ 2008 and 2010
- MinGW with or without MSYS
- MinGW cross-compilation for Unix-like systems
- OpenWatcom for Windows
- Unix or Unix-like systems running the X Window System
- Apple GCC or Clang on Mac OS X

There are also project files available for Microsoft Visual C++ 2008 and
2010 in the `support/msvc90` and `support/msvc100`
directories.

If your compiler/system is not in the list, you may have to create new
makefiles in the `lib\win32`, `lib/x11` or
`lib/cocoa` directory, and in the `examples` directory.
If you have any problems, please use our
[support forum](http://sourceforge.net/projects/glfw/forums/forum/247562)
and
[bug tracker](http://sourceforge.net/tracker/?group_id=72569&atid=534938)
on SourceForge.net. We would like to support as many systems as possible, so if
you had to make any modifications or additions to the source and/or makefiles
in order to make GLFW compile successfully, we would very much like to know
what you had to do.


### 2.1 Microsoft Windows

When building GLFW as a DLL (dynamic link library), all compilation units
need to have the `GLFW_BUILD_DLL` macro defined.  All build methods
listed below already does this, but you need to do it yourself if you are
making a custom build.  Without this macro, the GLFW DLL will not export
functions correctly and code calling the DLL will be incorrectly generated.

#### 2.1.1 Microsoft Visual C++ 2008 and 2010

Project files for both the static and dynamic versions of the GLFW library
are provided in the `support/msvc90` and
`support/msvc100` directories.


#### 2.1.2 MinGW on Windows

GLFW can be compiled using only
[MinGW](http://www.mingw.org/).  Open a Windows command prompt,
enter the root directory of the GLFW source distribution and use the
`win32-mingw` target:

{% highlight bash %}
mingw32-make win32-mingw
{% endhighlight %}


#### 2.1.3 MSYS and MinGW on Windows

If you have both [MinGW and MSYS](http://www.mingw.org/)
installed, a better alternative is to use the built-in MSYS support.  Open an
MSYS shell, enter the root directory of the GLFW source distribution and use
the `win32-msys` target:

{% highlight bash %}
mingw32-make win32-msys
{% endhighlight %}

#### 2.1.4 Cygwin's MinGW on Windows

GLFW can be cross-compiled to native Win32 code using the MinGW packages in
[Cygwin](http://www.cygwin.com/) (the newer `mingw-`
packages, not the older `gcc-mingw-` ones).  Open a Cygwin shell,
enter the root directory of the GLFW source distribution and use the
`cross-mgw` target:

{% highlight bash %}
env TARGET=i686-pc-mingw32- make cross-mgw
{% endhighlight %}

This results in binaries that are functionally identical to those produced
by the other MinGW variants, i.e. they will use `msvcrt.dll` as libc
and will have no dependency on Cygwin.


#### 2.1.5 MinGW cross-compilation for Unix or Unix-like systems

Some Unix-like systems have a MinGW cross-compilation package for compiling
native Win32 binaries, for example the `mingw32` package on Debian
GNU/Linux and its derivatives.  You can use this to build Win32 binaries of
GLFW and all examples without having to run Microsoft Windows or even Wine.

Use the regular make program with the `cross-mgw` target.  You may
also need to adjust the `TARGET` environment variable, depending on
how packagers named the binaries.


#### 2.1.6 OpenWatcom on Windows

GLFW can be compiled using [OpenWatcom](http://www.openwatcom.org/)
for Windows by running the following in the GLFW root directory:

{% highlight bash %}
nmake MAKE=nmake win32-ow
{% endhighlight %}

Also make sure that you have all your environment variables set up
correctly.  It is the default option when installing OpenWatcom to permanently
set up all the required environment variables.  If `nmake` is
unavailable, you probably have to run `WATCOM\setvars.bat` from the
command prompt first, where `WATCOM` is the directory in which you
installed OpenWatcom (e.g. `C:\Watcom`).


### 2.2 X11 on Unix-like systems

Compiler and link library capabilities are auto-detected with a script
called `compile.sh`.  Note that you don't need to run this script
yourself, as it is run automatically by the top-level makefile when necessary.
It has been tested on FreeBSD and many Linux distributions and should hopefully
run correctly on the majority of available Unix-like systems.

If you wish to customize the compilation or link flags for GLFW, set the
`CFLAGS` or `LFLAGS` environment variables as needed
before building the library.  These flags will be picked up and added to the
generated `Makefile.x11` files.

If you wish to use a certain compiler, set the `CC` environment
variable before building the library.  This will also be stored in the
generated `Makefile.x11` files.

If you have already configured your source tree, you can reset it to an
un-configured state by running make with the <code>x11-dist-clean</code>
target.

If you are making your own build setup for GLFW, you need to be aware of the
various preprocessor symbols that the bundled makefiles use to enable various
features and code paths.  They need to be defined either on the command-line or
at the very beginning for each GLFW source file with an `x11_`
prefix.

Note that the X11 port of GLFW compiles on Mac OS X, but is currently unable
to open a window when running against X11.app, due to Apple's incomplete
implementation of GLXFBConfigs.

| Preprocessor                     | Description                                                                                                                       |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `_GLFW_USE_LINUX_JOYSTICKS`      | Use the Linux joystick API. This is the only supported API for the X11 port. Without it, joystick input will be unavailable.      |
| `_GLFW_HAS_XRANDR`               | Use the X Resize and Rotate extension for display mode changes. This is the preferred method.                                     |
| `_GLFW_HAS_XF86VIDMODE`          | Use the Xf86VidMode extension for display mode changes. This is a fall-back method.                                               |
| `_GLFW_HAS_PTHREAD`              | Use the POSIX Threads API for threading. This is the only supported API for the X11 port. Without it, threading will be disabled. |
| `_GLFW_HAS_SCHED_YIELD`          | Call the `sched_yield` function inside `glfwPlatformSleep`.                                                                           |
| `_GLFW_HAS_GLXGETPROCADDRESS`    | Use the `glXGetProcAddress` function to retrieve OpenGL entry point addresses.                                                      |
| `_GLFW_HAS_GLXGETPROCADDRESSARB` | Use the `glXGetProcAddressARB` function to retrieve OpenGL entry point addresses.                                                   |
| `_GLFW_HAS_GLXGETPROCADDRESSEXT` | Use the `glXGetProcAddressEXT` function to retrieve OpenGL entry point addresses.                                                   |
| `_GLFW_HAS_DLOPEN`               | Use `dlopen` on the OpenGL shared library to retrieve OpenGL entry point addresses. This is a fall-back method.                     |
| `_GLFW_HAS_SYSCONF`              | Use the sysconf API to find the number of processors.                                                                             |
| `_GLFW_HAS_SYSCTL`               | Use the sysctl API to find the number of processors.                                                                              |


### 2.3 Apple GCC or Clang on Mac OS X

To compile GLFW for Mac OS X, you will need to have installed the Developer
Tools.  A version of these tools can be found on your Mac OS X disc, with newer
versions available from the Apple Developer Connection site.  When they are
installed, simply open Terminal and go to the root GLFW directory.  From there,
you can build the library and all the examples by running make with the
appropriate target, i.e.:

{% highlight bash %}
make cocoa
{% endhighlight %}

The default compiler for the Cocoa port of GLFW is `cc`, which as
of Mac OS X 10.6 still defaults to GCC, but you can override this using the
`CC` environment variable.  For example, to build GLFW using Clang,
use:

{% highlight bash %}
env CC=clang make cocoa
{% endhighlight %}

There is also a deprecated Carbon port of GLFW, which is limited to
32-bit code and only runs well on Mac OS X 10.3 and 10.4.  However, if you
need to build applications for those systems, it is a better choice than
the Cocoa port, which uses APIs unavailable on systems older than 10.5.


## 3. Installing GLFW

### 3.1 Windows

After compiling GLFW with MinGW or Cygwin, three files of interest should
have appeared in the `lib\win32` directory. They are:
`libglfw.a` (the static link version of GLFW), `glfw.dll`
(the DLL version of GLFW) and `libglfwdll.a` (the DLL import
library).

To install GLFW on Cygwin (and possibly MinGW), run make with the
`cygwin-install` target.  This will generate the pkg-config file and
copy it, the header file and the library to the correct locations of your
Cygwin installation. If you wish to change the installation location from its
default, set the desired prefix path with the environment variable
`PREFIX`.

If you used Borland C++ Builder, LCC-Win32, Microsoft Visual C++ or
OpenWatcom, the files are named `glfw.lib` (the static link version
of GLFW), `glfw.dll` (the DLL version of GLFW) and
`glfwdll.lib` (the DLL import library).

The static link library and the DLL import library should be copied to your
compiler's `LIB` directory (where all other link libraries are
located).  The DLL can be copied either to your Windows system directory (where
opengl32.dll is located), or to the project directory of your GLFW-based
projects (where you place your executable files).

You should also copy the GLFW include file, `include\GL\glfw.h`,
to the `GL` directory of your compiler's include directory (i.e.
where `gl.h`, `glu.h` etc. are located).


### 3.2 Unix

After compiling GLFW, three files named `libglfw.pc.in`,
`libglfw.a` and `libglfw.so` should have appeared in the
`lib/x11` directory. This is the pkg-config template file, the GLFW
static link library and the GLFW shared library, respectively.

To install GLFW onto your system, run make as root with the
`x11-install` make target. This will install the pkg-config file, the
static library and the header. By default, the files will be installed under
`/usr/local`. If you wish to install to a different location, set the
`PREFIX` environment variable appropriately when running make.

Note that the shared library is not installed by default, as you really
should think twice before using it. GLFW is very small and shared library
distribution on Unix outside of packaging systems is quite tricky. The GLFW
license also allows static linking without requiring you to share your
code.

However, if you're a \*nix distribution packager, use a language binding or
for some other reason wish to install the shared library along with the rest,
run make with the `x11-dist-install` target.


### 3.4 Mac OS X

After compiling GLFW, three files named `libglfw.pc.in`,
`libglfw.a` and `libglfw.dylib` should appear in the
`lib/cocoa` directory. This is the pkg-config template file, the GLFW
static link library and the GLFW dynamic library, respectively.

To install GLFW onto your system, run make with sudo and the
`cocoa-install` build target, i.e.:

{% highlight bash %}
sudo make cocoa-install
{% endhighlight %}

This will install the pkg-config file, the static library and the header. By
default, the files will be installed under `/usr/local`. If you wish
to install to a different location, set the environment variable
`PREFIX` appropriately when running make.

Note that the shared library is not installed by default, as you really
should think twice before using it. GLFW is very small and very suitable for
static linking. The GLFW license also allows static linking without requiring
your to share your code.

## 4. Using GLFW

There are two aspects to using GLFW:

1. How does the GLFW API work
2. How to compile programs that use GLFW

The first point is covered in the
[GLFW Users Guide](docs/UsersGuide.pdf) and the
[GLFW Reference Manual](docs/Reference.pdf), and we suggest that you
read at least the Users Guide, since it's a good introduction to the GLFW
API.

Designing and compiling programs that use GLFW is not very difficult.
A few rules for successfully designing GLFW-based programs are presented
in the following sections.

### 4.1 Include the GLFW header file

In the files of your program where you use OpenGL or GLFW, you should
include the `GL/glfw.h` header file, i.e.:

{% highlight c %}
#include <GL/glfw.h>
{% endhighlight %}

This defines all the constants, types and function prototypes of the GLFW
API.  It also includes the OpenGL and GLU header files, and defines all the
necessary constants and types that are necessary for these headers to work on
that particular platform.

For example, under Microsoft Windows you are normally required to include
`windows.h` before you include `GL/gl.h`.  This would
however make your code dependent on the Windows platform, or at least require
your program to check which platform it is being compiled on.

The GLFW header file takes care of this for you, not by including
`windows.h`, but rather by itself duplicating the necessary parts of
it.  This way, the namespace won't be cluttered by the entire Windows API.

By default, the regular `gl.h` OpenGL header is included. If you
wish to include the draft `gl3.h` header instead, define
`GLFW_INCLUDE_GL3` before the inclusion of the GLFW header.

By default, the `glu.h` GLU header is included.  If you wish to
avoid this, define `GLFW_NO_GLU` before the inclusion of the GLFW
header.

In other words:

- Do *not* include `gl.h` or `glu.h`
yourself, as GLFW does this for you
- Do *not* include `windows.h` unless you need
direct access to the Windows API
- If you *do* include `windows.h`, do it
*before* including `GL/glfw.h`.  The GLFW header will
detect this and act appropriately.

Also note that if you are using an OpenGL extension loading library such as
[GLEW](http://glew.sourceforge.net/), you should include the GLEW
header *before* the GLFW one.  The GLEW header defines macros that
disable any `gl.h` that the GLFW header includes and GLEW will work
as expected.



### 4.2 Link with the right libraries

#### 4.2.1 Windows static library

If you link with the static version of GLFW, it is also necessary to
link with some system libraries that GLFW uses.

When linking a program under Windows that uses the static version of GLFW,
you must also link with the following libraries: `opengl32`,
`user32` and `kernel32`. Some of these libraries may be
linked with by default by your compiler. In the table below you can see the
minimum required link options for each supported Windows compiler (you may want
to add other libraries as well, such as `glu32`):

| Compiler             | Link options                           |
| -------------------- | -------------------------------------- |
| Borland C++ Builder  | `glfw.lib` `opengl32.lib`              |
| Cygwin               | *See Unix static library below*        |
| LCC-Win32            | `glfw.lib` `opengl32.lib`              |
| Microsoft Visual C++ | `glfw.lib` `opengl32.lib`              |
| MinGW and MinGW-w64  | `-lglfw` `-lopengl32`                  |
| OpenWatcom           | `glfw.lib` `opengl32.lib` `user32.lib` |


#### 4.2.2 Windows DLL

To compile a program that uses the DLL version of GLFW, you need to
define the `GLFW_DLL` constant. This can either be done with a
compiler switch, typically by adding `-DGLFW_DLL` to the list of
compiler options. You can also do it by adding the following line to all your
source files **before** including the GLFW header file:

{% highlight c %}
#define GLFW_DLL
{% endhighlight %}

When linking a program under Windows that uses the DLL version of GLFW,
the only library you need to link with for GLFW to work is `glfwdll`.
In the table below you can see the minimum required link options for each
supported Windows compiler (you may want to add other libraries as well,
such as `opengl32` and `glu32`):

| Compiler             | Link options  |
| -------------------- | ------------- |
| Borland C++ Builder  | `glfwdll.lib` |
| Cygwin               | `-lglfwdll`   |
| LCC-Win32            | `glfwdll.lib` |
| Microsoft Visual C++ | `glfwdll.lib` |
| MinGW and MinGW-w64  | `-lglfwdll`   |
| OpenWatcom           | `glfwdll.lib` |




#### 4.2.3 Unix static library

GLFW supports
[pkg-config](http://pkgconfig.freedesktop.org/wiki/),
and a `libglfw.pc` file is generated and installed when you install
the library.  For systems that do not provide pkg-config, you should look in
this file for the proper compile and link flags for your system, as determined
by compile.sh at compile time.

A typical compile and link command-line when using the GLFW static library
may look like this:

{% highlight bash %}
cc `pkg-config --cflags libglfw` -o myprog myprog.c `pkg-config --static --libs libglfw`
{% endhighlight %}

When using the GLFW sharedd library it may look like this:

{% highlight bash %}
cc `pkg-config --cflags libglfw` -o myprog myprog.c `pkg-config --libs libglfw`
{% endhighlight %}

If you use GLU functions in your program you should also add
`-lGLU` to your link flags.



#### 4.2.5 Mac OS X static library

When compiling and linking a program under Mac OS X that uses GLFW, you
must also link with Cocoa and OpenGL frameworks.

If you are using Xcode, you simply add the GLFW library `libglfw.a` and
these frameworks to your project. If, however, you are building your program
from the command-line, there are two methods for correctly linking your GLFW
program.

GLFW supports
[pkg-config](http://pkgconfig.freedesktop.org/wiki/), and a
libglfw.pc file is generated and installed when you install the library. You
can find pkg-config in most packaging systems, such as
[Fink](http://www.finkproject.org/) and
[MacPorts](http://www.macports.org/), so if you have one of them
installed, simply install pkg-config. Once you have pkg-config available, the
command-line for compiling and linking your program is:

{% highlight bash %}
cc `pkg-config --cflags libglfw` -o myprog myprog.c `pkg-config --libs libglfw`
{% endhighlight %}

If you do not wish to use pkg-config, you will need to add the required
frameworks and libraries to your command-line using the `-l` and
`-framework` switches, i.e.:

{% highlight bash %}
cc -o myprog myprog.c -lglfw -framework Cocoa -framework OpenGL -framework IOKit
{% endhighlight %}

Note that you do not add the .framework extension to a framework when adding
it from the command-line.

These frameworks contain all OpenGL and GLU functions, so there is no need to
add additional libraries or frameworks when using GLU functionality. Also note
that even though your machine may have Unix-style OpenGL libraries, they are for
use with the X Window System, and will *not* work with the Mac OS X native
version of GLFW.

## 5. Version history

### v2.7.7
- \[Cocoa\] Bugfix: The cursor positioning code used `NSPoint` in place of
  `CGPoint`
- \[Cocoa\] Bugfix: The detection of `setRestorable:` used the wrong selector
  signature
- \[Cocoa\] Bugfix: The test for whether `glfwTerminate` had been called from
  the main thread was missing
- \[Win32\] Added Visual C++ 2012 project files for the static library, DLL and
  all test and example programs
- \[Win32\] Bugfix: The `GLFW_OPENGL_DEBUG_CONTEXT` hint did not trigger context
  re-creation when `WGL_ARB_create_context` was available
- \[Win32\] Bugfix: The `GLFW_OPENGL_DEBUG_CONTEXT` window parameter was not set
  after debug context creation
- \[X11\] Added support for the `GLX_EXT_swap_control` and
  `GLX_MESA_swap_control` extensions as alternatives to `GLX_SGI_swap_control`
- \[X11\] Bugfix: The `GLFW_OPENGL_DEBUG_CONTEXT` window parameter was not set
  after debug context creation
- \[X11\] Bugfix: The window size hints were not updated when calling
  `glfwSetWindowSize` on a non-resizable window
- \[X11\] Bugfix: The detected link flags for `clock_gettime` were not added to
  the pkg-config file

### v2.7.6
- \[Cocoa\] Added joystick support (backported from 3.0)
- \[Cocoa\] Added new joystick test (backported from 3.0)
- \[Cocoa\] Bugfix: Fullscreen windows with OpenGL 3.2 core contexts failed to
  open
- \[Cocoa\] Bugfix: The cursor position was incorrectly rounded during
  conversion
- \[Cocoa\] Bugfix: Cursor positioning led to nonsensical results for fullscreen
  windows
- \[Cocoa\] Bugfix: The GLFW window was flagged as restorable
- \[Win32\] Bugfix: A test was missing for whether all available pixel formats
  had been disqualified
- \[Win32\] Bugfix: Entering locked cursor mode caused cursor movement to be
  reported to the mouse position callback
- \[Win32\] Bugfix: Setting the cursor position caused cursor movement to be
  reported to the mouse position callback
- \[Win32\] Bugfix: A .def file using `__stdcall` naming conventions was used
  for the 64-bit DLL on MinGW-w64
- \[Win32\] Bugfix: A superfluous link flag prevented tests and examples from
  being built for 64-bit on MinGW-w64
- \[X11\] Bugfix: The VirtualBox OpenGL implementation does not set the window
  bit for GLX framebuffer configs

### v2.7.5
- \[Cocoa\] Replaced `NSDate` time source with `mach_absolute_time` (backported
  from 3.0)
- \[Cocoa\] Bugfix: A header needed for `MAXPATHLEN` on some systems was not
  included

### v2.7.4
- \[X11\] Bugfix: The library containing `clock_gettime` was not detected
- \[X11\] Bugfix: The POSIX monotonic clock was detected using a non-POSIX macro
- \[Cocoa\] Replaced deprecated Core Graphics event suppression call
- \[Cocoa\] Bugfix: The `GLFW_WINDOW_NO_RESIZE` window parameter was always zero
- \[Cocoa\] Bugfix: `glfwInit` changed the current directory without a bundle
  resource directory (backported from 3.0)
- \[Cocoa\] Bugfix: `glfwInit` created a non-interactive menu bar (backported
  from 3.0)
- \[Carbon\] Bugfix: The `GLFW_WINDOW_NO_RESIZE` window parameter was always
  zero
- \[Win32\] Bugfix: The `GLFW_WINDOW_NO_RESIZE` window parameter was always zero

### v2.7.3
- Added `GLFW_INCLUDE_GL3` macro for including the new `gl3.h` instead of `gl.h`
- Bugfix: The returned desktop mode did not reflect the display mode as it was
  before the window was opened.
- Bugfix: The reference manual did not note that `glfwSetMousePosCallback` and
  `glfwSetMouseWheelCallback` called the new callback before returning
- \[X11\] Added the POSIX `CLOCK_MONOTONIC` time source as the preferred method
  (backported from 3.0)
- \[X11\] Bugfix: Added missing `Requires:` line to pkg-config file generation
- \[X11\] Bugfix: Threading link flags were discarded before pkg-config file
  generation
- \[X11\] Bugfix: A synchronization point necessary for jitter-free locked
  cursor mode was incorrectly removed
- \[Cocoa\] Added `cocoa-dist-install` install target, intended for packagers
  and language binding creators
- \[Cocoa\] Bugfix: Permitted requests for OpenGL 3.0 and 3.1 despite the 3.2
  context being forward-compatible
- \[Win32\] Added Visual C++ 2010 project files for the GLFW tests and examples
- \[Win32\] Replaced Cygwin cross-compile support with MSYS support due to
  clearer separation between Cygwin and MSYS 
- \[Win32\] Bugfix: Alt+F4 hot key was not translated into `WM_CLOSE`

### v2.7.2
- Added library version check to dynamic linking test
- \[Cocoa\] Added support for OpenGL 3.2 core profile in 10.7 Lion and above
- \[Cocoa\] Made relevant `CFLAGS` overridable
- \[Cocoa\] Bugfix: The OpenGL framework pointer was not retrieved, making
  `glfwGetProcAddress` fail
- \[Cocoa\] Bugfix: The Cocoa layer was not notified that the application may be
  multithreaded

### v2.7.1
- Clarified language in the Reference Manual concerning window hint resetting
- Bugfix: The OpenGL profile and forward-compatibility window parameters were
  not set
- Bugfix: The default OpenGL version in the `version` test was set to 1.1
- Bugfix: The FSAA test did not check for the availability of
  `GL_ARB_multisample`
- Bugfix: The window could be left in a closed state but still be flagged as
  open
- Bugfix: `glfwGetWindowSize` did not check whether GLFW was initialized or
  whether the window was open
- \[Cocoa\] Bugfix: The loop condition for saving video modes used the wrong
  index variable
- \[Cocoa\] Bugfix: The iconified and active window states were not tracked
- \[X11\] Cleaned up depdendencies for `libglfw.pc` file
- \[X11\] Bugfix: The `dlopen` fallback method for `glfwGetProcAddress` had been
  broken by unrelated edits
- \[X11\] Bugfix: Calling `glXCreateContextAttribsARB` with an unavailable
  OpenGL version caused the application to terminate with a `BadMatch` Xlib
  error
- \[X11\] Bugfix: `GLFW_WINDOW_NO_RESIZE` was honored in fullscreen mode
- \[Win32\] Added Visual C++ 2010 project files for the GLFW DLL and static
  library to the `support/msvc100` directory
- \[Win32\] Enabled `_GLFW_NO_DLOAD_GDI32` and `_GLFW_NO_DLOAD_WINMM` for the
  DLL build
- \[Win32\] Bugfix: `compile.bat` used Unix-style line endings
- \[Win32\] Bugfix: The `WGLSWAPINTERVALEXT_T`, `WGLGETEXTENSIONSSTRINGARB_T`
  and `WGLGETEXTENSIONSSTRINGEXT_T` typedefs were declared under
  `WGL_ARB_pixel_format`
- \[Win32\] Bugfix: The array for WGL context attributes was too small and could
  overflow
- \[Win32\] Bugfix: Context creation using profiles did not check for the
  availability of `WGL_ARB_create_context_profile` 
- \[Win32\] Bugfix: Context recreation logic was overly conservative, leading to
  unnecessary recreations 
- \[Win32\] Bugfix: Window focus was not handled correctly when using
  `glfwInconifyWindow`

### v2.7
- Added `GLFW_OPENGL_VERSION_MAJOR` and `GLFW_OPENGL_VERSION_MINOR` hints for
  versioned context creation
- Added `GLFW_OPENGL_FORWARD_COMPAT` hint for forward compatible context
  creation
- Added `GLFW_OPENGL_DEBUG_CONTEXT` hint for debug context creation
- Added `GLFW_OPENL_PROFILE` hint for context creation using profiles
- Added `GLFW_NO_GLU` macro for disabling the inclusion of the GLU header by the
  GLFW header
- Added platform-independent pixel format selection (not used on Mac OS X)
- Added support and symbols for several additional keys, including
  Windows/Command keys, Pause, Caps Lock and Menu
- Added conservative value clamping to `glfwOpenWindowHint`
- Added a number of test programs mostly useful to developers of GLFW
- Added error messages and graceful failure to example programs
- Added Cocoa port for Mac OS X 10.5 Leopard and later
- Added vsync to all relevant example programs
- Added a rudimentary OpenGL 3.2+ core profile example program
- Updated Pascal (formerly Delphi) bindings to support more compilers
- Clarified and expanded the User's Guide and Reference Manual
- Fixed a number of compiler warnings in the example programs
- OpenGL version is now only parsed once, at window creation time
- Changed `glfwSwapBuffers` to call `glfwPollEvents` *after* buffer swap
- Changed all comments in public header file to plain C style
- Removed the `keytest` example program, as it was superseded by the `events`
  test
- Removed deprecated AmigaOS and DOS ports
- Removed all FPS counters from example programs
- Removed all unmaintained language bindings
- Removed support for Pelles C
- Removed broken Microsoft Visual C++ 6.0 build path
- \[X11\] Added `x11-dist-install` install target, intended for packagers of
  GLFW
- \[X11\] Added `x11-dist-clean` build target, intended for developers of GLFW
- \[X11\] Added support for `GLX_SGIX_fbconfig`
- \[X11\] Added support for user-specified compilation flags via `CFLAGS`
- \[X11\] Added documentation of configuration macros
- \[X11\] Implemented support for `GLFW_SYSTEM_KEYS`
- \[X11\] Improved configuration and makefile creation logic
- \[X11\] Removed support for GLX version 1.2 and below
- \[X11\] Removed unnecessary calls to XSync
- \[X11\] Removed use of legacy window style atoms
- \[X11\] Bugfix: Repeated keys would sometimes leak through despite key repeat
  being disabled
- \[X11\] Bugfix: Fullscreen window resizing would cause color buffer clearing
  without taking framebuffer objects into account
- \[X11\] Bugfix: AltGr was not reported as right Alt
- \[X11\] Bugfix: Window colormap was not freed
- \[X11\] Bugfix: Close callback was called for `glfwCloseWindow`
- \[X11\] Bugfix: Misspelt struct member in XF86VidMode code path
- \[X11\] Bugfix: Window decorations would not appear using certain versions of
  Compiz on Intel hardware
- \[X11\] Bugfix: Numeric keypad key symbols would change depending on Num Lock
  state
- \[X11\] Bugfix: Hidden cursor position snapped back when halfway from window
  center to edge
- \[X11\] Bugfix: Not properly verifying that the window was mapped before
  making certain calls caused a `BadMatch` error
- \[X11\] Bugfix: The response to `_NET_WM_PING` events was malformed
- \[X11\] Bugfix: Hidden cursor mode interfered with other applications when
  GLFW window was unfocused
- \[X11\] Bugfix: The invisible cursor objects used for hidden cursor mode were
  not freed
- \[X11\] Bugfix: EWMH-compliant window managers were incorrectly detected
- \[X11\] Bugfix: The EWMH code path for fullscreen windows did not present the
  window using `_NET_ACTIVE_WINDOW`
- \[X11\] Bugfix: The EWMH code path for fullscreen windows did not send
  a `_NET_WM_STATE` client message
- \[Carbon\] Added Universal Binary build targets for all examples
- \[Carbon\] Renamed MacOSX port to Carbon
- \[Carbon\] Removed support for 10.2 Jaguar
- \[Carbon\] Deprecated Carbon port
- \[Carbon\] Bugfix: Using the Dock or menu Quit command did not call the close
  callback
- \[Carbon\] Bugfix: Key repeat events were not caught on 10.5 Leopard
- \[Carbon\] Bugfix: Certain keys were not reported
- \[Carbon\] Bugfix: Missing `-m32` flag caused build failure on 10.6 Snow
  Leopard
- \[Carbon\] Bugfix: Missing `-mmacosx-version-min` flag caused build failure on
  10.5 Leopard
- \[Carbon\] Bugfix: `glfwOpenWindow` did not call `glClear`
- \[Win32\] Added Visual C++ project files for all examples and test programs
- \[Win32\] Removed iterative context re-creation attempts for FSAA sample count
- \[Win32\] Bugfix: The Visual C++ GLFW DLL project file did not use the correct
  DEF file
- \[Win32\] Bugfix: WGL extensions were not detected and/or used correctly
- \[Win32\] Bugfix: Improper use of wParam for `WM_SYSCOMMAND`
- \[Win32\] Bugfix: Derivatives of stream.c were not cleaned up by compile.bat
- \[Win32\] Bugfix: Pointer for `GetExtensionsStringARB` was not initialized
- \[Win32\] Bugfix: Makefiles contained the wrong GLFW API version
- \[Win32\] Bugfix: Numeric keypad key symbols would change depending on Num
  Lock state
- \[Win32\] Bugfix: `DllMain` performed a number of forbidden actions (by
  calling `glfwTerminate`)

### v2.6
- Added `GLFW_FSAA_SAMPLES` multisampling hint
- Added `GLFW_WINDOW_NO_RESIZE` hint for non-resizable windows
- Added install targets for all Unix-like build targets
- Added `glfwReadMemoryImage` function for creating a `GLFWImage` object from an
  image file in a memory buffer
- Added `glfwLoadMemoryTexture2D` function for decoding an image file in
  a memory buffer into a texture
- Added `glfwLoadTextureImage2D` function for loading a `GLFWImage` object into
  a texture
- Added cross-compilation support for MinGW under a Unix-like host
- D bindings updated and all examples ported to modern D
- Delphi bindings updated to reflect API additions
- Bugfix: The interaction between key repeat and window focus code caused
  duplicate presses
- Bugfix: The mouse position was not properly updated when re-enabling the mouse
  cursor
- \[Win32\] Added pkg-config file generation for Cygwin
- \[Win32\] Added version number to window class name
- \[Win32\] Added optional loading of user provided window icon resource
- \[Win32\] Bugfix: Very small sleep periods were forced to higher value
- \[Win32\] Bugfix: The nmake makefile did not handle paths with spaces
  correctly
- \[Win32\] Bugfix: Removed assembly RDTSC timing code
- \[Win32\] Bugfix: Hidden cursor was not clipped to windowed windows
- \[X11\] Added XRandR code path for fullscreen windows
- \[X11\] Added building of shared library
- \[X11\] Added [ICCCM](http://tronche.com/gui/x/icccm/) WM fullscreen hints
- \[X11\] Added support for the `_NET_WM_PING` protocol
- \[X11\] Added pkg-config file generation
- \[X11\] Added setting of WM size hints
- \[X11\] Bugfix: Removed assembly RDTSC timing code
- \[X11\] Bugfix: Window re-opening now works properly (including fullscreen
  windows)
- \[X11\] Bugfix: Potential crash bug in video mode matching code
- \[X11\] Bugfix: Static buffers imposed an invisible limit on reported video
  mode count
- \[X11\] Bugfix: Interaction with certain window managers when setting input
  focus would cause termination with a BadMatch error
- \[X11\] Bugfix: Keypad keys did not trigger the character callback
- \[MacOSX\] Added pkg-config file generation
- \[MacOSX\] Added building of shared library
- \[MacOSX\] Added building of Universal Binary libraries
- \[MacOSX\] Replaced fullscreen code path with CGL version
- \[MacOSX\] Bugfix: Binaries without bundles or resource forks now interact
  properly with the WM
- \[MacOSX\] Bugfix: Replaced Carbon event time source with `gettimeofday`
- \[MacOSX\] Bugfix: Added code to minimize the dreaded OpenGL application
  startup jump
- \[MacOSX\] Bugfix: Fixed broken implementation of `glfwSetMousePos` for
  windowed mode
- \[MacOSX\] Bugfix: Fixed broken implementation of hidden cursor
- \[MacOSX\] Bugfix: Capturing all displays and not just the main one
- \[AmigaOS\] Obsoleted platform due to lack of maintainer and community
  interest
- \[DOS\] Obsoleted platform due to lack of maintainer and community interest

### v2.5
- Added the function `glfwWaitEvents`
- Added window close callback, which enables a program to prevent a user from
  closing a window with the window manager
- Added window refresh callback, which is called when the window needs to be
  refreshed
- Added support for loading alpha textures (`GLFW_ALPHA_MAP_BIT`)
- Added support for the Lua programming language
- Added support for the D programming language
- Added support for the Pelles C compiler for Windows
- Added API level support for up to eight mouse buttons
- \[Win32\] Added support for up to five mouse buttons
- \[Win32\] Mouse down events capture mouse input
- \[Win32\] Bugfix: The DLL now exports `glfwSetTime`
- \[Win32\] Fix: The GLFW window is now placed in the upper left corner of the
  desktop working area
- \[Win32/X11\] Bugfix: More robust check for `SwapInterval`
- \[X11\] Added support for USB joysticks under Linux (`/dev/input/js\*`)
- \[X11\] Bugfix: Added support for GLX extensions in `glfwExtensionSupported`
- \[X11\] Bugfix: More robust fullscreen mode (?)
- \[X11\] Bugfix: Runtime check of XF86VidMode support for the active display
- \[X11\] Bugfix: Some mouse button events were reported incorrectly
- \[MacOSX\] Added support for the input char callback.
- \[MacOSX\] Added video mode validation and duplicate elimination.
- \[MacOSX\] Switched to a new `MakeBundle.sh` script
- \[MacOSX\] Added emulation of the window refresh callback.
- \[MacOSX\] Bugfix: The window and its associated resources are now properly
  released.
- \[MacOSX\] Bugfix: Removed support for more than eight mouse buttons.
- \[x86 CPUs\] Improved Intel mobile CPU detection (e.g. disables RDTSC timing
  on Centrino systems)

### v2.4.2
- Preliminary native Mac OS X support (via the Carbon interface)
- Preliminary DOS support (DJGPP + Mesa)
- Changed license to the zlib license (almost identical to the previous GLFW
  license), so now GLFW is OSI Certified
- Rewrote the GLFW documentation in LaTeX, meaning several improvements (both
  visual and practical)
- Added the `support` folder to the distribution, which includes support for
  various languages
- \[Win32\] Added OpenWatcom compiler support (thanks Sebastian Schuberth!)
- \[Win32\] Changed fallback timer from `GetTickCount` to `timeGetTime`, which
  usually provides better resolution
- \[Win32\] Bugfix: Accumulator buffer selection should be more robust
- \[Win32\] Bugfix: If stereo rendering is requested, and no stereo pixel format
  could be created, `glfwOpenWindow` now fails
- \[Win32\] Bugfix: `glfwSetWindowSize` now sets the size of the client area,
  NOT the entire window, meaning that there is a 1:1 relationship between
  `glfwSetWindowSize` and `glfwGetWindowSize`
- \[X11\] Added FreeBSD and QNX support
- \[X11\] Added support for non-pthread capable systems
- \[X11\] Hopefully more robust configuration script (`compile.sh`)
- \[X11\] Bugfix: When mouse cursor is hidden, mouse sensitivity is no longer
  degraded
- \[X11\] Bugfix: Source files EOL was PC style (CR/LF) in v2.4.1 (blame my
  WinCVS configuration)
- \[X11\] Bugfix: When a GLFW window is closed, input focus is properly released
- \[X11\] Bugfix: Iconification of fullscreen windows should now work properly
- \[x86 CPUs\] Improved RDTSC timing (e.g. RDTSC support on single-CPU Intel
  Hyper-Threading enabled systems)
- \[AmigaOS\] Added joystick support
- \[AmigaOS\] Mouse cursor positioning is now implemented
- \[AmigaOS\] Added support for Geek Gadgets GCC
- \[AmigaOS\] Bugfix: glfwGetWindowParam now returns proper values for all
  parameters (except for `GLFW_ACCELERATED`)

### v2.4.1
- Added AmigaOS support (preliminary)
- GLFW for the X Window System now works under Mac OS X
- \[Win32\] Bugfix: `glfwWaitCond` treated the timeout as milliseconds instead
  of seconds
- \[X11\] Bugfix: GLFW should now compile under IRIX v5.3
- \[X11\] Bugfix: GLFW should now compile with Kylix

### v2.4
- Major source code rearrangement - much code is now shared between different
  platforms, and it should be easier to port GLFW to new platforms
- Added a Unicode keyboard text input interface (CharCallback)
- Keyboard key input is now slightly more internationalized: GLFW now uses 8-bit
  ISO-8859-1 encoding for keys representing printable characters (e.g.
  &quot;&Ouml;&quot;, &quot;&#167;&quot;, etc), as opposed to the previous 7-bit
  US-ASCII encoding
- Added more key constants (F13-F25, keypad '=')
- Added an enable/disable switch for automatic event polling from
  glfwSwapBuffers
- \[X11\] Added support for sysctl for querying the number of processors in the
  system (if POSIX sysconf is not supported)
- \[X11\] Bugfix: `compile.sh` now works with Sun sh (and hopefully others too)
- \[X11\] Bugfix: `compile.sh` now detects the need for `-ldl` when `dlopen` is
  used
- \[Win32\] Bugfix: When closing a fullscreen window under Win 9x/NT4, the task
  bar icon now disappears properly
- \[Win32\] Bugfix: GLFW should now compile on a wider range of MSVC compilers
  (e.g. .NET) - Thanks Tim Little!

### v2.3.2
- Removed the silly limitation of 100 threads (the thread information
is now kept in a linked list)
- General source cleanup (window state is now kept in a single
struct, plus some other minor changes)
- \[X11\] Added Solaris `gethrtime` support (not tested yet), which
should give an improved timer for Sun/Solaris stations
- \[X11\] Some fixes to the `compile.sh` script (`-O` for non-gcc compilers
and `make x11-gcc` should now really force GCC)

### v2.3.1
- \[X11\] A minimalist configuration script was added that solves the
issue with `glXGetProcAddressARB`, and unifies all Unix/X11 Makefiles
into one template Makefile (well, one for GLFW, and one for the
examples)

### v2.3
- Added OpenGL stereo rendering support
- Added a function for parsing the OpenGL version string (`glfwGetGLVersion`)
- \[x86\] Bugfix: Hopefully the CPU core clock dependent timer RDTSC will never
  be used on CPUs with variable core frequencies anymore
- \[X11\] Bugfix: GLFW could create stereo rendering capable windows, even if it
  was not requested (GLFW v2.2.x did not support selection of stereo rendering)
- \[X11\] Bugfix: `glfwGetProcAddress` returned NULL on most systems (even on
  those that supported `glXGetProcAddressARB`). Now GLFW assumes that
  `glXGetProcAddressARB` is supported on all systems, which solves the bug, but
  may result in compiler errors on some systems (please let me know if you have
  any related problems).

### v2.2.3
- Bugfix: Checking for `GL_SGIS_generate_mipmap` is more robust
- Bugfix: `glfwLoadTexture2D` will now fail if no window is opened
- \[Win32\] Bugfix: Right shift was not detected under Win 9x/ME (it is still
  not as good as under NT/2K/XP, but at least you get right shifts)
- \[X11\] Bugfix: Visuals are now selected more accurately. For instance,
  `glfwOpenWindow` will no longer fail if you request a 24-bit color buffer if
  only 16-bit color visuals are available (which means that pong3d should work
  on 16-bit displays).

### v2.2.2
- \[Win32\] Bugfix: Windows did not always get focus (this was a tough
one!)
- \[Win32\] Bugfix: `glfwGetWindowParam` did not work with
`GLFW_ACCUM_\*_BITS` or `GLFW_AUX_BUFFERS`
- \[X11\] Bugfix: Linux joystick Y axis positions were reversed

### v2.2.1
- \[X11\] Added joystick support for Linux


### v2.2
- Added joystick support (only supported under Windows so far)
- Added joystick controls to pong3d.c (only 3 more lines of code)
- Added `glfwOpenWindowHint` function
- It is now possible to specify a desired vertical monitor refresh rate (for
  fullscreen windows)
- It is now possible to request an accumulator buffer and auxiliary buffers
- Added `glfwSetTime` function
- Added a GLFW conversion of the MESA/GLUT gears.c demo to the example programs
- \[Win32\] gdi32.dll and winmm.dll are now loaded dynamically when glfwInit()
  is called. This means that there is no need to link with gdi32.lib or
  winmm.lib when using the static version of GLFW, which should make GLFW usage
  more convenient.
- \[Win32\] Bugfix: Greatly improved keyboard input (detect left/right CTRL etc)
- \[Win32\] Bugfix: `glfwExtensionSupported` now detects all WGL extensions
  (e.g. WGL_ARB_pbuffer)
- \[Win32\] Bugfix: Mouse cursor was not re-hidden when a GLFW window was
  deselected and then selected again (with ALT+TAB)
- \[X11\] Bugfix: Minor bug in the SGI timer - and ugly (unintended) SGI timer
  debug info removed
- \[X11\] Bugfix: `glfwGetDesktopMode` and `glfwGetVideoModes` no longer give
  segmentation faults if no X server is available

### v2.1
- Added image and texture loading capabilities (support for the TGA file format
  at the moment)
- Added a new example program (mipmaps.c) for showing off the automatic mipmap
  generation and texture loading capabilities of GLFW 2.1
- Removed the separate TGA loader (tga.c in the examples directory) since
  texture loading is supported natively by GLFW. Also updated the Pong3D demo to
  use GLFW texture loading instead of `tga.c`.
- Improved keyboard handling (e.g. numeric keypad keys can be detected)
- Added a new example program, `keytest.c`
- Changed the GLFWvidmode structure and the corresponding API functions to
  report pure color bits instead of the confusing (and unportable) "BPP" field
- Changed glfwSetWindowSize so that it operates in fullscreen mode too
- Added mouse wheel support under Windows (not Win95) and X11
- Added window iconification functions (`glfwInconifyWindow` and
  `glfwRestoreWindow`)
- Improved iconification and deactivation handling under both Windows and X11
- Made it possible to turn on/off key repeat (the default is now no key repeat)
- Added SGI hardware timer support (`CLOCK_SGI_CYCLE`) for improved timer
  resolution for SGI computers
- Added support for the free Borland C++ Builder 5.x compiler for Windows
- Made it possible to compiler GLFW as a Windows DLL using any of the supported
  compilers
- Some constants have changed names (e.g. `GLFW_REDBITS` is now called
  `GLFW_RED_BITS`)
- Updated GLFW documentation (GLFW Users Guide and GLFW Reference Manual) to
  reflect the changes in the API
- \[Win32\] Bugfix: Corrected Cygwin toplevel makefile entry
- \[Win32\] Bugfix: Fixed event lag bug
- \[Win32\] Bugfix: Fixed Radeon 8500 crash
- \[X11\] Bugfix: Fixed the window close bug
- \[X11\] Bugfix: Iconification/deactivation is now detected
- \[X11\] Bugfix: Non-OpenGL visuals are not listed anymore
- \[XFree86\] Bugfix: Undesired video mode changes are now prevented

### v2.0.3
- Added precise CPU cycle based timing support (RDTSC) for x86 CPUs (under both
  Windows and Unix)
- Added a makefile option for building for Windows with Cygwin
- Corrected the CC for Unix/X11 makefiles (`-Wall` is usually not a supported
  flag for CC, so it was removed from the CFLAGS list)

### v2.0.2
- Added a makefile option for building for X11 with 'cc' rather than 'gcc'
  (useful for IRIX users for instance).
- \[Win32\] Bugfix: Mouse coordinates are now relative to the window upper left
  corner, which also means that disabling the mouse cursor in windowed mode
  should work much better.
- \[X11\] Bugfix: Added a bunch of more keys that are recognized by GLFW.
- \[X11\] Bugfix: `glfwGetNumberOfProcessors` now works for IRIX (earlier
  versions of GLFW would not compile under IRIX).

### v2.0.1
- `glfwTerminate` will now be called automatically upon normal program
  termination (using `atexit`)
- \[Win32\] Bugfix: Buffer-swapping did not work if a window lost focus.
- \[Win32\] Bugfix: Top level Makefile did not work under Windows 9x.
- \[Win32\] Bugfix: `NULL` declaration in `glfw.h` was not MSVC 7.x compatible.
- \[X11\] Bugfix: GLFW would not build with C++ (e.g. g++).

### v2.0
- GLFW is no longer a single source file, but an entire link library.
- Added multi threading support.
- Added more window control.
- New distribution layout (both Win32 and X11 version in same archive).
- Added GLFW Users Manual and GLFW Reference Manual as PDF files.
- Some bugfixes.

### v1.0.2
- Improved fullscreen functionality.
- Added fullscreen support for X11.

### v1.0.1
- Added support for the X Window System.
- Fixed bugs.

### v1.0.0
- First release.
- Only supported Windows.


## 6. Directory structure of the GLFW distribution

Here is an overview of the directory structure of the GLFW distribution:

| Directory       | Contents                               |
| --------------- | -------------------------------------- |
| docs            | GLFW manuals in PDF format             |
| examples        | Several example programs in C          |
| include/GL      | Here is the GLFW C/C++ include file    |
| lib             | Platform independent source files      |
| lib/cocoa       | Mac OS X/Cocoa specific implementation |
| lib/win32       | Windows specific implementation        |
| lib/x11         | Unix/X11 specific implementation       |
| support/d       | D support                              |
| support/msvc90  | Project files for Visual C++ 2008      |
| support/msvc100 | Project files for Visual C++ 2010      |
| support/pascal  | Pascal support                         |
| tests           | Several test programs in C             |

## 7. Contacting the project

The official website for GLFW is [glfw.org](http://www.glfw.org/).
It contains the latest version of GLFW, news and other information that is
useful for OpenGL development.

If you have questions related to the use of GLFW, we have a
[user's web forum](https://sourceforge.net/forum/forum.php?forum_id=247562),
and a
[user's mailing list](https://lists.sourceforge.net/lists/listinfo/glfw-user)
on SF.net, and the registered IRC channel `#glfw` on
[Freenode](http://freenode.net/).

If you have a bug to report, a patch to submit or a feature you'd like to
request, please file it in one of the
[GLFW trackers](http://sourceforge.net/tracker/?group_id=72569) on SF.net.

Finally, if you're interested in helping out with the development of
GLFW or porting it to your favorite platform, we have a
[developer's mailing list](https://lists.stacken.kth.se/mailman/listinfo/glfw-dev),
or you could join us on `#glfw`.


## 8. Acknowledgements

GLFW exists because people around the world donated their time and lent
their skills.  Special thanks go out to:

- artblanc, for a patch replacing a deprecated Core Graphics call
- Bobyshev Alexander and Martins Mozeiko, for the original proposal of an FSAA
  hint and their work on the Win32 implementation of FSAA
- Keith Bauer, for his invaluable help with porting and maintaining GLFW on Mac
  OS X, and for his many ideas
- Jarrod Davis, for the Delphi port of GLFW
- Olivier Delannoy, for the initial implementation of FSAA support on X11,
  cross-compiling support for MinGW and general extreme usefulness
- Paul R. Deppe, who helped with Cygwin support, and made an adaption of
  [PLIB](http://plib.sourceforge.net/) so that it can use GLFW (instead of GLUT)
- Jonathan Dummer, for submitting a patch fixing an input bug on Win32 and
  adding logic for the `GLFW_ICON` resource
- Gerald Franz, who made GLFW compile under IRIX, and supplied patches for the
  X11 keyboard translation routine
- Marcus Geelnard, the original author and long-time maintainer of GLFW, without
  whose brilliant work none of this would have happened
- Stefan Gustavson, for quick and thorough testing of GLFW on many and varied
  operating systems and hardware configurations
- Sylvain Hellegouarch, for support, bug reports and testing
- Alex Holkner, for writing the code from which the Compiz/Intel fix was stolen
- Toni Jovanoski, for helping with the MASM32 port of GLFW, and supplying the
  example program and fixed OpenGL and GLU bindings for MASM32
- Cameron King, for reporting a hidden cursor mouse bug on X11
- Peter Knut, for his many and detailed reports of difficult to find input bugs
- Robin Leffmann, for his work on Mac OS X and other platforms, and his
  invaluable support
- Glenn Lewis, for helping out with support for the D programming language
- Shane Liesegang, for providing a bug fix relating to Cocoa window restoration
  and reporting several Cocoa bugs
- Tristam MacDonald, for his bug reports and feedback on the Cocoa port
- David Medlock, for doing the initial Lua port
- Kenneth Miller, for his many and detailed bug reports on Win32
- Jeff Molofee, the author of the excellent OpenGL tutorials at [NeHe
  Productions](http://nehe.gamedev.net/).  Much of the Windows code of GLFW was
  originally based on Jeff's code
- Douglas C. Schmidt and Irfan Pyarali, for their excellent article [Strategies
  for Implementing POSIX Condition Variables on
    Win32](http://www.cs.wustl.edu/~schmidt/win32-cv-1.html)
- Sebastian Schuberth, for the OpenWatcom makefiles
- Matt Sealey, for helping with the MorphOS port
- Steve Sexton, for reporting an input bug in the Carbon port
- Dmitri Shuralyov, for support, bug reports, bug fixes and testing
- Daniel Skorupski, for reporting a bug in the Win32 DEF file
- Bradley Smith, for his updates of the D support and his ports of the remaining
  examples to the D language
- Julian Squires, for submitting a patch for a bug in the key repeat logic on
  X11
- Liam Staskawicz, for finding a bug in the termination logic of the OS X port
- Johannes Stein, for maintaining the Pascal bindings
- Cort Stratton, for reporting two bugs related to the creation of debug
  contexts
- Sergey Tikhomirov, for the initial implementation of joystick support on Mac
  OS X
- Samuli Tuomola, for support, bug reports and testing
- Frank Wille, for helping with the AmigaOS port and making GLFW compile under
  IRIX 5.3
- Yaniel, for fixing a bug with fullscreen windows using OpenGL 3.0 contexts on
  Cocoa
- Santi Zupancic, for support, bug reports and testing
- Lasse &Ouml;&ouml;rni, for submitting patches for the input code of the Win32
  and X11 ports
- Дмитри Малышев, for the idea of a `GLFW_NO_GLU` macro
- blanco, for submitting a patch for a deprecation bug in the Cocoa port
- heromyth, for reporting a bug in the D bindings
- Ozzy @ [Orkysquad](http://www.orkysquad.org), for his dedication to GLFW, for
  debugging my source, and for his valuable experience with game development
- Peoro, for reporting a bug in the `_NET_WM_PING` response
- TTK-Bandit, for submitting a number of input patches adding many missing keys
  to the Win32 and X11 ports
- yuriks, for reporting a bug in Win32 context creation
- All the unmentioned and anonymous contributors in the GLFW community, for bug
  reports, patches, feedback and encouragement
- [OpenGL.org](http://www.opengl.org/), and all the people on the discussion
  forums there that have provided help during the development of GLFW
