function go3() {
    
    //alert('go1')
    console.log('Hello js!');
    try {
        throw SyntaxError('MY ERROR')
        console.log('hi');
    }
    catch (e) {
        console.log('trying to run go3');
        console.error(e);
        throw SyntaxError('MY ERROR')
    }
    finally {
        console.log('ALWAYS ....');
    }
    console.log('I was the run who printed the error');
}