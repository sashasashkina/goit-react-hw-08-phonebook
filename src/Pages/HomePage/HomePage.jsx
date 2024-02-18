// const HomePage = () => {
//   return <div>{/* <h1> Home page </h1> */}</div>;
// };

// export default HomePage;
import css from './HomePage.module.css';
const HomePage = () => {
  return (
    <div className={`'container' ${css.hero}`}>
      <h1 className={css.title}>
        Welcome to my site! <br />
        Convenient telephone contact site! <br />
        Good luck!
        <br />
      </h1>
    </div>
  );
};

export default HomePage;
