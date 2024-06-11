function randomMusic (currentMusic,length) {
    let num = Math.floor(Math.random()*(length-1))
    if(num == currentMusic){
        return randomMusic(currentMusic,length);
    }
    return num;
}

export default randomMusic