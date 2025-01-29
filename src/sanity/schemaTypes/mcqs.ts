
// export const mcqs = {
//   name: 'mcq',
//   title: 'MCQ',
//   type: 'document',
//   fields: [
//     {
//       name: 'question',
//       title: 'Question',
//       type: 'string',
//     },
//     {
//       name: 'options',
//       title: 'Options',
//       type: 'array',
//       of: [{ type: 'string' }],
//     },
//     {
//       name: 'correctAnswer',
//       title: 'Correct Answer',
//       type: 'string',
//     },
//     {
//       name: 'testNumber',
//       title: 'Test Number',
//       type: 'string',
//     },
 
//   ],
// };
export const mcqs = {
  name: "mcq",
  title: "MCQ",
  type: "document",
  fields: [
    {
      name: "question",
      title: "Question",
      type: "string",
    },
    {
      name: "options",
      title: "Options",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "correctAnswer",
      title: "Correct Answer",
      type: "string",
    },
    {
      name: "testNumber",
      title: "Test Number",
      type: "string",
    },
  ],
};