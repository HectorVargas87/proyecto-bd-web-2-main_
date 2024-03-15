import type { Model } from 'mongoose'
import { User } from './user.type'

export const CATEGORY_REFENCE = 'Category'

export type Category = {
  id?: string
  name: string
  description?: string
  user: User
}

export type CategoryModel = Model<Category>
