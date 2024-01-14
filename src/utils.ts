
import { NewDiaryEntry, Visibility, Weater } from './types'

const parseComment = (CommentFromRequest: any): string => {
  if (isString(CommentFromRequest)) {
    throw new Error('Incorrect of missing comment')
  }
  return CommentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('fecha incorrecta')
  }
  return dateFromRequest
}

const parseWeather = (weaterFromRequest: any): Weater => {
  if (!isString(weaterFromRequest) || !isWeather(weaterFromRequest)) {
    throw new Error('Weater Incorrecto o faltante')
  }
  return weaterFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Visibilidad Erronea o faltante')
  }
  return visibilityFromRequest
}

const isWeather = (param: any): boolean => {
  return Object.values(Weater).includes(param)
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  return newEntry
}

export default toNewDiaryEntry
