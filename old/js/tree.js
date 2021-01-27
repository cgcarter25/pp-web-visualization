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

let arrow1Left = 0,
    arrow1Right = 0,
    arrow2aLeft = 0,
    arrow2aRight = 0,
    arrow2bLeft = 0,
    arrow2bRight = 0,
    arrow3aLeft = 0,
    arrow3aRight = 0,
    arrow3bLeft = 0,
    arrow3bRight = 0,
    arrow4Left = 0,
    arrow4Right = 0;

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
    <marker id="arrowhead1Left" markerWidth="5" markerHeight="3"
    refX="0" refY="1.5" orient="auto">
      <polygon id="arrowhead1Left" points="0 0, 3 1.5, 0 3" fill="rgb(204, 204, 204)" />
    </marker>
  </defs>
  <path id="arrow1Left" d="
  M${option1.left + ((option1.right - option1.left)/2.5)}, ${option1.bottom + scroll}
  C${option1.left + ((option1.right - option1.left)/2.5)}, ${(question2Left.top + scroll) - (((question2Left.top + scroll)-(option1.bottom + scroll))/2)}
   ${question2Left.left + ((question2Left.right - question2Left.left)/2)}, ${option1.bottom + scroll}
   ${question2Left.left + ((question2Left.right - question2Left.left)/2)}, ${question2Left.top + scroll}, " stroke="rgb(204, 204, 204)" fill="none" stroke-width="8" marker-end="url(#arrowhead1Left)"/>`
   //see if arrow has been clicked yet
   if (arrow1Left === 0) {
     document.getElementById('arrow1Left').className.baseVal = 'arrow-off';
   } else {
     document.getElementById('arrow1Left').className.baseVal === 'arrow-on';
   }

  //create right arrow on option 1
  document.querySelector('.arrow-canvas').innerHTML += `
  <defs>
    <marker id="arrowhead1Right" markerWidth="5" markerHeight="3"
    refX="0" refY="1.5" orient="auto">
      <polygon id="arrowhead1Right" points="0 0, 3 1.5, 0 3" fill="rgb(74, 148, 207)" />
    </marker>
  </defs>
  <path id="arrow1Right" d="
  M${option1.right - ((option1.right - option1.left)/2.5)}, ${option1.bottom + scroll}
  C${option1.right - ((option1.right - option1.left)/2.5)}, ${(question2Left.top + scroll) - (((question2Left.top + scroll)-(option1.bottom + scroll))/2)}
   ${question2Right.left + ((question2Right.right - question2Right.left)/2)}, ${option1.bottom + scroll}
   ${question2Right.left + ((question2Right.right - question2Right.left)/2)}, ${question2Right.top + scroll}, " stroke="rgb(74, 148, 207)" fill="none" stroke-width="8" marker-end="url(#arrowhead1Right)"/>`;
   //see if arrow has been clicked yet
   if (arrow1Right === 0) {
     document.getElementById('arrow1Right').className.baseVal = 'arrow-off';
   } else {
     document.getElementById('arrow1Right').className.baseVal === 'arrow-on';
   }

  //create left arrow on option 2 left
  document.querySelector('.arrow-canvas').innerHTML += `
  <defs>
    <marker id="arrowhead2aLeft" markerWidth="5" markerHeight="3"
    refX="0" refY="1.5" orient="auto">
      <polygon id="arrowhead2aLeft" points="0 0, 3 1.5, 0 3" fill="rgb(204, 204, 204)" />
    </marker>
  </defs>
  <path id="arrow2aLeft" d="
  M${option2Left.left + ((option2Left.right - option2Left.left)/2.5)}, ${option2Left.bottom + scroll}
  C${option2Left.left + ((option2Left.right - option2Left.left)/2.5)}, ${(percentageNode1.top + scroll) - (((percentageNode1.top + scroll)-(option2Left.bottom + scroll))/1.2)}
   ${percentageNode1.left + ((percentageNode1.right - percentageNode1.left)/3)}, ${option2Left.bottom + scroll}
   ${percentageNode1.left + ((percentageNode1.right - percentageNode1.left)/3)}, ${percentageNode1.top + scroll}, " stroke="rgb(204, 204, 204)" fill="none" stroke-width="8" marker-end="url(#arrowhead2aLeft)"/>`;
   //see if arrow has been clicked yet
   if (arrow2aLeft === 0) {
     document.getElementById('arrow2aLeft').className.baseVal = 'arrow-off';
   } else {
     document.getElementById('arrow2aLeft').className.baseVal === 'arrow-on';
   }

  //create right arrow on option 2 left
  document.querySelector('.arrow-canvas').innerHTML += `
  <defs>
    <marker id="arrowhead2aRight" markerWidth="5" markerHeight="3"
    refX="0" refY="1.5" orient="auto">
      <polygon id="arrowhead2aRight" points="0 0, 3 1.5, 0 3" fill="rgb(74, 148, 207)" />
    </marker>
  </defs>
  <path id="arrow2aRight" d="
  M${option2Left.right - ((option2Left.right - option2Left.left)/2.5)}, ${option2Left.bottom + scroll}
  C${option2Left.right - ((option2Left.right - option2Left.left)/2.5)}, ${(question3Left.top + scroll) - (((question3Left.top + scroll)-(option2Left.bottom + scroll))/2)}
   ${question3Left.left + ((question3Left.right - question3Left.left)/2)}, ${(option2Left.bottom + scroll) + (((question3Left.top + scroll)-(option2Left.bottom + scroll))/2)}
   ${question3Left.left + ((question3Left.right - question3Left.left)/2)}, ${question3Left.top + scroll}, " stroke="rgb(74, 148, 207)" fill="none" stroke-width="8" marker-end="url(#arrowhead2aRight)"/>`;
   //see if arrow has been clicked yet
   if (arrow2aRight === 0) {
     document.getElementById('arrow2aRight').className.baseVal = 'arrow-off';
   } else {
     document.getElementById('arrow2aRight').className.baseVal === 'arrow-on';
   }

   //create left arrow on option 2 right
   document.querySelector('.arrow-canvas').innerHTML += `
   <defs>
     <marker id="arrowhead2bLeft" markerWidth="5" markerHeight="3"
     refX="0" refY="1.5" orient="auto">
       <polygon id="arrowhead2bLeft" points="0 0, 3 1.5, 0 3" fill="rgb(204, 204, 204)" />
     </marker>
   </defs>
   <path id="arrow2bLeft" d="
   M${option2Right.left + ((option2Right.right - option2Right.left)/2.5)}, ${option2Right.bottom + scroll}
   C${option2Right.left + ((option2Right.right - option2Right.left)/2.5)}, ${(question3Right.top + scroll) - (((question3Right.top + scroll)-(option2Right.bottom + scroll))/2)}
    ${question3Right.left + ((question3Right.right - question3Right.left)/2)}, ${(option2Right.bottom + scroll) + (((question3Right.top + scroll)-(option2Right.bottom + scroll))/2)}
    ${question3Right.left + ((question3Right.right - question3Right.left)/2)}, ${question3Right.top + scroll}, " stroke="rgb(204, 204, 204)" fill="none" stroke-width="8" marker-end="url(#arrowhead2bLeft)"/>`;
    //see if arrow has been clicked yet
    if (arrow2bLeft === 0) {
      document.getElementById('arrow2bLeft').className.baseVal = 'arrow-off';
    } else {
      document.getElementById('arrow2bLeft').className.baseVal === 'arrow-on';
    }

   //create right arrow on option 2 right
   document.querySelector('.arrow-canvas').innerHTML += `
   <defs>
     <marker id="arrowheadRight" markerWidth="5" markerHeight="3"
     refX="0" refY="1.5" orient="auto">
       <polygon id="arrowhead2bRight" points="0 0, 3 1.5, 0 3" fill="rgb(74, 148, 207)" />
     </marker>
   </defs>
   <path id="arrow2bRight" d="
   M${option2Right.right - ((option2Right.right - option2Right.left)/2.5)}, ${option2Right.bottom + scroll}
   C${option2Right.right - ((option2Right.right - option2Right.left)/2.5)}, ${(percentageNode7.top + scroll) - (((percentageNode7.top + scroll)-(option2Right.bottom + scroll))/1.2)}
    ${percentageNode7.left + ((percentageNode7.right - percentageNode7.left)/4)}, ${option2Right.bottom + scroll}
    ${percentageNode7.left + ((percentageNode7.right - percentageNode7.left)/4)}, ${percentageNode7.top + scroll}, " stroke="rgb(74, 148, 207)" fill="none" stroke-width="8" marker-end="url(#arrowheadRight)"/>`;
    //see if arrow has been clicked yet
    if (arrow2bRight === 0) {
      document.getElementById('arrow2bRight').className.baseVal = 'arrow-off';
    } else {
      document.getElementById('arrow2bRight').className.baseVal === 'arrow-on';
    }

   //create left arrow on option 3 left
   document.querySelector('.arrow-canvas').innerHTML += `
   <defs>
     <marker id="arrowhead3aLeft" markerWidth="5" markerHeight="3"
     refX="0" refY="1.5" orient="auto">
       <polygon id="arrowhead3aLeft" points="0 0, 3 1.5, 0 3" fill="rgb(204, 204, 204)" />
     </marker>
   </defs>
   <path id="arrow3aLeft" d="
   M${option3Left.left + ((option3Left.right - option3Left.left)/2.5)}, ${option3Left.bottom + scroll}
   C${option3Left.left + ((option3Left.right - option3Left.left)/2.5)}, ${(percentageNode2.top + scroll) - (((percentageNode2.top + scroll)-(option3Left.bottom + scroll))/1.2)}
    ${percentageNode2.left + ((percentageNode2.right - percentageNode2.left)/4)}, ${(option3Left.bottom + scroll) + (((percentageNode2.top + scroll)-(option3Left.bottom + scroll))/2)}
    ${percentageNode2.left + ((percentageNode2.right - percentageNode2.left)/4)}, ${percentageNode2.top + scroll}, " stroke="rgb(204, 204, 204)" fill="none" stroke-width="8" marker-end="url(#arrowhead3aLeft)"/>`;
    //see if arrow has been clicked yet
    if (arrow3aLeft === 0) {
      document.getElementById('arrow3aLeft').className.baseVal = 'arrow-off';
    } else {
      document.getElementById('arrow3aLeft').className.baseVal === 'arrow-on';
    }
   //create right arrow on option 3 left
   document.querySelector('.arrow-canvas').innerHTML += `
   <defs>
     <marker id="arrowhead3aRight" markerWidth="5" markerHeight="3"
     refX="0" refY="1.5" orient="auto">
       <polygon id="arrowhead3aRight" points="0 0, 3 1.5, 0 3" fill="rgb(74, 148, 207)" />
     </marker>
   </defs>
   <path id="arrow3aRight" d="
   M${option3Left.right - ((option3Left.right - option3Left.left)/2.5)}, ${option3Left.bottom + scroll}
   C${option3Left.right - ((option3Left.right - option3Left.left)/2.5)}, ${(question4.top + scroll) - (((question4.top + scroll)-(option3Left.bottom + scroll))/2)}
    ${question4.left + ((question4.right - question4.left)/2)}, ${(option3Left.bottom + scroll) + (((question4.top + scroll)-(option3Left.bottom + scroll))/2)}
    ${question4.left + ((question4.right - question4.left)/2)}, ${question4.top + scroll}, " stroke="rgb(74, 148, 207)" fill="none"
    stroke-width="8" marker-end="url(#arrowhead3aRight)"/>`;
    //see if arrow has been clicked yet
    if (arrow3aRight === 0) {
      document.getElementById('arrow3aRight').className.baseVal = 'arrow-off';
    } else {
      document.getElementById('arrow3aRight').className.baseVal === 'arrow-on';
    }

    //create left arrow on option 3 right
    document.querySelector('.arrow-canvas').innerHTML += `
    <defs>
      <marker id="arrowhead3bLeft" markerWidth="5" markerHeight="3"
      refX="0" refY="1.5" orient="auto">
        <polygon id="arrowhead3bLeft" points="0 0, 3 1.5, 0 3" fill="rgb(204, 204, 204)" />
      </marker>
    </defs>
    <path id="arrow3bLeft" d="
    M${option3Right.left + ((option3Right.right - option3Right.left)/2.5)}, ${option3Right.bottom + scroll}
    C${option3Right.left + ((option3Right.right - option3Right.left)/2.5)}, ${(percentageNode5.top + scroll) - (((percentageNode5.top + scroll)-(option3Right.bottom + scroll))/1.2)}
     ${percentageNode5.left + ((percentageNode5.right - percentageNode5.left)/4)}, ${(option3Right.bottom + scroll) + (((percentageNode5.top + scroll)-(option3Right.bottom + scroll))/2)}
     ${percentageNode5.left + ((percentageNode5.right - percentageNode5.left)/4)}, ${percentageNode5.top + scroll}, " stroke="rgb(204, 204, 204)" fill="none" stroke-width="8" marker-end="url(#arrowhead3bLeft)"/>`;
     //see if arrow has been clicked yet
     if (arrow3bLeft === 0) {
       document.getElementById('arrow3bLeft').className.baseVal = 'arrow-off';
     } else {
       document.getElementById('arrow3bLeft').className.baseVal === 'arrow-on';
     }

    //create right arrow on option 3 right
    document.querySelector('.arrow-canvas').innerHTML += `
    <defs>
      <marker id="arrowhead3bRight" markerWidth="5" markerHeight="3"
      refX="0" refY="1.5" orient="auto">
        <polygon id="arrowhead3bRight" points="0 0, 3 1.5, 0 3" fill="rgb(74, 148, 207)" />
      </marker>
    </defs>
    <path id="arrow3bRight" d="
    M${option3Right.right - ((option3Right.right - option3Right.left)/2.5)}, ${option3Right.bottom + scroll}
    C${option3Right.right - ((option3Right.right - option3Right.left)/2.5)}, ${(percentageNode6.top + scroll) - (((percentageNode6.top + scroll)-(option3Right.bottom + scroll))/1.2)}
     ${percentageNode6.left + ((percentageNode6.right - percentageNode6.left)/4)}, ${(option3Right.bottom + scroll) + (((percentageNode6.top + scroll)-(option3Right.bottom + scroll))/2)}
     ${percentageNode6.left + ((percentageNode6.right - percentageNode6.left)/4)}, ${percentageNode6.top + scroll}, " stroke="rgb(74, 148, 207)" fill="none"
     stroke-width="8" marker-end="url(#arrowhead3bRight)"/>`;
     //see if arrow has been clicked yet
     if (arrow3bRight === 0) {
       document.getElementById('arrow3bRight').className.baseVal = 'arrow-off';
     } else {
       document.getElementById('arrow3bRight').className.baseVal === 'arrow-on';
     }

     //create left arrow on option 4
     document.querySelector('.arrow-canvas').innerHTML += `
     <defs>
       <marker id="arrowhead4Left" markerWidth="5" markerHeight="3"
       refX="0" refY="1.5" orient="auto">
         <polygon id="arrowhead4Left" points="0 0, 3 1.5, 0 3" fill="rgb(204, 204, 204)" />
       </marker>
     </defs>
     <path id="arrow4Left" d="
     M${option4.left + ((option4.right - option4.left)/2.5)}, ${option4.bottom + scroll}
     C${option4.left + ((option4.right - option4.left)/2.5)}, ${(percentageNode3.top + scroll) - (((percentageNode3.top + scroll)-(option4.bottom + scroll))/2)}
      ${percentageNode3.left + ((percentageNode3.right - percentageNode3.left)/4)}, ${(option4.bottom + scroll) + (((percentageNode3.top + scroll)-(option4.bottom + scroll))/2)}
      ${percentageNode3.left + ((percentageNode3.right - percentageNode3.left)/4)}, ${percentageNode3.top + scroll}, " stroke="rgb(204, 204, 204)" fill="none" stroke-width="8" marker-end="url(#arrowhead4Left)"/>`;
      //see if arrow has been clicked yet
      if (arrow4Left === 0) {
        document.getElementById('arrow4Left').className.baseVal = 'arrow-off';
      } else {
        document.getElementById('arrow4Left').className.baseVal === 'arrow-on';
      }

     //create right arrow on option 4
     document.querySelector('.arrow-canvas').innerHTML += `
     <defs>
       <marker id="arrowhead4Right" markerWidth="5" markerHeight="3"
       refX="0" refY="1.5" orient="auto">
         <polygon id="arrowhead4Right" points="0 0, 3 1.5, 0 3" fill="rgb(74, 148, 207)" />
       </marker>
     </defs>
     <path id="arrow4Right" d="
     M${option4.right - ((option4.right - option4.left)/2.5)}, ${option4.bottom + scroll}
     C${option4.right - ((option4.right - option4.left)/2.5)}, ${(percentageNode4.top + scroll) - (((percentageNode4.top + scroll)-(option4.bottom + scroll))/2)}
      ${percentageNode4.left + ((percentageNode4.right - percentageNode4.left)/4)}, ${(option4.bottom + scroll) + (((percentageNode4.top + scroll)-(option4.bottom + scroll))/2)}
      ${percentageNode4.left + ((percentageNode4.right - percentageNode4.left)/4)}, ${percentageNode4.top + scroll}, " stroke="rgb(74, 148, 207)" fill="none"
      stroke-width="8" marker-end="url(#arrowhead4Right)"/>`;
      //see if arrow has been clicked yet
      if (arrow4Right === 0) {
        document.getElementById('arrow4Right').className.baseVal = 'arrow-off';
      } else {
        document.getElementById('arrow4Right').className.baseVal === 'arrow-on';
      }
}

