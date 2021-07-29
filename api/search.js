// import { getQuestion } from "./questions";
// export async function handleSearch({ keyword, categories }) {
//   if (!keyword) {
//     return [];
//   }
//   try {
//     let questions = await getQuestion({ keyword });
//     let nameCategories
//     let query = null;
//     if (!categories?.length) {
//       query = await db.collection("questions").where("question", ">=", keyword);
//     } else {
//       query = await db
//         .collection("questions")
//         .where("question", ">=", keyword)
//         .where("categories", "in", categories);
//     }
//     const questions = await query.get();
//     if (questions.docs.length) {
//       return questions.docs.map((doc) => doc.data());
//     }
//     return [];
//   } catch (error) {
//     return { status: 400, message: "get question error" };
//   }
// }
