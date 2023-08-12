var app = document.getElementById("typewriter");

var typewriter = new Typewriter(app, {
  delay: 80,
  loop: true,
});

typewriter
  .typeString(`Backend Web Developer`)
  .pauseFor(2000)
  .deleteAll()
  .typeString(`Frontend Web Developer`)
  .pauseFor(2000)
  .deleteAll()
  .typeString(`I Can Create Awesome Stuff`)
  .pauseFor(2000)
  .deleteAll()
  .typeString(`Let's Work Together!`)
  .pauseFor(2000)
  .deleteAll()
  .start();
