function setHeader(){
    const head = document.createElement("h1");
    head.innerHTML = "Thomas Benfield's Terrifying Baboon";
    document.getElementById("heading").appendChild(head);

    const nav1 = document.createElement("nav");
    nav1.innerHTML = "<a href='index.html'>Home |</a><a href='introduction.html'>| Introduction |</a><a href='contract.html'>| Contract |</a><a href='tables.html'>| Tables |</a><a href='forms.html'>| Forms |</a><a href='website_evaluations.html'>| Website Evaluations |</a><a href='polygons.html'>| Polygons |</a><a href='calculator_try.html'>| Calculator Try |</a><a href='calculator.html'>| Calculator |</a><a href='arrays.html'>| Arrays |</a><a href='slideshow.html'>| SlideShow |</a><a href='project1.html'>| Project</a>";
    document.getElementById("heading").appendChild(nav1);

    const nav2 = document.createElement("nav");
    nav2.innerHTML = "<a href='stuff/3PIC W@BSITE.htm'>Bad Site |</a><a href='activities/accessibility/Activity_Accessibility.html'>| Accesibility |</a><a href='hobby/index.html'>| Hobby Site |</a><a href='activities/Activity11/Benfield-Activity11.html'>| Accordion Widget |</a><a href='activities/Activity12/Benfield-Activity12.html'>| Carousel Application |</a><a href='activities/Activity13/Benfield-Activity13.html'>| Ajax Conversion</a>";
    document.getElementById("heading").appendChild(nav2);
}
function setFooter(){
    const nav3 = document.createElement("nav");
    nav3.innerHTML = "<a href='https://webpages.charlotte.edu/tbenfie5/'>CLT Website |</a><a href='https://www.linkedin.com/in/thomas-benfield-1b6293222/'>| Linkedin |</a><a href='https://www.codecademy.com/profiles/TemboJembo'>| CodeAcademy |</a><a href='https://www.freecodecamp.org/TemboJembo'>| FreeCodeCamp |</a><a href='https://tembojembo.github.io/'>| Github Course Page |</a><a href='https://tembojembo.github.io/'>| Github Pages |</a><a href='https://github.com/TemboJembo'>| Github</a>";
    document.getElementById("footing").appendChild(nav3);

    const foota = document.createElement("p");
    foota.innerHTML = "<br>Site Designed by <a href='benfieldsoftware.com/'>Thomas Benfield of Benfield's Beautiful Software</a> &copy;2023<br><br><a href='https://validator.w3.org/check?uri=referer' id='validation_link_html'> <img style='border:0;width:88px;height:31px' src='https://upload.wikimedia.org/wikipedia/commons/b/bb/W3C_HTML5_certified.png' alt='Validate webpage HTML!'> </a> <a href='https://jigsaw.w3.org/css-validator/check/referer'> <img style='border:0;width:88px;height:31px' src='https://jigsaw.w3.org/css-validator/images/vcss-blue' alt='Valid CSS!' /></a>";
    document.getElementById("footing").appendChild(foota);
}