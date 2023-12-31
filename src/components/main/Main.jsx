import { data } from "../../helper/data";
import Card from "./Card";
import "./Main.scss";

const Main = () => {
  return (
    <main>
      <header>
      <h1>Which One Are You?</h1>
      </header>
      <div className="card-container">
        {data.map((item) => (
          <Card key={data.id} {...item} />
        ))}
      </div>
    </main>
  );
};

export default Main;



        