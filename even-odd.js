const findEvenOdd = (N, Arr) => 
{
    
    let B=[0,0];
    for(let i=0; i<N ;i++){
      if(Arr[i]%2===0){
          B[0]+=Arr[i];
      }
      else{
          B[1]+=Arr[i]
      }
    }
    return B;
};