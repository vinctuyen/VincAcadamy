import db from "./firebase";

export async function addQuestion({ question, categories, answer }) {
  try {
    const questions = await db.collection("questions").doc();
    await questions.set({ question, categories, answer });
    return { status: 200, message: "Add question success" };
  } catch (error) {
    return { status: 400, message: "Add question error" };
  }
}

export async function updateQuestion({ question, categories, answer, id }) {
  try {
    const questions = await db.collection("questions").doc(id);
    await questions.update({ question, categories, answer });
    return { status: 200, message: "Update question success" };
  } catch (error) {
    return { status: 400, message: "Update question error" };
  }
}

export async function getTypeQuestions(id) {
    const query = await db.collection("typeQuestions").doc(id).get();
    if (query.exists) {
      return query.data();
    }
    return {};
  }
  

export async function addTypeQuestion({ nameType, typesQuestion }) {
  try {
    const typeQuestions = await db.collection("typeQuestions");
    const newId = await typeQuestions.get().docs.length;
    const newTypeQuestions = await db.collection("typeQuestions").doc(nameType);
    let data = {};
    for (let i = 0; i < typesQuestion.length; i++) {
      data[newId * 100000 + i] = typesQuestion[i];
    }
    await newTypeQuestions.set({ data });
    return { status: 200, message: "Add type question success" };
  } catch (error) {
    return { status: 400, message: "Add type question error" };
  }
}

export async function updateTypeQuestion({ nameType, id, value }) {
  try {
    const typeQuestions = await db.collection("typeQuestions").doc(nameType);
    await typeQuestions.update({ id: value });
    return { status: 200, message: "Update type question success" };
  } catch (error) {
    return { status: 400, message: "Update type question error" };
  }
}
