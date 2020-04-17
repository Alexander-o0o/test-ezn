const ffetch = (login, password) => (
  new Promise((resolve) => {
    setTimeout(() => (
      resolve({
        text: () => (
          JSON.stringify({
            success: login === 'Admin' && password === '12345',
          })
        ),
        status: '200',
        statusText: 'OK',
      })
    ), 1000);
  })
);

const authenticateUser = async (login, password) => {
  const response = await ffetch(login, password);

  const text = await response.text();
  const httpResponse = `HTTP: ${response.status} / ${response.statusText}`;
  if (text === response.statusText) {
    throw new Error(httpResponse);
  } else {
    try {
      return JSON.parse(text);
    } catch (error) {
      error.message += `\n\nParsed text: ${text}\n\n${httpResponse}`;
      throw error;
    }
  }
};

export default authenticateUser;
