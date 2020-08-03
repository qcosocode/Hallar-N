

var  HallarN= (N)=>{
    var centroi = '';
    Ninicial=N;
    
    
    do {
        centroi=Math.sqrt((N+N*N)/2);
        N++
       
        
      } while (centroi-Math.floor(centroi)!==0){
        
         console.log(`El primer valor de N mayor a ${Ninicial} es ${N-1} y su centro es ${centroi}`);

      }
    
     
}

HallarN(1000000000);
