import { post } from './helpers/ApiRequestsHelper'

function create (data) {
  return post('restaurantCategories', data)
}

export { create }
