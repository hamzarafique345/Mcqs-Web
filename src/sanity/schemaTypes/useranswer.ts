
export const useranswer = {
    name: 'userAnswer',
    title: 'User Answer',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'profilePicture',
        title: 'Profile Picture',
        type: 'url',
      },
      {
        name: 'score',
        title: 'Score',
        type: 'number',
      },
      {
        name: 'testNumber',
        title: 'Test Number',
        type: 'string',
      },
      {
        name: 'answers',
        title: 'Answers',
        type: 'array',
        of: [{ type: 'string' }], // Assuming answers are stored as an array of strings
      },
    ],
  };
// export const useranswer = {
//   name: "userAnswer",
//   title: "User Answer",
//   type: "document",
//   fields: [
//     {
//       name: "name",
//       title: "Name",
//       type: "string",
//     },
//     {
//       name: "email",
//       title: "Email",
//       type: "string",
//     },
//     {
//       name: "profilePicture",
//       title: "Profile Picture",
//       type: "url",
//     },
//     {
//       name: "score",
//       title: "Score",
//       type: "number",
//     },
//     {
//       name: "testNumber",
//       title: "Test Number",
//       type: "string",
//     },
//     {
//       name: "answers",
//       title: "Answers",
//       type: "array",
//       of: [{
//         type: "object",
//         fields: [
//           { name: "questionId", type: "string", title: "Question ID" },
//           { name: "answer", type: "string", title: "Answer" }
//         ]
//       }],
//     },
//   ],
// };
