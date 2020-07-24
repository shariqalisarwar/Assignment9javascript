                                          //   CH # 38-42
                           //FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS 

//task1
// var value = Math.pow(7, 2);
//          document.write("a raised to b : " + value );


//Task2
// function isLeapYear() { 
//     var year= document.getElementById("year").value; 
      
//     document.getElementById("enteryear").innerHTML  
//         = (year % 100 === 0) ? (year % 400 === 0) 
//                              : (year % 4 === 0); 
// } 


//Task3
// var a = 5; 
// var b = 6; 
// var c = 7; 
// var s = (a + b + c)/2;
// var area =  Math.sqrt(s*((s-a)*(s-b)*(s-c)));
// console.log(area);



//Task4
// var students = [['chemistry', 80], ['biology', 77], ['physics', 88]];

// var Avgmarks = 0;

// for (var i=0; i < students.length; i++) {
//         Avgmarks += students[i][1];
//         var avg = (Avgmarks/students.length);
// }

// console.log("Average grade: " + (Avgmarks)/students.length);

//         if (avg < 60){
//           console.log("Grade : F");      
//           } 
//         else if (avg < 70) {
//                 console.log("Grade : D"); 
//                   } 
//         else if (avg < 80) 
//              {
//                 console.log("Grade : C"); 
//         } else if (avg < 90) {
//                 console.log("Grade : B"); 
//         } else if (avg < 100) {
//                 console.log("Grade : A"); 
// }



//Task5
// function myFunction() {
//     var str = "Hello world, welcome to the universe.";
//     var n = str.indexOf("welcome");
//     document.getElementById("demo").innerHTML = n;
//   }



//Task6
// var string = "hello i am shariqalisarwar";

// string = string.replace( /[aeiou]/g, '' );

// console.log(string);



//Task7
// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;

//     switch (str) {
//         case 'a':
//             count++;
//         case 'A':
//             count++
//         case 'e':
//         case 'E':
//         case 'i':
//         case 'I':
//         case 'o':
//         case 'O':
//         case 'u':
//         case 'U':
//             return 1;
//         default:
//             return 0;
//     }
// }

// findOccurrences();



//Task8
// var kilometers = parseInt(prompt("Please enter kilometers:"));
// var m =  kilometers   * 1000;
// var cm = kilometers   * 1000 * 100;
// var f =  kilometers   * 3280.84;
// var i =  kilometers   * 39370.08;
// console.log(m + " Meters", cm + "centimeters", f + "feet", i + "inches");



//Task9
// var rate = prompt("Please enter how much overtime money you earn per hour");
// overtimepay = (rate * 40)
// alert ("Your overall  earned overtime in 40 hours Your total pay is " + overtimepay);




//Task10
// var amount = prompt("Please enter amount for withdraw");
// var note100 = amount / 100
//  var note50 = amount % 100 / 50
//  var note10 = amount % 100 % 50 / 10
//  console.log(note100 + "100 note is", note50 + "50 note is", note10 + "note 10 is")





                                          //CH# 43-48  EVENTS

 // TASK 1
//  function link(){
//   var l = document.getElementById("link"); 
//  l.innerHTML =  "Click on the LINK for further confirmation.";  
//  alert(l)
//  }



// //Task2
// function myFunction() {
//     var x = document.getElementById("myImg").src;
//     document.getElementById("demo").innerHTML = x;
//     alert("thanks for purchasing")
//   }




  //Task3
//   function SomeDeleteRowFunction(o) {
//     var p=o.parentNode.parentNode;
//         p.parentNode.removeChild(p);
//    }




//Task4
// function changeImage(){
//         var occeanImage = document.getElementById('img')
    
//         occeanImage.src ="data:image/jpeg;base64,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"
//     }
//     function changeImageBefore(){
//         var occeanImage = document.getElementById('img')
//         occeanImage.src = "1.jpg"
//     }



//Task5

// decrementNumber.onclick = function() {
//   textBox.value = parseInt(textBox.value) -1
// }
// incrementNumber.onclick = function() {
//   textBox.value = parseInt(textBox.value) + 1
// }







                                               //CH# 49-52
                                               //EVENTS
  //TASK1
  // function validateForm() {
  //   var x = document.forms["myForm"]["yourname"].value;
  //   if (x == "") {
  //     alert("Name must be filled out");
  //     return false;
  //   }
  // }




  //Task2
  // function myFunction() {
  //   document.getElementById("demo").innerHTML = "Hello World its me i am a shariq";
  // }
  


  //Task3
//  function deleteRow(id,row) {
//     document.getElementById(id).deleteRow(row);
// }

// function insRow(id) {
//     var filas = document.getElementById("myTable").rows.length;
//     var x = document.getElementById(id).insertRow(filas);
//     var y = x.insertCell(0);
//     var z = x.insertCell(1);
//     y.innerHTML = '<input type="text" id="fname">';
//     z.innerHTML ='<button id="btn" name="btn" > Delete</button>';
// }





//                                                CH# 58-67
//                                                   DOM
//Task1
// function myFunction() {
//   var x = document.getElementById("main-content").action;
//   document.getElementById("demo").innerHTML = x;
// }



//task2       1
// function myFunction() {
//   var x = document.getElementById("main-content").nodeType;
//   document.getElementById("demo").innerHTML = x;
// }
              //2
 // var a = document.getElementById("main-content")
// console.log(a.childNodes[2])
              //3
// function myFunction() {
//   var textnode = document.createTextNode("statebank");
//   var item = document.getElementById("main-content").childNodes[0];
//   item.replaceChild(textnode, item.childNodes[0]);
// }
              //4
// function myFunction() {
//   var list = document.getElementById("main-content").firstChild.innerHTML;
//   document.getElementById("demo").innerHTML = list;
//   var list = document.getElementById("main-content").lastChild.innerHTML;
//   document.getElementById("demo").innerHTML = list;
              // }
                      //5
// function myFunction() {
// var x = document.getElementById("last-name").previousSibling.innerHTML; 
// document.getElementById("demo").innerHTML = x;
// var x = document.getElementById("last-name").nextSibling.innerHTML; 
// document.getElementById("demo").innerHTML = x;
//  }
                      //6
//  function myFunction() {
// var x = document.getElementById("myLI").parentNode.nodeName;
// document.getElementById("demo").innerHTML = x;
// }