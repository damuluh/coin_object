let coin = {
    state: 0,
    flip: function() {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/

          Math.floor( Math.random() * 2 )

         this.state = Math.floor( Math.random() * 2 )
         return this.state
    },
    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */

           if (this.state === 1) {
               return 'Heads'

           }else{
               return 'Tails'
           }
    },
    toHTML: function() {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
         
         if (this.state === 1 ){
             image.src = './img/head.png'

         }else{
             image.src = './img/tail.png'
         }

         return image;
         

         }
           
        }; 
        function display20Flip(){
            
            for(let flips = 0; flips < 20; flips++){

               coin.flip() 
               
               let div = document.createElement('div')

               div.append(coin.toString())

               document.body.append(div)
            }

        }

        display20Flip()

        function display20images(){
            
            for(let flips = 0; flips < 20; flips++){

               coin.flip() 
               
               let div = document.createElement('div')

               div.append(coin.toHTML())

               document.body.append(div)
            }

        }
        display20images()
