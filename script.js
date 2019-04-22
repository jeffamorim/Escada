let i = Number(prompt('Quantos degraus você quer na sua escada ?'));
let indiceDoDegrau = 0;
let material = prompt('Por favor digite o material desejado.');
let material2 = material;

while (indiceDoDegrau < i){
   if (indiceDoDegrau == 0){
      console.log(material);
      indiceDoDegrau++;
   }
   else {
      console.log(material2 + material);
      material2 = material2 + material;

      indiceDoDegrau++;
   }

}
