// eslint-disable-next-line import/no-anonymous-default-export
export default async function (token) {
  const response = await fetch(
    "https://3a178515-5a1f-4da4-b47b-b9e825f92625.mock.pstmn.io/getExam/",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const responseJson = await response.json();
  return responseJson;
}