drawArrows();

window.addEventListener('resize', drawArrows)

function clickOption1Left() {
  //draw arrow and arrowhead
  gsap.to('#arrow1Left', 0, {drawSVG: "0%", ease: Power1.easeOut});
  gsap.to('#arrowhead1Left', 0, {scale: 0});
  document.getElementById('arrow1Left').style.opacity= 1;
  gsap.to('#arrow1Left', 1, {drawSVG: "100%", ease: Power1.easeOut});
  gsap.to('#arrowhead1Left', 0.5, {scale: 1, ease: "elastic.out(1, 1)", delay: 1});
  //show next node
  gsap.to('#left-node-2', 0.5, {opacity: 1, ease: Power1.easeOut, delay: 1});
  //give arrow permanent opacity
  setTimeout(() => {
    arrow1Left = 1;
  },1000)
}

function clickOption1Right() {
  gsap.to('#arrow1Right', 0, {drawSVG: "0%", ease: Power1.easeOut});
  gsap.to('#arrowhead1Right', 0, {scale: 0});
  document.getElementById('arrow1Right').style.opacity= 1;
  gsap.to('#arrow1Right', 1, {drawSVG: "100%", ease: Power1.easeOut});
  gsap.to('#arrowhead1Right', 0.5, {scale: 1, ease: "elastic.out(1, 1)", delay: 1});
  //show next node
  gsap.to('#right-node-2', 0.5, {opacity: 1, ease: Power1.easeOut, delay: 1});
  //give arrow permanent opacity
  setTimeout(() => {
    arrow1Right = 1;
  },1000)
}

