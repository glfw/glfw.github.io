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
5. [Change log](#5_change_log)
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
[change log](#5_change_log).


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

- Microsoft Visual C++ 2008, 2010 and 2012
- MinGW with or without MSYS
- MinGW cross-compilation for Unix-like systems
- OpenWatcom for Windows
- Unix or Unix-like systems running the X Window System
- Apple GCC or Clang on Mac OS X

There are also project files available for Microsoft Visual C++ 2008, 2010 and
2012 in the `support/msvc90`, `support/msvc100` and `support/msvc110`
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

#### 2.1.1 Microsoft Visual C++

Project files for both the static and dynamic versions of the GLFW library are
provided in the `support/msvc90`, `support/msvc100` and `support/msvc110`
directories.


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
un-configured state by running make with the `x11-dist-clean` target.

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

## 5. Change log

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

For the full change log since version 1.0, see the [version
history](changelog.md) page.


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
| support/msvc110 | Project files for Visual C++ 2012      |
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
