window.addEventListener('load', function () { // adding load event in order to make javascript wait to load all dependent recourses (images, etc.) before initialization.
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d'); // ctx is short for context, getContext() is a method

    // resize canvas:
    canvas.width = 500;
    canvas.height = 500;

});