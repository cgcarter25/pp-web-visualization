//create svg canvas width and height

function getBrowserWidth() {
  //get browser width and height
  let browserWidth = window.innerWidth,
      browserHeight = window.innerHeight;

  //if width and height are too small
  if (browserWidth < 1000 && browserHeight < 650) {

    //display visual and hide tree
    document.querySelector('.wrapper-unsupported').style.display = 'block';
    document.querySelector('.wrapper-data-vis').style.display = 'none';

    //get and write browswer width and height
    document.getElementById('width').innerHTML = `<span class="font-weight-bold">${browserWidth}</span> / 1000px`;
    document.getElementById('height').innerHTML = `<span class="font-weight-bold">${browserHeight}</span> / 650px`;

    //change classnames of images
    document.getElementById('width-neg').className = 'active-image mx-auto my-3 d-block width-image';
    document.getElementById('width-pos').className = 'inactive-image mx-auto my-3 d-block width-image';
    document.getElementById('height-neg').className = 'active-image mx-auto my-3 d-block';
    document.getElementById('height-pos').className = 'inactive-image mx-auto my-3 d-block';

  //if height is too small
  } else if (browserWidth >= 1000 && browserHeight < 650){

    //display visual and hide tree
    document.querySelector('.wrapper-unsupported').style.display = 'block';
    document.querySelector('.wrapper-data-vis').style.display = 'none';

    //get and write browswer width and height
    document.getElementById('width').innerHTML = `<span class="font-weight-bold">${browserWidth}</span> / 1000px`;
    document.getElementById('height').innerHTML = `<span class="font-weight-bold">${browserHeight}</span> / 650px`;

    //change classnames of images
    document.getElementById('width-neg').className = 'inactive-image mx-auto my-3 d-block width-image';
    document.getElementById('width-pos').className = 'active-image mx-auto my-3 d-block width-image';
    document.getElementById('height-neg').className = 'active-image mx-auto my-3 d-block';
    document.getElementById('height-pos').className = 'inactive-image mx-auto my-3 d-block';

  //if width is too small
  } else if (browserWidth < 1000 && browserHeight >= 650) {

    //display visual and hide tree
    document.querySelector('.wrapper-unsupported').style.display = 'block';
    document.querySelector('.wrapper-data-vis').style.display = 'none';

    //get and write browswer width and height
    document.getElementById('width').innerHTML = `<span class="font-weight-bold">${browserWidth}</span> / 1000px`;
    document.getElementById('height').innerHTML = `<span class="font-weight-bold">${browserHeight}</span> / 650px`;

    //change classnames of images
    document.getElementById('width-neg').className = 'active-image mx-auto my-3 d-block width-image';
    document.getElementById('width-pos').className = 'inactive-image mx-auto my-3 d-block width-image';
    document.getElementById('height-neg').className = 'inactive-image mx-auto my-3 d-block';
    document.getElementById('height-pos').className = 'active-image mx-auto my-3 d-block';

    //if width and height are good
  } else {
    //display tree and hide visual
    document.querySelector('.wrapper-unsupported').style.display = 'none';
    document.querySelector('.wrapper-data-vis').style.display = 'block';
  }
}

getBrowserWidth();
window.addEventListener('resize', getBrowserWidth)

