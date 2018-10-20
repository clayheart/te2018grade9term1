function character(name){
     this.name = name
     this.quirk
     this.gender
     this.age
     this.birthday
     this.height
     this.haircolor1
     this.haircolor2
     this.eyecolor1
     this.eyecolor2
     this.bloodtype
     this.getInfo = getCharacter;
}

function getCharacter(){
	return "Name: " + this.name  + "Quirk: " + this.quirk + "Gender: " +  this.gender + "Age: " + this.age + "Birthday:" + this.birthday + "Height: " +  this.height + "HairColor1: " + this.haircolor1 + "HairColor2: " + this.haircolor2 + "EyeColor1: " + this.eyecolor1 + "EyeColor2: " + this.eyecolor2 + "BloodType: " + this.bloodtype

}


let shoto = new character("Shoto Todoroki ")
shoto.quirk = "Half-Cold Half-Hot "
shoto.gender = "male "
shoto.age = "15 "
shoto.birthday = "January 11 "
shoto.height = "176 cm (5' 9¼') "
shoto.haircolor1 = "White (right side) "
shoto.haircolor2 = "Crimson (left side) "
shoto.eyecolor1 = "Grey (right side) "
shoto.eyecolor2 = "Turquoise (left side) "
shoto.bloodtype = "O[1] "

console.log(shoto.getInfo())

let coolKid = {cool = true}
console.log(coolKid.cool)