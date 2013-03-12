---
layout: default
title: Version history
---

## Version history

### Version 2.7.7
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

### Version 2.7.6
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

### Version 2.7.5
- \[Cocoa\] Replaced `NSDate` time source with `mach_absolute_time` (backported
  from 3.0)
- \[Cocoa\] Bugfix: A header needed for `MAXPATHLEN` on some systems was not
  included

### Version 2.7.4
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

### Version 2.7.3
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

### Version 2.7.2
- Added library version check to dynamic linking test
- \[Cocoa\] Added support for OpenGL 3.2 core profile in 10.7 Lion and above
- \[Cocoa\] Made relevant `CFLAGS` overridable
- \[Cocoa\] Bugfix: The OpenGL framework pointer was not retrieved, making
  `glfwGetProcAddress` fail
- \[Cocoa\] Bugfix: The Cocoa layer was not notified that the application may be
  multithreaded

### Version 2.7.1
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

### Version 2.7
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
- \[Win32\] Bugfix: Improper use of `wParam` for `WM_SYSCOMMAND`
- \[Win32\] Bugfix: Derivatives of stream.c were not cleaned up by compile.bat
- \[Win32\] Bugfix: Pointer for `GetExtensionsStringARB` was not initialized
- \[Win32\] Bugfix: Makefiles contained the wrong GLFW API version
- \[Win32\] Bugfix: Numeric keypad key symbols would change depending on Num
  Lock state
- \[Win32\] Bugfix: `DllMain` performed a number of forbidden actions (by
  calling `glfwTerminate`)

### Version 2.6
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

### Version 2.5
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

### Version 2.4.2
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
- \[X11\] Bugfix: Source files EOL was PC style (CR/LF) in Version 2.4.1 (blame my
  WinCVS configuration)
- \[X11\] Bugfix: When a GLFW window is closed, input focus is properly released
- \[X11\] Bugfix: Iconification of fullscreen windows should now work properly
- \[x86 CPUs\] Improved RDTSC timing (e.g. RDTSC support on single-CPU Intel
  Hyper-Threading enabled systems)
- \[AmigaOS\] Added joystick support
- \[AmigaOS\] Mouse cursor positioning is now implemented
- \[AmigaOS\] Added support for Geek Gadgets GCC
- \[AmigaOS\] Bugfix: `glfwGetWindowParam` now returns proper values for all
  parameters (except for `GLFW_ACCELERATED`)

### Version 2.4.1
- Added AmigaOS support (preliminary)
- GLFW for the X Window System now works under Mac OS X
- \[Win32\] Bugfix: `glfwWaitCond` treated the timeout as milliseconds instead
  of seconds
- \[X11\] Bugfix: GLFW should now compile under IRIX v5.3
- \[X11\] Bugfix: GLFW should now compile with Kylix

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

### Version 2.3.2
- Removed the silly limitation of 100 threads (the thread information is now
  kept in a linked list)
- General source cleanup (window state is now kept in a single struct, plus some
  other minor changes)
- \[X11\] Added Solaris `gethrtime` support (not tested yet), which should give
  an improved timer for Sun/Solaris stations
- \[X11\] Some fixes to the `compile.sh` script (`-O` for non-gcc compilers and
  `make x11-gcc` should now really force GCC)

### Version 2.3.1
- \[X11\] A minimalist configuration script was added that solves the issue with
  `glXGetProcAddressARB`, and unifies all Unix/X11 Makefiles into one template
  Makefile (well, one for GLFW, and one for the examples)

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

### Version 2.2.3
- Bugfix: Checking for `GL_SGIS_generate_mipmap` is more robust
- Bugfix: `glfwLoadTexture2D` will now fail if no window is opened
- \[Win32\] Bugfix: Right shift was not detected under Win 9x/ME (it is still
  not as good as under NT/2K/XP, but at least you get right shifts)
- \[X11\] Bugfix: Visuals are now selected more accurately. For instance,
  `glfwOpenWindow` will no longer fail if you request a 24-bit color buffer if
  only 16-bit color visuals are available (which means that pong3d should work
  on 16-bit displays).

### Version 2.2.2
- \[Win32\] Bugfix: Windows did not always get focus (this was a tough one!)
- \[Win32\] Bugfix: `glfwGetWindowParam` did not work with `GLFW_ACCUM_\*_BITS`
  or `GLFW_AUX_BUFFERS`
- \[X11\] Bugfix: Linux joystick Y axis positions were reversed

### Version 2.2.1
- \[X11\] Added joystick support for Linux

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

### Version 2.0.3
- Added precise CPU cycle based timing support (RDTSC) for x86 CPUs (under both
  Windows and Unix)
- Added a makefile option for building for Windows with Cygwin
- Corrected the CC for Unix/X11 makefiles (`-Wall` is usually not a supported
  flag for CC, so it was removed from the CFLAGS list)

### Version 2.0.2
- Added a makefile option for building for X11 with 'cc' rather than 'gcc'
  (useful for IRIX users for instance)
- \[Win32\] Bugfix: Mouse coordinates are now relative to the window upper left
  corner, which also means that disabling the mouse cursor in windowed mode
  should work much better
- \[X11\] Bugfix: Added a bunch of more keys that are recognized by GLFW
- \[X11\] Bugfix: `glfwGetNumberOfProcessors` now works for IRIX (earlier
  versions of GLFW would not compile under IRIX)

### Version 2.0.1
- `glfwTerminate` will now be called automatically upon normal program
  termination (using `atexit`)
- \[Win32\] Bugfix: Buffer-swapping did not work if a window lost focus
- \[Win32\] Bugfix: Top level Makefile did not work under Windows 9x
- \[Win32\] Bugfix: `NULL` declaration in `glfw.h` was not MSVC 7.x compatible
- \[X11\] Bugfix: GLFW would not build with C++ (e.g. g++)

### Version 2.0
- GLFW is no longer a single source file, but an entire link library
- Added multi threading support
- Added more window control
- New distribution layout (both Win32 and X11 version in same archive)
- Added GLFW Users Manual and GLFW Reference Manual as PDF files
- Some bugfixes

### Version 1.0.2
- Improved fullscreen functionality
- Added fullscreen support for X11

### Version 1.0.1
- Added support for the X Window System
- Fixed bugs

### Version 1.0.0
- First release
- Only supported Windows

