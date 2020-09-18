window.addEventListener("input", () => {

   //get numbers A & B
   let numberA = parseInt(document.getElementById("numberA").value);
   let numberB = parseInt(document.getElementById("numberB").value);
   //console.log(`numberA = ${numberA}`);
   //console.log(`numberB = ${numberB}`);

   let sum = document.getElementById("sum");
   sum.innerText = numberA + numberB;

   let subtraction1 = document.getElementById("subtraction1");
   subtraction1.innerText = numberA - numberB;

   let subtraction2 = document.getElementById("subtraction2");
   subtraction2.innerText = numberB - numberA;

   let multiplication = document.getElementById("multiplication");
   multiplication.innerText = numberA * numberB;

   let division1 = document.getElementById("division1");
   division1.innerText = numberA / numberB;

   let division2 = document.getElementById("division2");
   division2.innerText = numberB / numberA;

   let square1 = document.getElementById("square1");
   square1.innerText = numberA * numberA;

   let square2 = document.getElementById("square2");
   square2.innerText = numberB * numberB;

   let divider1 = document.getElementById("divider1");
   divider1.innerText = Divider(numberA);

   let divider2 = document.getElementById("divider2");
   divider2.innerText = Divider(numberB);

   function Divider(n) {
      var r = [];
      for (var i = 1; i <= n; i++) {
         if (n % i === 0) {
            r.push(i)
         }
      }
      return r;
   }

   let factorial1 = document.getElementById("factorial1");
   factorial1.innerText = Factorial(numberA);

   let factorial2 = document.getElementById("factorial2");
   factorial2.innerText = Factorial(numberB);

   function Factorial(n) {
      var r = 1;
      for (var i = n; i > 1; i--) {
         r *= i;
      }
      return r;
   }
})