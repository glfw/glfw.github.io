---
layout: default
title: Documentation
---

## Documentation

The [HTML documentation](/docs/latest/) contains both tutorials, guides for
different topics and an API reference.

The [FAQ](faq.html) answers many commonly asked questions about the design,
implementation and use of GLFW.

### License

GLFW is under the [zlib/libpng license](license.html), which permits modification,
distribution and use in closed source software.

### Example code

Below is a short example of setting up a window and OpenGL context with GLFW.
There are many more functions than those used here.  For a quick introduction to
GLFW, see [Getting started](/docs/latest/quick.html) in the HTML documentation.

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
        glClear(GL_COLOR_BUFFER_BIT);

        /* Swap front and back buffers */
        glfwSwapBuffers(window);

        /* Poll for and process events */
        glfwPollEvents();
    }

    glfwTerminate();
    return 0;
}
{% endhighlight %}

