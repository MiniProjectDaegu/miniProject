const requests = async (url) => {
 try {
  const response = await fetch(url);
  const data = await response.json();
  return data;
 } catch (error) {}
};

export default requests;
