
 class general{
    constructor(id, name, price){
      this.id = id;
      this.name = name;
      this.price = price;
     
  
      this.bio = `This ${this.id} is ${this.name}  ${this.price} .`
    }
    greeting() {
      return "Hello! Hi, I'm ${this.name}!";
    }
  }
  class item extends general {
    constructor(id, name, price, gameConsole){
      super(id, name, price);
      this.gameConsole = gameConsole;
    }
    greeting() {
      return "Awesome!";
    }
  };

  class thing extends general {
    constructor(id, name, price, gameConsole, videoGames){
      super(id, name, price, gameConsole);
      this.videoGames = videoGames;
    }
    greeting() {
      return "lets play!";
    }
  };
  const game = new thing("game", "Fortnite", "$30", "Xbox", "Used",);
  
  game.play = function() {
    return 'I love to play games!';
  };
  
  console.log(game);
  
  console.log("Come on...", game.greeting());
  
  console.log("Lets go..", game.play());

