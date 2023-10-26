import {styleTags, tags} from "@lezer/highlight"

export const highlighting = styleTags({
  Identifier: tags.name,
  Number: tags.number,
  String: tags.string,
  Comment: tags.lineComment,
    Whitespace: tags.space,
    Punctuator: tags.punctuation,
    Keyword: tags.keyword,
    
    
})