function clickOption2aLeft() {
  gsap.to('#arrow2aLeft', 0, {drawSVG: "0%", ease: Power1.easeOut});
  gsap.to('#arrowhead2aLeft', 0, {scale: 0});
  document.getElementById('arrow2aLeft').style.opacity= 1;
  gsap.to('#arrow2aLeft', 1, {drawSVG: "100%", ease: Power1.easeOut});
  gsap.to('#arrowhead2aLeft', 0.5, {scale: 1, ease: "elastic.out(1, 1)", delay: 1});
  //show next node
  gsap.to('#percentage-node-1', 0.5, {opacity: 1, ease: Power1.easeOut, delay: 1});
  //give arrow permanent opacity
  setTimeout(() => {
    arrow2aLeft = 1;
  },1000)
}

function clickOption2aRight() {
  gsap.to('#arrow2aRight', 0, {drawSVG: "0%", ease: Power1.easeOut});
  gsap.to('#arrowhead2aRight', 0, {scale: 0});
  document.getElementById('arrow2aRight').style.opacity= 1;
  gsap.to('#arrow2aRight', 1, {drawSVG: "100%", ease: Power1.easeOut});
  gsap.to('#arrowhead2aRight', 0.5, {scale: 1, ease: "elastic.out(1, 1)", delay: 1});
  //show next node
  gsap.to('#left-node-3', 0.5, {opacity: 1, ease: Power1.easeOut, delay: 1});
  //give arrow permanent opacity
  setTimeout(() => {
    arrow2aRight = 1;
  },1000)
}

