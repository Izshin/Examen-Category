import { RestaurantCategory } from '../models/models.js'

const restaurantCategoryExists = async (req, res, next) => {
  try {
    const categoryAlredyExists = await RestaurantCategory.count({
      where: { name: req.body.name }
    })
    if (categoryAlredyExists === 0) {
      return next()
    }
    return res.status(409).send('The restaurant category already exists')
  } catch (err) {
    return res.status(500).send(err.message)
  }
}

export { restaurantCategoryExists }
