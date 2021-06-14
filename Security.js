class Security {

    constructor(){

        this.access1 = createInput("Code1")
        this.access1.position(100,90);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("Code1")
        this.access2.position(100,330);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(100,360);
        this.button2.style('background', 'lightgrey');

        this.access3 = createInput("Code1")
        this.access3.position(100,550);
        this.access3.style('background', 'white');  

        this.button3 = createButton('Check');
        this.button3.position(100,580);
        this.button3.style('background', 'lightgrey');

        this.access4 = createInput("Code1")
        this.access4.position(750,90);
        this.access4.style('background', 'white');  

        this.button4 = createButton('Check');
        this.button4.position(750,120);
        this.button4.style('background', 'lightgrey');

        this.access5 = createInput("Code1")
        this.access5.position(750,330);
        this.access5.style('background', 'white');  

        this.button5 = createButton('Check');
        this.button5.position(750,360);
        this.button5.style('background', 'lightgrey');
        
        this.access6 = createInput("Code1")
        this.access6.position(750,550);
        this.access6.style('background', 'white');  

        this.button6 = createButton('Check');
        this.button6.position(750,580);
        this.button6.style('background', 'lightgrey');
        
        
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });

        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        })

        this.button4.mousePressed(() => {
            if(system.authenticate(accessCode4,this.access4.value())){
                this.button4.hide();
                this.access4.hide();
                score++;
            }
        })

        this.button5.mousePressed(() => {
            if(system.authenticate(accessCode5,this.access5.value())){
                this.button5.hide();
                this.access5.hide();
                score++;
            }
        })

        this.button6.mousePressed(() => {
            if(system.authenticate(accessCode6,this.access6.value())){
                this.button6.hide();
                this.access6.hide();
                score++;
            }
        })
        

    }
}