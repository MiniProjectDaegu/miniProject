export const getATPTCode = async () => {
  const data = await request("/ATPT_Code.json");
  return data;
};

const request = async (url) => {
  try {
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (error) {}
};
