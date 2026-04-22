
//let index = 1;
var arrPicCoct_1 = new Array;
var arrPrepCoct_1 = new Array;

var arrPicCoct_2 = new Array;
var arrPrepCoct_2 = new Array;

var arrPicCoct_3 = new Array;
var arrPrepCoct_3 = new Array;


arrPicCoct_1 [1] = "Images/pstar_martini2.jpg";
arrPicCoct_1 [2] = "Images/pisco2.jpg";
arrPicCoct_1 [3] = "Images/esspresso.jpg";
arrPicCoct_1 [4] = "Images/bramble2.jpg";


arrPrepCoct_1 [1] = "50 ml of Absolute Vanilla\n50ml of Passionfruit Puree\n25ml of Lime Juice\n25ml Pineapple Juice\n15 ml Vanilla sugar syrup\n60 ml Champagne\nSelect and pre-chill a coupe glass\n\nPrepare garnish by washing the passion fruit and cutting it in half\nAdd all the ingredients in the shaker\nshake with ice for 15 seconds\nDouble strain in the coupe glass and garnish";
arrPrepCoct_1 [2] = "60ml pisco\n30ml simple syrup\n25ml lime juice\n1 large egg white\n2 to 3 dashes aromatic bitters\n\nAdd the pisco, simple syrup, lime juice, and egg white to a cocktail shaker\nAdd ice to fill, and shake vigorously. Alternatively, you can use a blender if you don't have a shaker\nStrain into an old-fashioned glass or sour glass and sprinkle the bitters on top of the foam. Serve immediately and enjoy";
arrPrepCoct_1 [3] = "50ml Absolute Vanilla\n70ml(double espresso)\n25ml Suger Syrup\n25ml Coffe Liquer\nSelect and pre-chill a coupe glass\n\nAdd the vodtka, coffe sugar and the liquer into the shaker\nAdd the handfull of ice and shake for 20 seconds\nDouble strain in the couble glass\nAdd 3 coffe beans as garnish ";
arrPrepCoct_1 [4] = "Gin: 50ml\nBlackberry liqueur: 25ml \nLemon juice: 25ml\nSimple syrup: 15ml \nFresh blackberries: 4 \nGarnish: Lemon Wheel \nGarnish: Blackberry\n\nIn a shaker, muddle the fresh blackberries\nAdd the gin, blackberry liqueur, lemon juice, and simple syrup\nFill the shaker with ice and shake well\nStrain the mixture into a rocks glass filled with crushed ice\nGarnish with a lemon wheel and a blackberry";

arrPicCoct_2 [1] = "Images/fashioned2.jpg";
arrPicCoct_2 [2] = "Images/negroni.jpg";
arrPicCoct_2 [3] = "Images/pina2.jpg";
arrPicCoct_2 [4] = "Images/mojito.jpg";


arrPrepCoct_2 [1] = "60ml bourbon (or rye whiskey, if preferred)\n25ml Brown Sugar\n3 dashes Angostura\n3 dashes Orange Angostura\nGarnish: Orange Peele\n\nFill a rocks glass with ice to chill\nAdd the sugar and bitters and bourbon into a mixing glass\nAdd a handful of ice and stir with a spoon for 20 seconds\nStrain the mixture into the chilled rocks glass and granish";
arrPrepCoct_2 [2] = "40ml Gin\n40ml Vermouth Rosso\n40ml Campari\nOrange slice/peel as garnish\n\nChill a rocks glass\nAdd the gin, vermouth and campari into the mixing glass\nAdd a handful of ice and stir for 20 seconds\nPour the mixture into the chilled rocks glass and granish";
arrPrepCoct_2 [3] = "half a cup of frozen pineapple\nhalf a cup of ice\n60ml Rum\n40ml cream of coconut (not coconut cream\n40ml Pineapple Juice\n25ml lime juice\n\nChill a hurricane glass\nBlend pineapple and ice until chunky\nAdd the remaining ingredients and blend until smooth\nAdd the mixture into the empty glass and garnish with pineapple slices";
arrPrepCoct_2 [4] = "50ml Rum of your choice\n25ml Sugar Syrup\n2 whole limes\n10 leaves of mint\nTop-Up with Club Soda\n\nCrush two handfulls of ice\nSlice the limes into wedges and add the to the glass\nAdd 8 mint leaves then muddle for 10 seconds\nAdd the Rum, Sugar and the crushed ice into the glass\nStir to mix all the ingredients and top with soda and garnish with mint";

arrPicCoct_3 [1] = "Images/panther.jpg";
arrPicCoct_3 [2] = "Images/swamp.jpg";
arrPicCoct_3 [3] = "Images/paradise.jpeg";
arrPicCoct_3 [4] = "Images/blackpearl.jpg";


arrPrepCoct_3 [1] = "40ml Citadelle Gin\n30 ml Lemon Juice\n45ml Miwadi Blackcurant\n90ml Prosecco\nTop-Up with Club Soda\nGarnish with Blackberries\n\nChill a hurricane glass\nAdd the gin, lemon, and blackcurrant into a shaker with ice\nShake for 20 seconds and strain into the glass, add the prossecco and ice\ntop up with soda and garnish";
arrPrepCoct_3 [2] = "50ml Captain Morgan\n30ml Ammaretto(Dissarono)\n25ml Brown Sugar Syrup\n20ml Lemon Juice\n\nChill a rocks glass\nAdd all the ingredients into the shaker with ice and shake for 20 seconds\nAdd ice into the rocks glass and strain the mixture and garnish with a cherry";
arrPrepCoct_3 [3] = "60ml Gin\n45ml Blueberry Syrup\n30ml Lemon Juice\n25ml Eggwhite\n\nChill a rocks glass\nAdd all the ingredients into the shaker with no ice and dry shake\nAdd the ice and shake again\nAdd ice into the rocks glass and strain the mixture and garnish with blueberries";
arrPrepCoct_3 [4] = "60ml Seadog Rum\n30ml Lemon Juice\n 25ml Sugar Syrup\n25ml Egg white\nDried orange wheel\n\nChill a rocks glass\nAdd all the ingredients into the shaker with no ice and dry shake\nAdd the ice and shake again\nAdd ice into the rocks glass and strain the mixture and garnish with a dried orange wheel";




function showCoctails_1()
 {  var index = document.getElementById("coctOpt_1").selectedIndex ;
 
    document.getElementById("imgCoct_1").src = arrPicCoct_1 [index+1];
		
    document.getElementById("coctText_1").value  = arrPrepCoct_1 [index+1];   

}


function showCoctails_2()
 {  var index = document.getElementById("coctOpt_2").selectedIndex ;
 
    document.getElementById("imgCoct_2").src = arrPicCoct_2 [index+1];
		
    document.getElementById("coctText_2").value  = arrPrepCoct_2 [index+1];   

}

function showCoctails_3()
 {  var index = document.getElementById("coctOpt_3").selectedIndex ;
 
    document.getElementById("imgCoct_3").src = arrPicCoct_3 [index+1];
		
    document.getElementById("coctText_3").value  = arrPrepCoct_3 [index+1];   

}

function menu() {
      var x = document.getElementById("menu");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
   }
