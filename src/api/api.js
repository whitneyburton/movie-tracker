export const postData = async function (option, user) {
  const url = 'https://falsemotive.io/api/';
  //const urlLocal = `http://localhost:3000/api/`
  const response = await fetch(`${url}${option}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  })

  if (response.ok) {
    return response;
  } else {
    throw new Error(`Error posting data: ${response.status}`);
  }
}
