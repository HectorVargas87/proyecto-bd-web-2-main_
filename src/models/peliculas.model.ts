import { Schema, model } from 'mongoose'
import { Pelicula, PeliculaModel } from '../types/peliculas.type'
import { CATEGORY_REFENCE } from '../types/category.type'

const Peliculas = new Schema<Pelicula, PeliculaModel>({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: false,
    trim: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: CATEGORY_REFENCE
  },
  createdAt: {
    type: Date,
    default: () => Date.now()
  },
  lastModified: {
    type: Date,
    default: () => Date.now()
  }
})

export default model('Peliculas', Peliculas)
