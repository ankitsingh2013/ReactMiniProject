import { useState } from "react";

function PostFormatComponent() {
  const [post, setPost] = useState([]);
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [input, setInput] = useState();
  const onBoldChangeHandler = () => {
    setBold(!bold);
  };
  const onItalicChangeHandler = () => {
    setItalic(!italic);
  };
  const onPostUpdate = () => {
    const data = {
      id: Math.random().toString(36).substring(7),
      text: input
    };
    setPost((prevPost) => [...prevPost, data]);
    console.log(post);
  };

  return (
    <p>
      <center>
        <textarea
          onChange={(e) => setInput(e.target.value)}
          style={{
            width: 250,
            height: 100,
            fontWeight: bold ? "bold" : "",
            fontStyle: italic ? "italic" : ""
          }}
        >
          {post}
        </textarea>
        <br />
        <button onClick={onBoldChangeHandler}>Bold</button>
        <button onClick={onItalicChangeHandler}>Italic</button>
        <button onClick={onPostUpdate}>Post</button>
      </center>
      <ul>
        {post.map((item) => (
          <li>
            {item.text} <button>X</button>
          </li>
        ))}
      </ul>
    </p>
  );
}

export default PostFormatComponent;
