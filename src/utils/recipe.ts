const recipeName = encodeURIComponent('나물비빔밥');

const URL = `http://211.237.50.150:7080/openapi/5404a36af00a7277e33c61fbd307833181cf2f3334349c47e5dc78833b9fa63f/json/Grid_20150827000000000226_1/1/200`;

export const fetchFoodData = async () => {
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error('API 요청 실패');
  }

  const data = await res.json();
  return data;
};
