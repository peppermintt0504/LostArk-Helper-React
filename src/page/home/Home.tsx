import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import instance from "../../shared/Request";
type homeProps = {};

const Home: React.FC<homeProps> = ({}) => {
  const getAPIData = async () => {
    const res = instance({
      method: "post",
      url: "markets/items",
      data: {
        Sort: "GRADE",
        CategoryCode: 50010,
        ItemName: "오레하",
        PageNo: 0,
        SortCondition: "ASC",
      },
    }).then((data) => {
      console.log(data);
    });
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <div>
      <Header />
      <div>Hello</div>
    </div>
  );
};

export default Home;
