import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
 /* <React.StrictMode>
    <App />
  </React.StrictMode>*/
  <div>
    <h1 className="heading">My Faverate Food</h1>
    
    <div >
    <h2>Dal,Rice and Sabaji</h2>
    <p>According to health experts, daal-chawal as a combo is known to be effective in weight loss program. It is recommended to consume daal-chawal as dinner for a minimum of four days every week to keep the weight of an average adult balanced. But you must control portion size!</p>
    
      <img className="food-img" src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/instant-pot-dal-rice-recipe-500x375.jpg" alt="dalRice" width="400" height="333"></img>
    </div>

    <div >
    <h2>Samosachart</h2>
    <p>It has all the delicious elements you look for in chaat. Spicy, savory, and saucy Chana Aloo Masala is topped with crispy samosa. Next it's drizzled with sweet, tangy, and creamy chutneys. And finally, it's finished off with bits of hot pepper, fresh cilantro, and crunchy thin sev.</p>
    
      <img className="food-img" src="https://spicecravings.com/wp-content/uploads/2021/03/Samosa-Chaat-Featured-1.jpg" alt="Samosachart" width="400" height="333"></img>
    </div>

    <div>
    <h2>Noodles</h2>
    <p>Many people like to eat noodles. Noodles play an irreplaceable role in the diet of people in the north of China. There are many ways to eat noodles. Do you know the advantages of eating noodles? There are eight main benefits to eating noodles.1.Save time 2.Replenish energy 3.Easy to absorb
</p>

  <img className="food-img" src="https://hot-thai-kitchen.com/wp-content/uploads/2021/11/chili-garlic-noodles-blog.jpg" alt="noodles" width="400" height="333"></img>
    </div>

    <div>
    <h2>Rasogola</h2>
    <p>Rasgulla (literally "syrup filled ball")[a] is a syrupy dessert popular in the eastern part of South Asia. It is made from ball-shaped dumplings of chhena dough, cooked in light sugar syrup. This is done until the syrup permeates the dumplings.</p>
    
      <img className="food-img" src="https://pragativadi.com/wp-content/uploads/2021/07/Rasgola.jpg" alt="Rasogola" width="400" height="333"></img>
    </div>

    <div>
    <h2>Manchorian</h2>
    <p>Manchurian is a class of Indian Chinese dish made by roughly chopping and deep-frying ingredients such as chicken, cauliflower (gobi), prawns, fish, mutton, and paneer, and then sautéeing them in a sauce flavored with soy sauce.[2][3] Manchurian is the result of the adaptation of Chinese cooking and seasoning techniques to suit Indian tastes. It has become a staple of Indian Chinese cuisine.</p>
   
      <img className="food-img" src="https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Monika_Manchanda/Indo_chinese_Chicken_Manchurian_recipe_1_400.jpg" alt="Manchorian" width="400" height="333"></img>
    </div>

    

  <p>© Copyright Faverate food</p>


  </div>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
