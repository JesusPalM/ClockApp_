export const toggleElement = (element)=>{
    if(element.style.display !== 'none'){
        element.style.display = 'none';
    }else{
        element.style.display = 'flex';
    }
};