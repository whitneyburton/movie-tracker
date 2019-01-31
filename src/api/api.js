// const url = 'http://localhost:3000/api/'
const url = 'https://falsemotive.io/api/'

// const options 

/*
//some component file
fetchData(path,options)

//in api
fetchData()
*/

export const postData = async (path = '', user) => {
  const response = await fetch(`${url}${path}`, {
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
    // pass response.status and response.message 
    // and make a user friendly error message with EMOJIS 
  }
}

export const fetchData = async (path) => {
  const response = await fetch(`${url}${path}`)
  if (response.ok) {
    return await response.json()
  } else {
    throw new Error('Error fetching data')
  }
}