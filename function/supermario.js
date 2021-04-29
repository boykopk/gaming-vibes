expport.handler = async () => {
  console.log('function ran');

  const data = { name: mario, age: 35, job: plumber };

  // return response to browser
  return {
    statusCodde: 200,
    body: JSON.stringify(data),
  };
};
