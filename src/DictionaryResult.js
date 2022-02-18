import React from "react";

export default function DictionaryResult(props) {
  console.log(props);
  console.log(props.result.data[0].word);
  return (
    <div className="DictionaryResult">
      <h1>{props.result.data[0].word}</h1>
      <p>{props.result.data[0].meanings[0].partOfSpeech}</p>
      <p>1. {props.result.data[0].meanings[0].definitions[0].definition}</p>
      <p>2. {props.result.data[1].meanings[0].definitions[0].definition}</p>
      <p>3. {props.result.data[2].meanings[0].definitions[0].definition}</p>
    </div>
  );
}
