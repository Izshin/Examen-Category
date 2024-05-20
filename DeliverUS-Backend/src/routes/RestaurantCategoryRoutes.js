import RestaurantCategoryController from '../controllers/RestaurantCategoryController.js'
import * as RestaurantCategoryMiddleware from '../middlewares/RestaurantCategoryMiddleware.js'
import { handleValidation } from '../middlewares/ValidationHandlingMiddleware.js'
import * as RestaurantCategoryValidation from '../controllers/validation/RestaurantCategoryValidation.js'
import { isLoggedIn, hasRole } from '../middlewares/AuthMiddleware.js'

const loadFileRoutes = function (app) {
  app.route('/restaurantCategories')
    .get(RestaurantCategoryController.index)
  app.route('/restaurantCategories')
    .post(
      isLoggedIn,
      hasRole('owner'),
      RestaurantCategoryValidation.create,
      handleValidation,
      RestaurantCategoryMiddleware.restaurantCategoryExists,
      RestaurantCategoryController.create

    )
}
export default loadFileRoutes
