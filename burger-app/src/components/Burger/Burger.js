import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
// import { withRouter } from "react-router-dom";
// import PropTypes from "prop-types";

const burger = props => {
  // преобразуем из обьекта в массив где под каждый ключ создаем элементы по значению ключа
  // т.е. из {salad: 2} => [<BurgerIngredient type='salad'/>, <BurgerIngredient type='salad'/>]
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      // Array(number) создает массив длинной number и заполняет пустыми элементами
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    //flatten array
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
//withRouter позоляет видеть свойства match history во вложенный компонентах
// эти свойства иначе видны только в компонентах указанных в <Route component={name}>
// export default withRouter(burger);
export default burger;