function drawArrows() {
  document.querySelector('.svg').innerHTML = `<svg class="arrow-canvas" width="${document.querySelector('body').clientWidth}" height="${document.querySelector('body').clientHeight}"></svg>`

  let scroll = this.scrollY,

      option1 = document.getElementById('option-1').getBoundingClientRect(),
      option2Left = document.getElementById('option-2-left').getBoundingClientRect(),
      option2Right = document.getElementById('option-2-right').getBoundingClientRect(),
      option3Left = document.getElementById('option-3-left').getBoundingClientRect(),
      option3Right = document.getElementById('option-3-right').getBoundingClientRect(),
      option4 = document.getElementById('option-4').getBoundingClientRect(),
      question2Left = document.getElementById('question-2-left').getBoundingClientRect(),
      question2Right = document.getElementById('question-2-right').getBoundingClientRect(),
      question3Left = document.getElementById('question-3-left').getBoundingClientRect(),
      question3Right = document.getElementById('question-3-right').getBoundingClientRect(),
      question4 = document.getElementById('question-4').getBoundingClientRect(),
      percentageNode1 = document.getElementById('percentage-node-1').getBoundingClientRect(),
      percentageNode2 = document.getElementById('percentage-node-2').getBoundingClientRect(),
      percentageNode3 = document.getElementById('percentage-node-3').getBoundingClientRect(),
      percentageNode4 = document.getElementById('percentage-node-4').getBoundingClientRect(),
      percentageNode5 = document.getElementById('percentage-node-5').getBoundingClientRect(),
      percentageNode6 = document.getElementById('percentage-node-6').getBoundingClientRect(),
      percentageNode7 = document.getElementById('percentage-node-7').getBoundingClientRect();

  //clear svg canvas
  document.querySelector('.arrow-canvas').innerHTML = ''

  //create left arrow on option 1
  document.querySelector('.arrow-canvas').innerHTML += `
  <defs>
    <marker id="arrowheadLeft" markerWidth="5" markerHeight="3"
    refX="0" refY="1.5" orient="auto">
      <polygon points="0 0, 3 1.5, 0 3" fill="rgb(204, 204, 204)" />
    </marker>
  </defs>
  <path d="
  M${option1.left + ((option1.right - option1.left)/2.5)}, ${option1.bottom + scroll}
  C${option1.left + ((option1.right - option1.left)/2.5)}, ${(question2Left.top + scroll) - (((question2Left.top + scroll)-(option1.bottom + scroll))/2)}
   ${question2Left.left + ((question2Left.right - question2Left.left)/2)}, ${option1.bottom + scroll}
   ${question2Left.left + ((question2Left.right - question2Left.left)/2)}, ${question2Left.top + scroll}, " stroke="rgb(204, 204, 204)" fill="none" stroke-width="8" marker-end="url(#arrowheadLeft)"/>`;
  //create right arrow on option 1
  document.querySelector('.arrow-canvas').innerHTML += `
  <defs>
    <marker id="arrowheadRight" markerWidth="5" markerHeight="3"
    refX="0" refY="1.5" orient="auto">
      <polygon points="0 0, 3 1.5, 0 3" fill="rgb(74, 148, 207)" />
    </marker>
  </defs>
  <path d="
  M${option1.right - ((option1.right - option1.left)/2.5)}, ${option1.bottom + scroll}
  C${option1.right - ((option1.right - option1.left)/2.5)}, ${(question2Left.top + scroll) - (((question2Left.top + scroll)-(option1.bottom + scroll))/2)}
   ${question2Right.left + ((question2Right.right - question2Right.left)/2)}, ${option1.bottom + scroll}
   ${question2Right.left + ((question2Right.right - question2Right.left)/2)}, ${question2Right.top + scroll}, " stroke="rgb(74, 148, 207)" fill="none" stroke-width="8" marker-end="url(#arrowheadRight)"/>`;

  //create left arrow on option 2 left
  document.querySelector('.arrow-canvas').innerHTML += `
  <defs>
    <marker id="arrowheadLeft" markerWidth="5" markerHeight="3"
    refX="0" refY="1.5" orient="auto">
      <polygon points="0 0, 3 1.5, 0 3" fill="rgb(204, 204, 204)" />
    </marker>
  </defs>
  <path d="
  M${option2Left.left + ((option2Left.right - option2Left.left)/2.5)}, ${option2Left.bottom + scroll}
  C${option2Left.left + ((option2Left.right - option2Left.left)/2.5)}, ${(percentageNode1.top + scroll) - (((percentageNode1.top + scroll)-(option2Left.bottom + scroll))/1.2)}
   ${percentageNode1.left + ((percentageNode1.right - percentageNode1.left)/3)}, ${option2Left.bottom + scroll}
   ${percentageNode1.left + ((percentageNode1.right - percentageNode1.left)/3)}, ${percentageNode1.top + scroll}, " stroke="rgb(204, 204, 204)" fill="none" stroke-width="8" marker-end="url(#arrowheadLeft)"/>`;
  //create right arrow on option 2 left
  document.querySelector('.arrow-canvas').innerHTML += `
  <defs>
  <marker id="arrowheadRight" markerWidth="5" markerHeight="3"
  refX="0" refY="1.5" orient="auto">
    <polygon points="0 0, 3 1.5, 0 3" fill="rgb(74, 148, 207)" />
  </marker>
  </defs>
  <path d="
  M${option2Left.right - ((option2Left.right - option2Left.left)/2.5)}, ${option2Left.bottom + scroll}
  C${option2Left.right - ((option2Left.right - option2Left.left)/2.5)}, ${(question3Left.top + scroll) - (((question3Left.top + scroll)-(option2Left.bottom + scroll))/2)}
   ${question3Left.left + ((question3Left.right - question3Left.left)/2)}, ${(option2Left.bottom + scroll) + (((question3Left.top + scroll)-(option2Left.bottom + scroll))/2)}
   ${question3Left.left + ((question3Left.right - question3Left.left)/2)}, ${question3Left.top + scroll}, " stroke="rgb(74, 148, 207)" fill="none" stroke-width="8" marker-end="url(#arrowheadRight)"/>`;

   //create left arrow on option 2 right
   document.querySelector('.arrow-canvas').innerHTML += `
   <defs>
     <marker id="arrowheadLeft" markerWidth="5" markerHeight="3"
     refX="0" refY="1.5" orient="auto">
       <polygon points="0 0, 3 1.5, 0 3" fill="rgb(204, 204, 204)" />
     </marker>
   </defs>
   <path d="
   M${option2Right.left + ((option2Right.right - option2Right.left)/2.5)}, ${option2Right.bottom + scroll}
   C${option2Right.left + ((option2Right.right - option2Right.left)/2.5)}, ${(question3Right.top + scroll) - (((question3Right.top + scroll)-(option2Right.bottom + scroll))/2)}
    ${question3Right.left + ((question3Right.right - question3Right.left)/2)}, ${(option2Right.bottom + scroll) + (((question3Right.top + scroll)-(option2Right.bottom + scroll))/2)}
    ${question3Right.left + ((question3Right.right - question3Right.left)/2)}, ${question3Right.top + scroll}, " stroke="rgb(204, 204, 204)" fill="none" stroke-width="8" marker-end="url(#arrowheadLeft)"/>`;
   //create right arrow on option 2 right
   document.querySelector('.arrow-canvas').innerHTML += `
   <defs>
   <marker id="arrowheadRight" markerWidth="5" markerHeight="3"
   refX="0" refY="1.5" orient="auto">
     <polygon points="0 0, 3 1.5, 0 3" fill="rgb(74, 148, 207)" />
   </marker>
   </defs>
   <path d="
   M${option2Right.right - ((option2Right.right - option2Right.left)/2.5)}, ${option2Right.bottom + scroll}
   C${option2Right.right - ((option2Right.right - option2Right.left)/2.5)}, ${(percentageNode7.top + scroll) - (((percentageNode7.top + scroll)-(option2Right.bottom + scroll))/1.2)}
    ${percentageNode7.left + ((percentageNode7.right - percentageNode7.left)/4)}, ${option2Right.bottom + scroll}
    ${percentageNode7.left + ((percentageNode7.right - percentageNode7.left)/4)}, ${percentageNode7.top + scroll}, " stroke="rgb(74, 148, 207)" fill="none" stroke-width="8" marker-end="url(#arrowheadRight)"/>`;

   //create left arrow on option 3 left
   document.querySelector('.arrow-canvas').innerHTML += `
   <defs>
     <marker id="arrowheadLeft" markerWidth="5" markerHeight="3"
     refX="0" refY="1.5" orient="auto">
       <polygon points="0 0, 3 1.5, 0 3" fill="rgb(204, 204, 204)" />
     </marker>
   </defs>
   <path d="
   M${option3Left.left + ((option3Left.right - option3Left.left)/2.5)}, ${option3Left.bottom + scroll}
   C${option3Left.left + ((option3Left.right - option3Left.left)/2.5)}, ${(percentageNode2.top + scroll) - (((percentageNode2.top + scroll)-(option3Left.bottom + scroll))/1.2)}
    ${percentageNode2.left + ((percentageNode2.right - percentageNode2.left)/4)}, ${(option3Left.bottom + scroll) + (((percentageNode2.top + scroll)-(option3Left.bottom + scroll))/2)}
    ${percentageNode2.left + ((percentageNode2.right - percentageNode2.left)/4)}, ${percentageNode2.top + scroll}, " stroke="rgb(204, 204, 204)" fill="none" stroke-width="8" marker-end="url(#arrowheadLeft)"/>`;
   //create right arrow on option 3 left
   document.querySelector('.arrow-canvas').innerHTML += `
   <defs>
   <marker id="arrowheadRight" markerWidth="5" markerHeight="3"
   refX="0" refY="1.5" orient="auto">
     <polygon points="0 0, 3 1.5, 0 3" fill="rgb(74, 148, 207)" />
   </marker>
   </defs>
   <path d="
   M${option3Left.right - ((option3Left.right - option3Left.left)/2.5)}, ${option3Left.bottom + scroll}
   C${option3Left.right - ((option3Left.right - option3Left.left)/2.5)}, ${(question4.top + scroll) - (((question4.top + scroll)-(option3Left.bottom + scroll))/2)}
    ${question4.left + ((question4.right - question4.left)/2)}, ${(option3Left.bottom + scroll) + (((question4.top + scroll)-(option3Left.bottom + scroll))/2)}
    ${question4.left + ((question4.right - question4.left)/2)}, ${question4.top + scroll}, " stroke="rgb(74, 148, 207)" fill="none"
    stroke-width="8" marker-end="url(#arrowheadRight)"/>`;

    //create left arrow on option 3 right
    document.querySelector('.arrow-canvas').innerHTML += `
    <defs>
      <marker id="arrowheadLeft" markerWidth="5" markerHeight="3"
      refX="0" refY="1.5" orient="auto">
        <polygon points="0 0, 3 1.5, 0 3" fill="rgb(204, 204, 204)" />
      </marker>
    </defs>
    <path d="
    M${option3Right.left + ((option3Right.right - option3Right.left)/2.5)}, ${option3Right.bottom + scroll}
    C${option3Right.left + ((option3Right.right - option3Right.left)/2.5)}, ${(percentageNode5.top + scroll) - (((percentageNode5.top + scroll)-(option3Right.bottom + scroll))/1.2)}
     ${percentageNode5.left + ((percentageNode5.right - percentageNode5.left)/4)}, ${(option3Right.bottom + scroll) + (((percentageNode5.top + scroll)-(option3Right.bottom + scroll))/2)}
     ${percentageNode5.left + ((percentageNode5.right - percentageNode5.left)/4)}, ${percentageNode5.top + scroll}, " stroke="rgb(204, 204, 204)" fill="none" stroke-width="8" marker-end="url(#arrowheadLeft)"/>`;
    //create right arrow on option 3 right
    document.querySelector('.arrow-canvas').innerHTML += `
    <defs>
    <marker id="arrowheadRight" markerWidth="5" markerHeight="3"
    refX="0" refY="1.5" orient="auto">
      <polygon points="0 0, 3 1.5, 0 3" fill="rgb(74, 148, 207)" />
    </marker>
    </defs>
    <path d="
    M${option3Right.right - ((option3Right.right - option3Right.left)/2.5)}, ${option3Right.bottom + scroll}
    C${option3Right.right - ((option3Right.right - option3Right.left)/2.5)}, ${(percentageNode6.top + scroll) - (((percentageNode6.top + scroll)-(option3Right.bottom + scroll))/1.2)}
     ${percentageNode6.left + ((percentageNode6.right - percentageNode6.left)/4)}, ${(option3Right.bottom + scroll) + (((percentageNode6.top + scroll)-(option3Right.bottom + scroll))/2)}
     ${percentageNode6.left + ((percentageNode6.right - percentageNode6.left)/4)}, ${percentageNode6.top + scroll}, " stroke="rgb(74, 148, 207)" fill="none"
     stroke-width="8" marker-end="url(#arrowheadRight)"/>`;

     //create left arrow on option 4
     document.querySelector('.arrow-canvas').innerHTML += `
     <defs>
       <marker id="arrowheadLeft" markerWidth="5" markerHeight="3"
       refX="0" refY="1.5" orient="auto">
         <polygon points="0 0, 3 1.5, 0 3" fill="rgb(204, 204, 204)" />
       </marker>
     </defs>
     <path d="
     M${option4.left + ((option4.right - option4.left)/2.5)}, ${option4.bottom + scroll}
     C${option4.left + ((option4.right - option4.left)/2.5)}, ${(percentageNode3.top + scroll) - (((percentageNode3.top + scroll)-(option4.bottom + scroll))/2)}
      ${percentageNode3.left + ((percentageNode3.right - percentageNode3.left)/4)}, ${(option4.bottom + scroll) + (((percentageNode3.top + scroll)-(option4.bottom + scroll))/2)}
      ${percentageNode3.left + ((percentageNode3.right - percentageNode3.left)/4)}, ${percentageNode3.top + scroll}, " stroke="rgb(204, 204, 204)" fill="none" stroke-width="8" marker-end="url(#arrowheadLeft)"/>`;
     //create right arrow on option 4
     document.querySelector('.arrow-canvas').innerHTML += `
     <defs>
     <marker id="arrowheadRight" markerWidth="5" markerHeight="3"
     refX="0" refY="1.5" orient="auto">
       <polygon points="0 0, 3 1.5, 0 3" fill="rgb(74, 148, 207)" />
     </marker>
     </defs>
     <path d="
     M${option4.right - ((option4.right - option4.left)/2.5)}, ${option4.bottom + scroll}
     C${option4.right - ((option4.right - option4.left)/2.5)}, ${(percentageNode4.top + scroll) - (((percentageNode4.top + scroll)-(option4.bottom + scroll))/2)}
      ${percentageNode4.left + ((percentageNode4.right - percentageNode4.left)/4)}, ${(option4.bottom + scroll) + (((percentageNode4.top + scroll)-(option4.bottom + scroll))/2)}
      ${percentageNode4.left + ((percentageNode4.right - percentageNode4.left)/4)}, ${percentageNode4.top + scroll}, " stroke="rgb(74, 148, 207)" fill="none"
      stroke-width="8" marker-end="url(#arrowheadRight)"/>`;
}

drawArrows();

window.addEventListener('resize', drawArrows);
window.addEventListener('scroll', drawArrows);
