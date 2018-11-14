import { connect } from 'react-redux'

import { getRecipes } from '../../state/selectors'
import Recipes from './Recipes'

function mapStateToProps (state) {
  return {
    recipes: getRecipes(state)
  }
}

export default connect(mapStateToProps)(Recipes)
