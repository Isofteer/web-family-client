 export function forbiddenWordsMiddleware() {
    return function(next){
      return function(action){
        // do your stuff
        return next(action);
      }
    }
  }