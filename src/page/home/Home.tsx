import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import instance from "../../shared/Request";
import "./Home.style.css";
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
    <div className="pageLayout">
      <Header />

      <div className="ContentsContainer">
        <div className="ContentsSide"></div>
        <div className="Contents">
          <div className="itemInfo">
            <h3 className="itemName">최상급 오레하 융화 재료 (고고학)</h3>
            <div className="recommend">
              <div className="RCM-detail">
                <div className="RCM-title">추천</div>
                <div className="RCM-result green">제작</div>
              </div>
              <div className="RCM-detail">
                <div className="RCM-title">직접 사용</div>
                <div className="RCM-result green">이득</div>
              </div>
              <div className="RCM-detail">
                <div className="RCM-title">판매</div>
                <div className="RCM-result red">손해</div>
              </div>
            </div>
          </div>

          <div className="DetailData">
            <div className="DetailDataPage">
              <div className="produceData-Title">제작 정보</div>
              <div className="produceData-data">
                <div>제작 단위</div>
                <div className="bold">15</div>
              </div>
              <div className="produceData-data">
                <div>활동력</div>
                <div className="bold">360</div>
              </div>
              <div className="produceData-data">
                <div>제작 시간</div>
                <div className="bold">4500초</div>
              </div>
              <div className="produceData-data">
                <div>경험치</div>
                <div className="bold">720</div>
              </div>
              <div className="produceData-data">
                <div>판매단위 당 제작 비용</div>
                <div className="bold">---</div>
              </div>
              <div className="produceData-data">
                <div>제작단위 당 제작 비용</div>
                <div className="bold">---</div>
              </div>

              <div className="rowLine" />

              <div className="produceData-data">
                <div>제작 묶음 수량</div>
                <input className="dataInput"></input>
              </div>
              <div className="produceData-data">
                <div>총 제작 비용</div>
                <div className="bold">1</div>
              </div>
            </div>

            <div className="DetailDataPage">
              <div className="produceData-Title">판매 정보</div>
              <div className="produceData-data">
                <div>판매 단위</div>
                <div className="bold">1</div>
              </div>
              <div className="produceData-data">
                <div>시세</div>
                <input className="dataInput" />
              </div>
              <div className="produceData-data">
                <div>판매 단위 당 수수료</div>
                <div className="bold">3</div>
              </div>
              <div className="produceData-data">
                <div>판매 단위 당 원가</div>
                <div className="bold">59.75</div>
              </div>
              <div className="produceData-data">
                <div>판매 단위 당 판매 차익</div>
                <div className="bold">-1.66</div>
              </div>

              <div className="rowLine" />

              <div className="produceData-data">
                <div>판매 묶음 수량</div>
                <input className="dataInput"></input>
              </div>
              <div className="produceData-data">
                <div>총 수수료</div>
                <div className="bold">45</div>
              </div>
              <div className="produceData-data">
                <div>총 원가</div>
                <div className="bold">894.88</div>
              </div>
              <div className="produceData-data">
                <div>총 판매 차익</div>
                <div className="bold">-25</div>
              </div>
              <div className="produceData-data">
                <div>원가 대비 이익률</div>
                <div className="bold">-2.53%</div>
              </div>
              <div className="produceData-data">
                <div>활동력 대비 이익률</div>
                <div className="bold">-6.93%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="ContentsSide"></div>
      </div>
    </div>
  );
};

export default Home;
