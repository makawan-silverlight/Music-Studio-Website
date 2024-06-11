function Timer (time){
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    const minute = min>=10? min:"0" + min;
    const second = sec>=10? sec:"0" + sec;
    return `${minute}:${second}`
}
export default Timer