document.addEventListener('keyup', displaydata);

let i=0;
function displaydata(){
   let age = data.results[i].dob.age;
   let firstName = data.results[i].name.first;
   let lastName = data.results[i].name.last;
   let email = data.results[i].email;
   let profileImage = data.results[i].picture.large;
   var ageNum = document.getElementById("age")
   var name = document.getElementById("name");
   var eMail= document.getElementById("email");
   var image = document.getElementById("image");
   ageNum.innerHTML ="Age:" + age
   name.innerHTML = "Name:" + " " + firstName + " " + lastName
   i++
   eMail.innerHTML = email
   image.src = profileImage;
   if(i == data.results.length){
       i=0;
   }
}
displaydata()











