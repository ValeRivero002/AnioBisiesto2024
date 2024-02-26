function bisiesto(a) {
  if(a%400==0)
  {
    return "Es Bisiesto";
  }
  {
    if(a%100==0 && a%400!=0)
    {
      return "No Es Bisiesto";
    }
    else
    {
      if(a%4==0 && a%100!=0)
      {
        return "Es Bisiesto";
      }
      else{
        return a +"";
      }
      
    }
  
  }
  
}

export default bisiesto;
