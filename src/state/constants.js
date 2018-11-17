// Actions
export const RECIPE_ADDED = '@@recipes/RECIPE_ADDED'
export const TITLE_CHANGED = '@@addRecipe/TITLE_CHANGED'
export const INGREDIENT_CHANGED = '@@addRecipe/INGREDIENT_CHANGED'
export const STEP_CHANGED = '@@addRecipe/STEP_CHANGED'

// Paths
export const ABOUT_PATH = '/about'
export const COOKIE_POLICY_PATH = '/cookie-policy'
export const HOME_PATH = '/'
export const PRIVACY_POLICY_PATH = '/privacy-policy'
export const RECIPES_PATH = '/recipes'
export const SIGN_IN_PATH = '/sign-in'
export const TERMS_OF_USE_PATH = '/terms-of-use'

// State
export const initialState = {
  recipes: [
    {
      id: '123',
      title: 'Banana Cake',
      ingredients: [
        {
          id: 'abc',
          name: 'Banana'
        },
        {
          id: 'abd',
          name: 'Flour'
        }
      ],
      steps: [
        {
          id: 'abe',
          step: 'Peel banana'
        },
        {
          id: 'abf',
          step: 'Mix ingredients'
        }
      ]
    },
    {
      id: '124',
      title: 'Toasted Sandwich',
      ingredients: [
        {
          id: 'abg',
          name: 'Bread'
        },
        {
          id: 'abh',
          name: 'Cheese'
        }
      ],
      steps: [
        {
          id: 'abi',
          step: 'Slice cheese'
        },
        {
          id: 'abj',
          step: 'Toast bread'
        }
      ]
    }
  ]
}
