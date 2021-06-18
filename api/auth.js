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
  let user = { status: 200, info: {} };
  query.docs.forEach((item) => {
    user.info = item.data();
  });
  return user;
}
