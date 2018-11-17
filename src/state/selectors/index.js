export function getPathname ({ router: { location: { pathname } = {} } = {} }) {
  return pathname
}

export function getSearch ({ router: { location: { search } = {} } = {} }) {
  return search
}

export function getRecipes ({ recipes }) {
  return recipes
}

export function getIngredient ({ addRecipe: { ingredient } = {} }) {
  return ingredient
}

export function getTitle ({ addRecipe: { title } = {} }) {
  return title
}

export function getStep ({ addRecipe: { step } = {} }) {
  return step
}
