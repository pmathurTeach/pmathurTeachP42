class Form{
    constructor(){
       this.input = createInput("Player Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(180, 38);
        this.title.style('font-size', '70px');
        this.title.style('color', 'LightCoral');
        this.input.position(550,400);
        
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('padding', '5px');
        this.input.style('font-size', '16px');
        this.input.style('font-style', 'regular');
        this.input.style('background', 'SandyBrown');
        this.input.style('color', 'black');
        this.button.position(560,500);
        this.button.style('width', '200px'); 
        this.button.style('font-size', '16px');
        this.button.style('height', '40px');
        this.button.style('color', 'white');
        this.button.style('font-style', 'bold');
        this.button.style('background', 'Crimson');
        this.reset.position(1000, 150);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('color', 'white');
        this.reset.style('font-size', '16px');
        this.reset.style('font-style', 'bold');
        this.reset.style('background', 'Crimson');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            //this.r.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '70px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
           // this.end();
        });
    }
}