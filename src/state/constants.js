// Actions

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
          content: 'Peel banana'
        },
        {
          id: 'abf',
          content: 'Mix ingredients'
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
          content: 'Slice cheese'
        },
        {
          id: 'abj',
          content: 'Toast bread'
        }
      ]
    }
  ]
}