function clickOption2bLeft() {
  gsap.to('#arrow2bLeft', 0, {drawSVG: "0%", ease: Power1.easeOut});
  gsap.to('#arrowhead2bLeft', 0, {scale: 0});
  document.getElementById('arrow2bLeft').style.opacity= 1;
  gsap.to('#arrow2bLeft', 1, {drawSVG: "100%", ease: Power1.easeOut});
  gsap.to('#arrowhead2bLeft', 0.5, {scale: 1, ease: "elastic.out(1, 1)", delay: 1});
  //show next node
  gsap.to('#right-node-3', 0.5, {opacity: 1, ease: Power1.easeOut, delay: 1});
  //give arrow permanent opacity
  setTimeout(() => {
    arrow2bLeft = 1;
  },1000)
}

function clickOption2bRight() {
  gsap.to('#arrow2bRight', 0, {drawSVG: "0%", ease: Power1.easeOut});
  gsap.to('#arrowhead2bRight', 0, {scale: 0});
  document.getElementById('arrow2bRight').style.opacity= 1;
  gsap.to('#arrow2bRight', 1, {drawSVG: "100%", ease: Power1.easeOut});
  gsap.to('#arrowhead2bRight', 0.5, {scale: 1, ease: "elastic.out(1, 1)", delay: 1});
  //show next node
  gsap.to('#percentage-node-7', 0.5, {opacity: 1, ease: Power1.easeOut, delay: 1});
  //give arrow permanent opacity
  setTimeout(() => {
    arrow2bRight = 1;
  },1000)
}

function clickOption3aLeft() {
  gsap.to('#arrow3aLeft', 0, {drawSVG: "0%", ease: Power1.easeOut});
  gsap.to('#arrowhead3aLeft', 0, {scale: 0});
  document.getElementById('arrow3aLeft').style.opacity= 1;
  gsap.to('#arrow3aLeft', 1, {drawSVG: "100%", ease: Power1.easeOut});
  gsap.to('#arrowhead3aLeft', 0.5, {scale: 1, ease: "elastic.out(1, 1)", delay: 1});
  //show next node
  gsap.to('#percentage-node-2', 0.5, {opacity: 1, ease: Power1.easeOut, delay: 1});
  //give arrow permanent opacity
  setTimeout(() => {
    arrow3aLeft = 1;
  },1000)
}

function clickOption3aRight() {
  gsap.to('#arrow3aRight', 0, {drawSVG: "0%", ease: Power1.easeOut});
  gsap.to('#arrowhead3aRight', 0, {scale: 0});
  document.getElementById('arrow3aRight').style.opacity= 1;
  gsap.to('#arrow3aRight', 1, {drawSVG: "100%", ease: Power1.easeOut});
  gsap.to('#arrowhead3aRight', 0.5, {scale: 1, ease: "elastic.out(1, 1)", delay: 1});
  //show next node
  gsap.to('#node-4', 0.5, {opacity: 1, ease: Power1.easeOut, delay: 1});
  //give arrow permanent opacity
  setTimeout(() => {
    arrow3aRight = 1;
  },1000)
}

function clickOption3bLeft() {
  gsap.to('#arrow3bLeft', 0, {drawSVG: "0%", ease: Power1.easeOut});
  gsap.to('#arrowhead3bLeft', 0, {scale: 0});
  document.getElementById('arrow3bLeft').style.opacity= 1;
  gsap.to('#arrow3bLeft', 1, {drawSVG: "100%", ease: Power1.easeOut});
  gsap.to('#arrowhead3bLeft', 0.5, {scale: 1, ease: "elastic.out(1, 1)", delay: 1});
  //show next node
  gsap.to('#percentage-node-5', 0.5, {opacity: 1, ease: Power1.easeOut, delay: 1});
  //give arrow permanent opacity
  setTimeout(() => {
    arrow3bLeft = 1;
  },1000)
}

