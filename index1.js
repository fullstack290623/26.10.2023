function go2() {
    try {
        go3()
    }
    catch (e) {
        console.log('trying to run go3');
        console.error(e);
    }    
}