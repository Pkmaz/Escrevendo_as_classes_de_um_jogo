class hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }
  attack(type) {
    let heroType = {
      "guerreiro": "espada",
      "mago": "magia",
      "monge": "artes marciais",
      "ninja": "shuriken",
    };

    console.log(`O ${type} atacou usando ${heroType[type]}`);
  }
}

let hero1 = new hero("Zangado", 30, "mago");
console.log(hero1);
hero1.attack(hero1.type);

let hero2 = new hero("Feliz", 25, "monge");
console.log(hero2);
hero2.attack(hero2.type);
