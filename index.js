function receivesAFunction(cb) {
  return cb()
}

function returnsANamedFunction(){
  return function namedFunction(){
    console.log("Hello")
  }
}

function returnsAnAnonymousFunction(){
  return function(){
    console.log("Hello World")
  }
}
