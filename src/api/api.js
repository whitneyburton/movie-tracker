export const postData = async function (url, user)  {

        const response = await fetch(`http://localhost:3000/api/${url}`, {
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

// } catch (error) {
//   console.log('yup and error')
//   return {ok:false,error: error.message };
//     }
