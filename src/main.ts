let hello = ( name: string ): 
    string => `hello, ${name}!`;

document.getElementsByClassName( 'js-app' )[0].innerHTML = hello( 'Name' );