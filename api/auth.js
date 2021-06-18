import db from "./firebase";
export async function loginApi({ email, password }) {
  const users = db.collection("users");
  const query = await users
    .where("email", "==", email)
    .where("password", "==", password)
    .get();
  if (!query.docs.length) {
    throw { status: 404, message: "Sai tài khoản hoặc mật khẩu" };
  }
  let user = { status: 200, info: {}, id: "" };
  query.docs.forEach((item) => {
    user.info = item.data();
    user.id = item.id;
  });
  return user;
}

export async function checkUserExist(id) {
  const query = await db.collection("users").doc(id).get();
  if (query.exists) {
    return query.data();
  }
  return false;
}
