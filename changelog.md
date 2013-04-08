---
layout: default
title: Version history
---

## Version history
{% for post in site.posts %}
{% if post.categories contains "changelog" %}
---
<a href="{{ post.url }}">
<h3>Version {{ post.title }}</h3>
<span class="date">
<div class="dateday">{{ post.date | date: "%e" }}</div>
<div>{{ post.date | date: "%b" }}</div>
<div class="dateyear">{{ post.date | date: "%Y" }}</div>
</span>
</a>
{{ post.content }}
{% endif %}
{% endfor %}

---
### Version 2.4
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

---
### Version 2.3.2
- Removed the silly limitation of 100 threads (the thread information is now
  kept in a linked list)
- General source cleanup (window state is now kept in a single struct, plus some
  other minor changes)
- \[X11\] Added Solaris `gethrtime` support (not tested yet), which should give
  an improved timer for Sun/Solaris stations
- \[X11\] Some fixes to the `compile.sh` script (`-O` for non-gcc compilers and
  `make x11-gcc` should now really force GCC)

---
### Version 2.3.1
- \[X11\] A minimalist configuration script was added that solves the issue with
  `glXGetProcAddressARB`, and unifies all Unix/X11 Makefiles into one template
  Makefile (well, one for GLFW, and one for the examples)

---
### Version 2.3
- Added OpenGL stereo rendering support
- Added a function for parsing the OpenGL version string (`glfwGetGLVersion`)
- \[x86\] Bugfix: Hopefully the CPU core clock dependent timer RDTSC will never
  be used on CPUs with variable core frequencies anymore
- \[X11\] Bugfix: GLFW could create stereo rendering capable windows, even if it
  was not requested (GLFW 2.2.x did not support selection of stereo rendering)
- \[X11\] Bugfix: `glfwGetProcAddress` returned NULL on most systems (even on
  those that supported `glXGetProcAddressARB`). Now GLFW assumes that
  `glXGetProcAddressARB` is supported on all systems, which solves the bug, but
  may result in compiler errors on some systems (please let me know if you have
  any related problems).

---
### Version 2.2.3
- Bugfix: Checking for `GL_SGIS_generate_mipmap` is more robust
- Bugfix: `glfwLoadTexture2D` will now fail if no window is opened
- \[Win32\] Bugfix: Right shift was not detected under Win 9x/ME (it is still
  not as good as under NT/2K/XP, but at least you get right shifts)
- \[X11\] Bugfix: Visuals are now selected more accurately. For instance,
  `glfwOpenWindow` will no longer fail if you request a 24-bit color buffer if
  only 16-bit color visuals are available (which means that pong3d should work
  on 16-bit displays).

---
### Version 2.2.2
- \[Win32\] Bugfix: Windows did not always get focus (this was a tough one!)
- \[Win32\] Bugfix: `glfwGetWindowParam` did not work with `GLFW_ACCUM_\*_BITS`
  or `GLFW_AUX_BUFFERS`
- \[X11\] Bugfix: Linux joystick Y axis positions were reversed

---
### Version 2.2.1
- \[X11\] Added joystick support for Linux

---
### Version 2.2
- Added joystick support (only supported under Windows so far)
- Added joystick controls to `pong3d.c` (only 3 more lines of code)
- Added `glfwOpenWindowHint` function
- It is now possible to specify a desired vertical monitor refresh rate (for
  fullscreen windows)
- It is now possible to request an accumulator buffer and auxiliary buffers
- Added `glfwSetTime` function
- Added a GLFW conversion of the MESA/GLUT gears.c demo to the example programs
- \[Win32\] `gdi32.dll` and `winmm.dll` are now loaded dynamically when `glfwInit`
  is called.  This means that there is no need to link with `gdi32.lib` or
  `winmm.lib` when using the static version of GLFW, which should make GLFW usage
  more convenient.
- \[Win32\] Bugfix: Greatly improved keyboard input (detect left/right CTRL etc)
- \[Win32\] Bugfix: `glfwExtensionSupported` now detects all WGL extensions
  (e.g. `WGL_ARB_pbuffer`)
- \[Win32\] Bugfix: Mouse cursor was not re-hidden when a GLFW window was
  deselected and then selected again (with ALT+TAB)
- \[X11\] Bugfix: Minor bug in the SGI timer - and ugly (unintended) SGI timer
  debug info removed
- \[X11\] Bugfix: `glfwGetDesktopMode` and `glfwGetVideoModes` no longer give
  segmentation faults if no X server is available

---
### Version 2.1
- Added image and texture loading capabilities (support for the TGA file format
  at the moment)
- Added a new example program (`mipmaps.c`) for showing off the automatic mipmap
  generation and texture loading capabilities of GLFW 2.1
- Removed the separate TGA loader (`tga.c` in the examples directory) since
  texture loading is supported natively by GLFW. Also updated the Pong3D demo to
  use GLFW texture loading instead of `tga.c`.
- Improved keyboard handling (e.g. numeric keypad keys can be detected)
- Added a new example program, `keytest.c`
- Changed the `GLFWvidmode` structure and the corresponding API functions to
  report pure color bits instead of the confusing (and unportable) "BPP" field
- Changed `glfwSetWindowSize` so that it operates in fullscreen mode too
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

---
### Version 2.0.3
- Added precise CPU cycle based timing support (RDTSC) for x86 CPUs (under both
  Windows and Unix)
- Added a makefile option for building for Windows with Cygwin
- Corrected the CC for Unix/X11 makefiles (`-Wall` is usually not a supported
  flag for CC, so it was removed from the CFLAGS list)

---
### Version 2.0.2
- Added a makefile option for building for X11 with 'cc' rather than 'gcc'
  (useful for IRIX users for instance)
- \[Win32\] Bugfix: Mouse coordinates are now relative to the window upper left
  corner, which also means that disabling the mouse cursor in windowed mode
  should work much better
- \[X11\] Bugfix: Added a bunch of more keys that are recognized by GLFW
- \[X11\] Bugfix: `glfwGetNumberOfProcessors` now works for IRIX (earlier
  versions of GLFW would not compile under IRIX)

---
### Version 2.0.1
- `glfwTerminate` will now be called automatically upon normal program
  termination (using `atexit`)
- \[Win32\] Bugfix: Buffer-swapping did not work if a window lost focus
- \[Win32\] Bugfix: Top level Makefile did not work under Windows 9x
- \[Win32\] Bugfix: `NULL` declaration in `glfw.h` was not MSVC 7.x compatible
- \[X11\] Bugfix: GLFW would not build with C++ (e.g. g++)

---
### Version 2.0
- GLFW is no longer a single source file, but an entire link library
- Added multi threading support
- Added more window control
- New distribution layout (both Win32 and X11 version in same archive)
- Added GLFW Users Manual and GLFW Reference Manual as PDF files
- Some bugfixes

---
### Version 1.0.2
- Improved fullscreen functionality
- Added fullscreen support for X11

---
### Version 1.0.1
- Added support for the X Window System
- Fixed bugs

---
### Version 1.0.0
- First release
- Only supported Windows