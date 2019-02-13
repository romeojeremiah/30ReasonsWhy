var resultsIndex = 0
var adjectivesIndex = 0

var button = document.querySelector('button');

document.addEventListener('click', function(){
 changeReason();
 changeTitle();
})

function changeReason(){
 var resultsParagraph = document.querySelector('#results');
 var image = document.querySelector('#image'); 
 var results = [
 {name: 'Because she makes me smile 🙂',
 image: 'images/01_smile.jpg' },
 {name: 'Because she be like \' I leepy\ 😪', 
  image:'images/02_leepy.jpg' },
 {name: 'Because she kisses me every morning 😗', 
  image:'images/03_kisses.jpg' },
{name: 'Because she\'s my Red Carpet Queen', 
  image:'images/04_redcarpet.jpg' },
 {name: 'Because she\'s Adventurous like me! 😗', 
  image:'images/05_adventurous.jpg' },
 {name: 'Because she\'s an angel 👼🏿', 
  image:'images/06_angel.jpg' },               
 {name: 'Because she laughs at my corney jokes 🤣', 
  image:'images/07_corney.jpg' },
{name: 'Because she loves my son as her own', 
  image:'images/08_son.jpg' },
{name: 'Because she loves to cook and clean for me', 
  image:'images/09_cooking.jpg' },
 {name: 'Because she doesn\'t believe poo stinks 💩', 
  image:'images/10_poo_stinks.jpg' }, 
 {name: 'Because she be like \'GET IT RIGHT, BOO BOO\'👏', 
  image:'images/11_get_it_right.jpg' },
 {name: 'Because she\'s a \"Silly Billy\" like me!', 
  image:'images/12_silly_billy.jpg' },
 {name: 'Because she\'s a Selfie Queen 🤳', 
  image:'images/13_selfie_queen.jpg' }, 
 {name: 'Because she\'s a sophisticated lady,', 
  image:'images/14_sophisticated.jpg' },
 {name:  'Because she always brightens my day like a star ⭐', 
  image:'images/15_brightens_my_day.jpg' }, 
 {name: 'Because she always makes sure I have food to eat 🍖 🥗 🍗', 
  image:'images/16_food.jpg' },
{name: 'Because she never runs away from an opportunity to be a kid again', 
  image:'images/17_kid_again.jpg' }, 
	{name: 'Because she\'s a golfing superstar 🏌️', 
  image:'images/18_golf_superstar.jpg' },                                               
 {name: 'Because she likes to sing 🎤 and dance 💃🏿 and is always a vibrant person', 
  image:'images/19_dancing.jpg' }, 
 {name: 'Because she\'s selfless and doesn\'t mind volunteering her time to help others', 
  image:'images/20_volunteer.jpg' },
 {name:  'Because she\'s my beach 🏖️ partner!', 
  image:'images/21_beach_partner.jpg' },
 {name:  'Because she\'s a business mogul', 
  image:'images/22_business_mogul.jpg' },
 {name: 'And my bicyle 🚲 partner', 
  image:'images/23_bicycle.jpg' },                
 {name: 'And my travel ✈️ partner ', 
  image:'images/24_travel.jpg' },                
 {name: 'And my conference partner', 
  image:'images/25_conference.jpg' },                  
 {name: 'And because she helps me fix the house 🛠️', 
  image:'images/26_fix_the_house.jpg' },
 {name: 'And because she just brings me tears of joy 😂', 
  image:'images/27_tears_of_joy.jpg' },                
 {name: 'Every waking day of my life', 
  image:'images/28_every_waking_day.jpg' },                
 {name: 'Happy Valentine\'s Day 2019 💘, My Love! And I anticipate many more! You truly are my partner in life.', 
  image:'images/29_beach_shot.jpg' },
	 {name: 'Oh...And because she\'s my biggest fan, allowed me to code her Valentine\'s Day Card, and supports me going out to get...ALL THE CODES!😁', 
  image:'images/30_allthecodes.jpg' },
]
 
if (results[resultsIndex] != undefined){
    resultsParagraph.innerHTML = results[resultsIndex].name;
    image.src = results[resultsIndex].image;
    resultsIndex++
} else {
 resultsIndex = 0
}
}

function changeTitle(){
 
 var titleSpan = document.querySelector('span')
 
 var adjectives = [
'Alluring',
'Appealing',
'Charming',
'Cute',
'Dazzling',
'Elegant',
'Exquisite',
'Fascinating',
'Fine',
'Good-looking',
'Gorgeous',
'Graceful',
'Lovely',
'Magnificent',
'Marvelous',
'Splendid',
'Stunning',
'Wonderful',
'Beautiful',
'Admirable',
'Angelic',
'Classy',
'Divine',
'Enticing',
'Excellent',
'Foxy',
'Radiant',
'Ravishing',
]
 if (adjectives[adjectivesIndex] != undefined){
    titleSpan.innerHTML = adjectives[adjectivesIndex]
    adjectivesIndex++
} else {
 adjectivesIndex = 0
}

}
