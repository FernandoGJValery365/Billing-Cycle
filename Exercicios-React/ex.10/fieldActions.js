export function changeValue(e){
    //console.log('changeValue Funcionando');
    return { 
        type : 'VALUE_CHANGED',
        payload: e.target.value
    };
}