export function getTime(isoString) {
    const date = new Date(isoString);  
   
  

    const istOffset = 5.5 * 60 * 60 * 1000; 

    const istDate = new Date(date.getTime() + istOffset);
  
    let hours = istDate.getUTCHours(); 
    const minutes = istDate.getUTCMinutes();
    const amPm = hours >= 12 ? 'PM' : 'AM';
  
    hours = hours % 12;
    hours = hours ? hours : 12;
  
    return `${hours}:${minutes} ${amPm}`;  
  }