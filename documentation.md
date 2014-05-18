---
layout: default
title: Documentation
---

## Documentation

### Guides and reference manual

GLFW has [comprehensive HTML documentation](/docs/latest/) generated with
[Doxygen](http://www.stack.nl/~dimitri/doxygen/), containing both an API
reference, guides for different parts of the API, a tutorial for beginners and
a transition guide for users of GLFW 2.

### License

GLFW is licensed under the [zlib/libpng license](license.html), a simple license
that permits modification, distribution and use in closed source software.

### FAQ

The [GLFW FAQ](faq.html) answers many of the commonly asked questions about the
design, inner workings and use of the library.

### Example code

Below is a short example of setting up a window and OpenGL context with GLFW.
There are many more functions than those used here.  For a more complete
introduction to GLFW, see [Getting started](/docs/latest/quick.html)
in the documentation.

{% highlight c %}
#include <GLFW/glfw3.h>

int main(void)
{
    GLFWwindow* window;

    /* Initialize the library */
    if (!glfwInit())
        return -1;

    /* Create a windowed mode window and its OpenGL context */
    window = glfwCreateWindow(640, 480, "Hello World", NULL, NULL);
    if (!window)
    {
        glfwTerminate();
        return -1;
    }

    /* Make the window's context current */
    glfwMakeContextCurrent(window);

    /* Loop until the user closes the window */
    while (!glfwWindowShouldClose(window))
    {
        /* Render here */

        /* Swap front and back buffers */
        glfwSwapBuffers(window);

        /* Poll for and process events */
        glfwPollEvents();
    }

    glfwTerminate();
    return 0;
}
{% endhighlight %}

