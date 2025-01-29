import { type SchemaTypeDefinition } from 'sanity'
import { useranswer } from './useranswer'
import { mcqs } from './mcqs'





export const schema: { types: SchemaTypeDefinition[] } = {
  types: [mcqs,useranswer],
}
