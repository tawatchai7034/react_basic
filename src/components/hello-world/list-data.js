import hwStyles from "./hello-word.module.css";

const list = [
  { id: 1, name: "test1" },
  { id: 2, name: "test2" },
  { id: 3, name: "test3" },
  { id: 4, name: "test4" },
  { id: 5, name: "test5" },
];

function handleClick(data) {
  alert("Button click " + data.name);
}

function showList() {
  const check = true;
  let content;
  if (check) {
    content = (
      <div>
        {list.map((item, index) => {
          return (
            <>
              <div className={hwStyles["item-flex-space-around"]}>
                <p className={hwStyles["text-red"]} key={item.id}>
                  {item.name}
                </p>
                <div>
                  <button onClick={() => handleClick(item)}>Click me!</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    );
  } else {
    content = (
      <div>
        {list.map((item, index) => {
          return (
            <>
              <div className={hwStyles["item-flex-space-around"]}>
                <p className={hwStyles["text-green"]} key={item.id}>
                  {item.name}
                </p>
                <div>
                  <button onClick={() => handleClick(item)}>Click me!</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    );
  }
  return <>{content}</>;
}

export default showList;
