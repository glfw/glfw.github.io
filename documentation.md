---
layout: default
title: Documentation
---

## Documentation

### User guide

<a class="download" href="GLFWUsersGuide277.pdf" title="Download User Guide (PDF)">Download</a>

The user guide is a task-oriented guide to the API.  It does not describe every
detail of GLFW, but instead attempts to get you started in the areas of your
interest.

---
### Reference manual

<a class="download" href="GLFWReference277.pdf" title="Download Reference Manual (PDF)">Download</a>

The reference manual describes every function and constant of the API, but isn't
necessarily the best way to get started using GLFW.

---
### Example code

This short example shows how the GLFW API looks and how easy it is to create and
a window and OpenGL context with it.  There are many more functions than those
used here, but these are all you need to get started.

{% highlight c %}
#include <GL/glfw.h>

int main(void)
{
    /* Initialize the library */
    if (!glfwInit())
        return -1;

    /* Create a windowed mode window and its OpenGL context */
    if (!glfwOpenWindow(640, 480, 8, 8, 8, 0, 24, 0, GLFW_WINDOW))
        return -1;

    /* Loop until the user closes the window */
    while (glfwGetWindowParam(GLFW_OPENED))
    {
        /* Render here */

        /* Swap front and back buffers and process events */
        glfwSwapBuffers();
    }

    return 0;
}
{% endhighlight %}

To learn about these and all other GLFW functions, see the user guide and
reference manual.

---
### Wiki

GLFW has a wiki at [wiki.glfw.org](http://wiki.glfw.org/).

---
### Patch submitters guide

The [patch submitters guide](patchguide.html) describes best practices for
creating and submitting patches to GLFW.  It is recommended reading for anyone
who wishes to contribute to the project.
