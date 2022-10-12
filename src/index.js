import React from "react";
import ReactDom from "react-dom";

// css
import "./index.css";
// setup vars
const firstBook = {
  img: "https://m.media-amazon.com/images/I/51EA+bXwJsL._SX343_BO1,204,203,200_.jpg",
  title: `The Four Agreements: A Practical Guide to Personal Freedom (A Tolt Wisdom Book)`,
  author: " Don Miguel Ruiz",
};

const secondBook = {
  img: "https://m.media-amazon.com/images/I/91tQkOHvW9L._AC_UL480_FMwebp_QL65_.jpg",
  title: `Fairy Tale`,
  author: "Stephen King",
};

const thirdBook = {
  img: "https://m.media-amazon.com/images/I/A1HS04PcjVL._AC_UL480_FMwebp_QL65_.jpg",
  title: `Mad Honey: A Novel`,
  author: "Jodi Picoult and Jennifer Finney",
};

function NavBar() {
  return (
    <>
      <Logo />
      <Links />
    </>
  );
}

function BookList() {
  return (
    <>
      <section className="navBar">
        <NavBar />
      </section>
      <section className="bookList">
        <Book
          img={firstBook.img}
          title={firstBook.title}
          author={firstBook.author}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            eos delectus cumque molestias fuga, aliquid ipsam dolorum earum
            nesciunt cum.
          </p>
        </Book>
        <Book
          img={secondBook.img}
          title={secondBook.title}
          author={secondBook.author}
        />
        <Book
          img={thirdBook.img}
          title={thirdBook.title}
          author={thirdBook.author}
        />
      </section>
    </>
  );
}
const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={props.img} alt="book" className="img" />
      <h1>{props.title}</h1>
      {props.children}
      <h4>{props.author.toUpperCase()}</h4>
      {console.log(props)}
    </article>
  );
};

const Logo = () => {
  return (
    <>
      <div className="logo">
        <label>MyLibrary</label>
        <label className="icon">
          <i className="fa-solid fa-bars-staggered"></i>
        </label>
      </div>
    </>
  );
};

const Links = () => (
  <ul className="links">
    <li>
      <a href="#">Home</a>
    </li>
    <li>
      <a href="#">About Us</a>
    </li>
    <li>
      <a href="#">Contact Us</a>
    </li>
    <li>
      <a href="#">Services</a>
    </li>
  </ul>
);

// icon.addEventListener("click", function () {
//   links.classList.toggle("show-links");
// });
// // nested components, react-tools
// const Person = () => <h2>John Doe</h2>;
// const Greet = () => {
//   return <h1>Hello world</h1>;
// };
// SECOND METHOD
// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello World")
//   );
// };

ReactDom.render(<NavBar />, document.getElementById("root"));
ReactDom.render(<BookList />, document.getElementById("root"));
