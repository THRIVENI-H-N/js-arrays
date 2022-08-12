const highAge = (N, Arr) => 
{
    let age=[];
  for(let i=0;i<N;i++){
    if(Arr[i]>=18){
      age.push(Arr[i]);
    }
    
  }
  return age;
};
 