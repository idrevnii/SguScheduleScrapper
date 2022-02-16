export type Schedule = (Lesson | LessonWithVariants)[][]

export type RawLessons = {
  id: Id
  lessons: Lesson | LessonWithVariants
}

export type LessonWithVariants = {
  name?: string
  variants: Omit<Lesson, 'name'>[]
}

export type Lesson = {
  type?: string
  odd?: string
  subgroup?: string
  name?: string
  teacher?: string
  auditory?: string
}

export type LessonSpecials = {
  type?: string
  odd?: string
  subgroup?: string
}

export type LessonName = {
  name?: string
}

export type LessonTeacher = {
  teacher?: string
}

export type LessonAuditory = {
  auditory?: string
}

type Id = `${number}_${number}`