function clickOption3bRight() {
  gsap.to('#arrow3bRight', 0, {drawSVG: "0%", ease: Power1.easeOut});
  gsap.to('#arrowhead3bRight', 0, {scale: 0});
  document.getElementById('arrow3bRight').style.opacity= 1;
  gsap.to('#arrow3bRight', 1, {drawSVG: "100%", ease: Power1.easeOut});
  gsap.to('#arrowhead3bRight', 0.5, {scale: 1, ease: "elastic.out(1, 1)", delay: 1});
  //show next node
  gsap.to('#percentage-node-6', 0.5, {opacity: 1, ease: Power1.easeOut, delay: 1});
  //give arrow permanent opacity
  setTimeout(() => {
    arrow3bRight = 1;
  },1000)
}

function clickOption4Left() {
  gsap.to('#arrow4Left', 0, {drawSVG: "0%", ease: Power1.easeOut});
  gsap.to('#arrowhead4Left', 0, {scale: 0});
  document.getElementById('arrow4Left').style.opacity= 1;
  gsap.to('#arrow4Left', 1, {drawSVG: "100%", ease: Power1.easeOut});
  gsap.to('#arrowhead4Left', 0.5, {scale: 1, ease: "elastic.out(1, 1)", delay: 1});
  //show next node
  gsap.to('#percentage-node-3', 0.5, {opacity: 1, ease: Power1.easeOut, delay: 1});
  //give arrow permanent opacity
  setTimeout(() => {
    arrow4Left = 1;
  },1000)
}

function clickOption4Right() {
  gsap.to('#arrow4Right', 0, {drawSVG: "0%", ease: Power1.easeOut});
  gsap.to('#arrowhead4Right', 0, {scale: 0});
  document.getElementById('arrow4Right').style.opacity= 1;
  gsap.to('#arrow4Right', 1, {drawSVG: "100%", ease: Power1.easeOut});
  gsap.to('#arrowhead4Right', 0.5, {scale: 1, ease: "elastic.out(1, 1)", delay: 1});
  //show next node
  gsap.to('#percentage-node-4', 0.5, {opacity: 1, ease: Power1.easeOut, delay: 1});
  //give arrow permanent opacity
  setTimeout(() => {
    arrow4Right = 1;
  },1000)
}

getBrowserWidth();
window.addEventListener('resize', getBrowserWidth)

function showAllResults() {
  clickOption1Left();
  clickOption1Right();
  setTimeout(() => clickOption2aLeft(), 1000);
  setTimeout(() => clickOption2aRight(), 1000);
  setTimeout(() => clickOption2bLeft(), 1000);
  setTimeout(() => clickOption2bRight(), 1000);
  setTimeout(() => clickOption3aLeft(), 2000);
  setTimeout(() => clickOption3aRight(), 2000);
  setTimeout(() => clickOption3bLeft(), 2000);
  setTimeout(() => clickOption3bRight(), 2000);
  setTimeout(() => clickOption4Left(), 3000);
  setTimeout(() => clickOption4Right(), 3000);
}

