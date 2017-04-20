export const saucesToArray = (sauces) =>{
  const holder = [];
  Object.keys(sauces).forEach((key)=> holder.push(sauces[key]));
  debugger;
  return holder;
};
