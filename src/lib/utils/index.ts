

export const Time = ()=>{
  const D = new Date();
  const GetTime = D.toLocaleTimeString('en-US', {hour: '2-digit', minute: "2-digit"});
  return GetTime;
} 

export const Today = ()=>{
  const D = new Date();
  const todayDate = (new Intl.DateTimeFormat('en-US', { dateStyle: "full"})).format(D);
  return todayDate;
} 