function hideAllResults() {
  //give arrow permanent opacity
  setTimeout(() => {
    arrow1Left = 0;
    arrow1Right = 0;
    arrow2aLeft = 0;
    arrow2aRight = 0;
    arrow2bLeft = 0;
    arrow2bRight = 0;
    arrow3aLeft = 0;
    arrow3aRight = 0;
    arrow3bLeft = 0;
    arrow3bRight = 0;
    arrow4Left = 0;
    arrow4Right = 0;
  }, 0);

  //node 1Left
  //hide next node
  gsap.to('#left-node-2', 0.5, {opacity: 0, ease: Power1.easeOut, delay: 3});
  //draw arrow and arrowhead
  gsap.to('#arrow1Left', 1, {drawSVG: "0%", ease: Power1.easeOut, delay: 3});
  gsap.to('#arrowhead1Left', .25, {scale: 0, delay: 3});

  //node 1Right
  //hide next node
  gsap.to('#right-node-2', 0.5, {opacity: 0, ease: Power1.easeOut, delay: 3});
  //draw arrow and arrowhead
  gsap.to('#arrow1Right', 1, {drawSVG: "0%", ease: Power1.easeOut, delay: 3});
  gsap.to('#arrowhead1Right', .25, {scale: 0, delay: 3});

  //node 2aLeft
  //hide next node
  gsap.to('#percentage-node-1', 0.5, {opacity: 0, ease: Power1.easeOut, delay: 2});
  //draw arrow and arrowhead
  gsap.to('#arrow2aLeft', 1, {drawSVG: "0%", ease: Power1.easeOut,  delay: 2});
  gsap.to('#arrowhead2aLeft', .25, {scale: 0,  delay: 2});

  //node 2aRight
  //hide next node
  gsap.to('#left-node-3', 0.5, {opacity: 0, ease: Power1.easeOut, delay: 2});
  //draw arrow and arrowhead
  gsap.to('#arrow2aRight', 1, {drawSVG: "0%", ease: Power1.easeOut, delay: 2});
  gsap.to('#arrowhead2aRight', .25, {scale: 0,  delay: 2});

  //node 2bLeft
  //hide next node
  gsap.to('#right-node-3', 0.5, {opacity: 0, ease: Power1.easeOut, delay: 2});
  //draw arrow and arrowhead
  gsap.to('#arrow2bLeft', 1, {drawSVG: "0%", ease: Power1.easeOut, delay: 2});
  gsap.to('#arrowhead2bLeft', .25, {scale: 0,  delay: 2});

  //node 2bRight
  //hide next node
  gsap.to('#percentage-node-7', 0.5, {opacity: 0, ease: Power1.easeOut, delay: 2});
  //draw arrow and arrowhead
  gsap.to('#arrow2bRight', 1, {drawSVG: "0%", ease: Power1.easeOut, delay: 2});
  gsap.to('#arrowhead2bRight', .25, {scale: 0,  delay: 2});

  //node 3aLeft
  //hide next node
  gsap.to('#percentage-node-2', 0.5, {opacity: 0, ease: Power1.easeOut, delay: 1});
  //draw arrow and arrowhead
  gsap.to('#arrow3aLeft', 1, {drawSVG: "0%", ease: Power1.easeOut, delay: 1});
  gsap.to('#arrowhead3aLeft', .25, {scale: 0,  delay: 1});

  //node 3aRight
  //hide next node
  gsap.to('#node-4', 0.5, {opacity: 0, ease: Power1.easeOut,  delay: 1});
  //draw arrow and arrowhead
  gsap.to('#arrow3aRight', 1, {drawSVG: "0%", ease: Power1.easeOut, delay: 1});
  gsap.to('#arrowhead3aRight', .25, {scale: 0,  delay: 1});

  //node 3bLeft
  //hide next node
  gsap.to('#percentage-node-5', 0.5, {opacity: 0, ease: Power1.easeOut, delay: 1});
  //draw arrow and arrowhead
  gsap.to('#arrow3bLeft', 1, {drawSVG: "0%", ease: Power1.easeOut,  delay: 1});
  gsap.to('#arrowhead3bLeft', .25, {scale: 0,  delay: 1});

  //node 3bRight
  //hide next node
  gsap.to('#percentage-node-6', 0.5, {opacity: 0, ease: Power1.easeOut, delay: 1});
  //draw arrow and arrowhead
  gsap.to('#arrow3bRight', 1, {drawSVG: "0%", ease: Power1.easeOut, delay: 1});
  gsap.to('#arrowhead3bRight', .25, {scale: 0,  delay: 1});

  //node 4Left
  //hide next node
  gsap.to('#percentage-node-3', 0.5, {opacity: 0, ease: Power1.easeOut});
  //draw arrow and arrowhead
  gsap.to('#arrow4Left', 1, {drawSVG: "0%", ease: Power1.easeOut});
  gsap.to('#arrowhead4Left', .25, {scale: 0});

  //node 4Right
  //hide next node
  gsap.to('#percentage-node-4', 0.5, {opacity: 0, ease: Power1.easeOut});
  //draw arrow and arrowhead
  gsap.to('#arrow4Right', 1, {drawSVG: "0%", ease: Power1.easeOut});
  gsap.to('#arrowhead4Right', .25, {scale: 0});

}
// function drawArrows() {
//   document.querySelector('.svg').innerHTML = `<svg class="arrow-canvas" width="${document.querySelector('body').clientWidth}" height="${document.querySelector('body').clientHeight}"></svg>`
//
//   let scroll = this.scrollY,
//
//       option1 = document.getElementById('option-1').getBoundingClientRect(),
//       option2Left = document.getElementById('option-2-left').getBoundingClientRect(),
//       option2Right = document.getElementById('option-2-right').getBoundingClientRect(),
//       option3Left = document.getElementById('option-3-left').getBoundingClientRect(),
//       option3Right = document.getElementById('option-3-right').getBoundingClientRect(),
//       option4 = document.getElementById('option-4').getBoundingClientRect(),
//       question2Left = document.getElementById('question-2-left').getBoundingClientRect(),
//       question2Right = document.getElementById('question-2-right').getBoundingClientRect(),
//       question3Left = document.getElementById('question-3-left').getBoundingClientRect(),
//       question3Right = document.getElementById('question-3-right').getBoundingClientRect(),
//       question4 = document.getElementById('question-4').getBoundingClientRect(),
//       percentageNode1 = document.getElementById('percentage-node-1').getBoundingClientRect(),
//       percentageNode2 = document.getElementById('percentage-node-2').getBoundingClientRect(),
//       percentageNode3 = document.getElementById('percentage-node-3').getBoundingClientRect(),
//       percentageNode4 = document.getElementById('percentage-node-4').getBoundingClientRect(),
//       percentageNode5 = document.getElementById('percentage-node-5').getBoundingClientRect(),
//       percentageNode6 = document.getElementById('percentage-node-6').getBoundingClientRect(),
//       percentageNode7 = document.getElementById('percentage-node-7').getBoundingClientRect();
//
//   //clear svg canvas
//   document.querySelector('.arrow-canvas').innerHTML = ''
//
//   //create left arrow on option 1
//   document.querySelector('.arrow-canvas').innerHTML += `
//   <defs>
//     <marker id="arrowheadLeft" markerWidth="5" markerHeight="3"
//     refX="0" refY="1.5" orient="auto">
//       <polygon points="0 0, 3 1.5, 0 3" fill="rgb(204, 204, 204)" />
//     </marker>
//   </defs>
//   <path id="arrow1Left" d="
//   M${option1.left + ((option1.right - option1.left)/2.5)}, ${option1.bottom + scroll}
//   C${option1.left + ((option1.right - option1.left)/2.5)}, ${(question2Left.top + scroll) - (((question2Left.top + scroll)-(option1.bottom + scroll))/2)}
//    ${question2Left.left + ((question2Left.right - question2Left.left)/2)}, ${option1.bottom + scroll}
//    ${question2Left.left + ((question2Left.right - question2Left.left)/2)}, ${question2Left.top + scroll}, " stroke="rgb(204, 204, 204)" fill="none" stroke-width="8" marker-end="url(#arrowheadLeft)"/>`;
//   //create right arrow on option 1
//   document.querySelector('.arrow-canvas').innerHTML += `
//   <defs>
//     <marker id="arrowheadRight" markerWidth="5" markerHeight="3"
//     refX="0" refY="1.5" orient="auto">
//       <polygon points="0 0, 3 1.5, 0 3" fill="rgb(74, 148, 207)" />
//     </marker>
//   </defs>
//   <path d="
//   M${option1.right - ((option1.right - option1.left)/2.5)}, ${option1.bottom + scroll}
//   C${option1.right - ((option1.right - option1.left)/2.5)}, ${(question2Left.top + scroll) - (((question2Left.top + scroll)-(option1.bottom + scroll))/2)}
//    ${question2Right.left + ((question2Right.right - question2Right.left)/2)}, ${option1.bottom + scroll}
//    ${question2Right.left + ((question2Right.right - question2Right.left)/2)}, ${question2Right.top + scroll}, " stroke="rgb(74, 148, 207)" fill="none" stroke-width="8" marker-end="url(#arrowheadRight)"/>`;
//
//   //create left arrow on option 2 left
//   document.querySelector('.arrow-canvas').innerHTML += `
//   <defs>
//     <marker id="arrowheadLeft" markerWidth="5" markerHeight="3"
//     refX="0" refY="1.5" orient="auto">
//       <polygon points="0 0, 3 1.5, 0 3" fill="rgb(204, 204, 204)" />
//     </marker>
//   </defs>
//   <path d="
//   M${option2Left.left + ((option2Left.right - option2Left.left)/2.5)}, ${option2Left.bottom + scroll}
//   C${option2Left.left + ((option2Left.right - option2Left.left)/2.5)}, ${(percentageNode1.top + scroll) - (((percentageNode1.top + scroll)-(option2Left.bottom + scroll))/1.2)}
//    ${percentageNode1.left + ((percentageNode1.right - percentageNode1.left)/3)}, ${option2Left.bottom + scroll}
//    ${percentageNode1.left + ((percentageNode1.right - percentageNode1.left)/3)}, ${percentageNode1.top + scroll}, " stroke="rgb(204, 204, 204)" fill="none" stroke-width="8" marker-end="url(#arrowheadLeft)"/>`;
//   //create right arrow on option 2 left
//   document.querySelector('.arrow-canvas').innerHTML += `
//   <defs>
//   <marker id="arrowheadRight" markerWidth="5" markerHeight="3"
//   refX="0" refY="1.5" orient="auto">
//     <polygon points="0 0, 3 1.5, 0 3" fill="rgb(74, 148, 207)" />
//   </marker>
//   </defs>
//   <path d="
//   M${option2Left.right - ((option2Left.right - option2Left.left)/2.5)}, ${option2Left.bottom + scroll}
//   C${option2Left.right - ((option2Left.right - option2Left.left)/2.5)}, ${(question3Left.top + scroll) - (((question3Left.top + scroll)-(option2Left.bottom + scroll))/2)}
//    ${question3Left.left + ((question3Left.right - question3Left.left)/2)}, ${(option2Left.bottom + scroll) + (((question3Left.top + scroll)-(option2Left.bottom + scroll))/2)}
//    ${question3Left.left + ((question3Left.right - question3Left.left)/2)}, ${question3Left.top + scroll}, " stroke="rgb(74, 148, 207)" fill="none" stroke-width="8" marker-end="url(#arrowheadRight)"/>`;
//
//    //create left arrow on option 2 right
//    document.querySelector('.arrow-canvas').innerHTML += `
//    <defs>
//      <marker id="arrowheadLeft" markerWidth="5" markerHeight="3"
//      refX="0" refY="1.5" orient="auto">
//        <polygon points="0 0, 3 1.5, 0 3" fill="rgb(204, 204, 204)" />
//      </marker>
//    </defs>
//    <path d="
//    M${option2Right.left + ((option2Right.right - option2Right.left)/2.5)}, ${option2Right.bottom + scroll}
//    C${option2Right.left + ((option2Right.right - option2Right.left)/2.5)}, ${(question3Right.top + scroll) - (((question3Right.top + scroll)-(option2Right.bottom + scroll))/2)}
//     ${question3Right.left + ((question3Right.right - question3Right.left)/2)}, ${(option2Right.bottom + scroll) + (((question3Right.top + scroll)-(option2Right.bottom + scroll))/2)}
//     ${question3Right.left + ((question3Right.right - question3Right.left)/2)}, ${question3Right.top + scroll}, " stroke="rgb(204, 204, 204)" fill="none" stroke-width="8" marker-end="url(#arrowheadLeft)"/>`;
//    //create right arrow on option 2 right
//    document.querySelector('.arrow-canvas').innerHTML += `
//    <defs>
//    <marker id="arrowheadRight" markerWidth="5" markerHeight="3"
//    refX="0" refY="1.5" orient="auto">
//      <polygon points="0 0, 3 1.5, 0 3" fill="rgb(74, 148, 207)" />
//    </marker>
//    </defs>
//    <path d="
//    M${option2Right.right - ((option2Right.right - option2Right.left)/2.5)}, ${option2Right.bottom + scroll}
//    C${option2Right.right - ((option2Right.right - option2Right.left)/2.5)}, ${(percentageNode7.top + scroll) - (((percentageNode7.top + scroll)-(option2Right.bottom + scroll))/1.2)}
//     ${percentageNode7.left + ((percentageNode7.right - percentageNode7.left)/4)}, ${option2Right.bottom + scroll}
//     ${percentageNode7.left + ((percentageNode7.right - percentageNode7.left)/4)}, ${percentageNode7.top + scroll}, " stroke="rgb(74, 148, 207)" fill="none" stroke-width="8" marker-end="url(#arrowheadRight)"/>`;
//
//    //create left arrow on option 3 left
//    document.querySelector('.arrow-canvas').innerHTML += `
//    <defs>
//      <marker id="arrowheadLeft" markerWidth="5" markerHeight="3"
//      refX="0" refY="1.5" orient="auto">
//        <polygon points="0 0, 3 1.5, 0 3" fill="rgb(204, 204, 204)" />
//      </marker>
//    </defs>
//    <path d="
//    M${option3Left.left + ((option3Left.right - option3Left.left)/2.5)}, ${option3Left.bottom + scroll}
//    C${option3Left.left + ((option3Left.right - option3Left.left)/2.5)}, ${(percentageNode2.top + scroll) - (((percentageNode2.top + scroll)-(option3Left.bottom + scroll))/1.2)}
//     ${percentageNode2.left + ((percentageNode2.right - percentageNode2.left)/4)}, ${(option3Left.bottom + scroll) + (((percentageNode2.top + scroll)-(option3Left.bottom + scroll))/2)}
//     ${percentageNode2.left + ((percentageNode2.right - percentageNode2.left)/4)}, ${percentageNode2.top + scroll}, " stroke="rgb(204, 204, 204)" fill="none" stroke-width="8" marker-end="url(#arrowheadLeft)"/>`;
//    //create right arrow on option 3 left
//    document.querySelector('.arrow-canvas').innerHTML += `
//    <defs>
//    <marker id="arrowheadRight" markerWidth="5" markerHeight="3"
//    refX="0" refY="1.5" orient="auto">
//      <polygon points="0 0, 3 1.5, 0 3" fill="rgb(74, 148, 207)" />
//    </marker>
//    </defs>
//    <path id="arrow4Left" d="
//    M${option3Left.right - ((option3Left.right - option3Left.left)/2.5)}, ${option3Left.bottom + scroll}
//    C${option3Left.right - ((option3Left.right - option3Left.left)/2.5)}, ${(question4.top + scroll) - (((question4.top + scroll)-(option3Left.bottom + scroll))/2)}
//     ${question4.left + ((question4.right - question4.left)/2)}, ${(option3Left.bottom + scroll) + (((question4.top + scroll)-(option3Left.bottom + scroll))/2)}
//     ${question4.left + ((question4.right - question4.left)/2)}, ${question4.top + scroll}, " stroke="rgb(74, 148, 207)" fill="none"
//     stroke-width="8" marker-end="url(#arrowheadRight)"/>`;
//
//     //create left arrow on option 3 right
//     document.querySelector('.arrow-canvas').innerHTML += `
//     <defs>
//       <marker id="arrowheadLeft" markerWidth="5" markerHeight="3"
//       refX="0" refY="1.5" orient="auto">
//         <polygon points="0 0, 3 1.5, 0 3" fill="rgb(204, 204, 204)" />
//       </marker>
//     </defs>
//     <path d="
//     M${option3Right.left + ((option3Right.right - option3Right.left)/2.5)}, ${option3Right.bottom + scroll}
//     C${option3Right.left + ((option3Right.right - option3Right.left)/2.5)}, ${(percentageNode5.top + scroll) - (((percentageNode5.top + scroll)-(option3Right.bottom + scroll))/1.2)}
//      ${percentageNode5.left + ((percentageNode5.right - percentageNode5.left)/4)}, ${(option3Right.bottom + scroll) + (((percentageNode5.top + scroll)-(option3Right.bottom + scroll))/2)}
//      ${percentageNode5.left + ((percentageNode5.right - percentageNode5.left)/4)}, ${percentageNode5.top + scroll}, " stroke="rgb(204, 204, 204)" fill="none" stroke-width="8" marker-end="url(#arrowheadLeft)"/>`;
//     //create right arrow on option 3 right
//     document.querySelector('.arrow-canvas').innerHTML += `
//     <defs>
//     <marker id="arrowheadRight" markerWidth="5" markerHeight="3"
//     refX="0" refY="1.5" orient="auto">
//       <polygon points="0 0, 3 1.5, 0 3" fill="rgb(74, 148, 207)" />
//     </marker>
//     </defs>
//     <path d="
//     M${option3Right.right - ((option3Right.right - option3Right.left)/2.5)}, ${option3Right.bottom + scroll}
//     C${option3Right.right - ((option3Right.right - option3Right.left)/2.5)}, ${(percentageNode6.top + scroll) - (((percentageNode6.top + scroll)-(option3Right.bottom + scroll))/1.2)}
//      ${percentageNode6.left + ((percentageNode6.right - percentageNode6.left)/4)}, ${(option3Right.bottom + scroll) + (((percentageNode6.top + scroll)-(option3Right.bottom + scroll))/2)}
//      ${percentageNode6.left + ((percentageNode6.right - percentageNode6.left)/4)}, ${percentageNode6.top + scroll}, " stroke="rgb(74, 148, 207)" fill="none"
//      stroke-width="8" marker-end="url(#arrowheadRight)"/>`;
//
//      //create left arrow on option 4
//      document.querySelector('.arrow-canvas').innerHTML += `
//      <defs>
//        <marker id="arrowheadLeft" markerWidth="5" markerHeight="3"
//        refX="0" refY="1.5" orient="auto">
//          <polygon points="0 0, 3 1.5, 0 3" fill="rgb(204, 204, 204)" />
//        </marker>
//      </defs>
//      <path d="
//      M${option4.left + ((option4.right - option4.left)/2.5)}, ${option4.bottom + scroll}
//      C${option4.left + ((option4.right - option4.left)/2.5)}, ${(percentageNode3.top + scroll) - (((percentageNode3.top + scroll)-(option4.bottom + scroll))/2)}
//       ${percentageNode3.left + ((percentageNode3.right - percentageNode3.left)/4)}, ${(option4.bottom + scroll) + (((percentageNode3.top + scroll)-(option4.bottom + scroll))/2)}
//       ${percentageNode3.left + ((percentageNode3.right - percentageNode3.left)/4)}, ${percentageNode3.top + scroll}, " stroke="rgb(204, 204, 204)" fill="none" stroke-width="8" marker-end="url(#arrowheadLeft)"/>`;
//      //create right arrow on option 4
//      document.querySelector('.arrow-canvas').innerHTML += `
//      <defs>
//      <marker id="arrowheadRight" markerWidth="5" markerHeight="3"
//      refX="0" refY="1.5" orient="auto">
//        <polygon points="0 0, 3 1.5, 0 3" fill="rgb(74, 148, 207)" />
//      </marker>
//      </defs>
//      <path d="
//      M${option4.right - ((option4.right - option4.left)/2.5)}, ${option4.bottom + scroll}
//      C${option4.right - ((option4.right - option4.left)/2.5)}, ${(percentageNode4.top + scroll) - (((percentageNode4.top + scroll)-(option4.bottom + scroll))/2)}
//       ${percentageNode4.left + ((percentageNode4.right - percentageNode4.left)/4)}, ${(option4.bottom + scroll) + (((percentageNode4.top + scroll)-(option4.bottom + scroll))/2)}
//       ${percentageNode4.left + ((percentageNode4.right - percentageNode4.left)/4)}, ${percentageNode4.top + scroll}, " stroke="rgb(74, 148, 207)" fill="none"
//       stroke-width="8" marker-end="url(#arrowheadRight)"/>`;
//       gsap.to('#arrow4Left', 0, {drawSVG: "0%", ease: Power1.easeOut});
// }
