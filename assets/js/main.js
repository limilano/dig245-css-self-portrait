
/* javascript */

var bauhaus = `

Staaatliches Bauhaus (1919-1933)

      ..-""T-..
    ,'__   |   '.
   /   N|  |     !
  :     '  |      :
  [      __|      ]
  :      _I       :
   !   ___I      /
    '.  N]     ,'
      "-"!..--"

`;

console.log(bauhaus);

const boxes = document.querySelectorAll("#portrait");
console.log(boxes);

window.addEventListener("mousemove", function(event) {
  document.getElementById("x-value").textContent = event.x;
  document.getElementById("y-value").textContent = event.y;
});
