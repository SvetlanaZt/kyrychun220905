export async function fetchApi(){
    return await fetch('https://api.apilayer.com/fixer/latest?base=USD&apikey=j1e3ILhOZJR4zJ9XVwIjk825d9gatOGR')
    .then(res => {
        if (!res.ok) {
          throw new Error('Не пришли данные');
        }
        return res.json();
      });
}