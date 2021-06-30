import db from "./firebase";

// question manager api
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

export async function getQuestion({ keyword, categories }) {
  try {
    let query = null;
    if (!categories?.length) {
      query = await db.collection("questions").where("question", ">=", keyword);
    } else {
      query = await db
        .collection("questions")
        .where("question", ">=", keyword)
        .where("categories", "in", categories);
    }
    const questions = await query.get();
    if (questions.exists) {
      return questions.data();
    }
    return {};
  } catch (error) {
    return { status: 400, message: "get question error" };
  }
}

// type question api
export async function getTypeQuestions(id) {
  try {
    const query = await db.collection("typeQuestions").doc(id).get();
    if (query.exists) {
      return query.data();
    }
    return {};
  } catch (error) {
    return { status: 400, message: "Server error" };
  }
}

export async function addTypeQuestion({
  nameType,
  typesQuestion,
  nameCategory,
}) {
  try {
    const typeQuestions = await db.collection("typeQuestions");
    const newId = await typeQuestions.get().docs.length;
    const newTypeQuestions = await db.collection("typeQuestions").doc(nameType);
    let data = {};
    for (let i = 0; i < typesQuestion.length; i++) {
      data[newId * 100000 + i] = typesQuestion[i];
    }
    await newTypeQuestions.set({ data });
    await db
      .collection("CategoriesTypeQuestions")
      .doc()
      .set({ id: nameType, name: nameCategory });
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

export async function getCategoriesTypeQuestions() {
  try {
    const query = await db.collection("CategoriesTypeQuestions").get();
    if (query) {
      return query.docs.map(doc => doc.data());
    }
    return {};
  } catch (error) {
    return { status: 400, message: "Server error" };
  }
}
