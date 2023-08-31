import React, { ChangeEvent, useEffect } from "react";
import Header from "../../components/header/Header";
import instance from "../../shared/Request";
import "./Home.style.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/config";
import { useDispatch } from "react-redux";
import { changeIngPrice, checkItem } from "../../redux/modules/network";
type homeProps = {};

const Home: React.FC<homeProps> = ({}) => {
  let itemData = useSelector((state : RootState) => state.network.data);
  const dispatch = useDispatch();

  
  console.log(itemData);

  const changePriceFunc = (e:ChangeEvent<HTMLInputElement>,name:string)=>{
    dispatch(changeIngPrice({name,changePrice : e.target.value}))
  }

  useEffect(() => {
    dispatch(checkItem("최상급 오레하"));
   
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
              <div className="produceData-Title bold">제작 정보</div>
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
                <div className="bold flexCenter">
                  ---<div className="coin "></div>
                </div>
              </div>
              <div className="produceData-data">
                <div>제작단위 당 제작 비용</div>
                <div className="bold flexCenter">
                  ---<div className="coin "></div>
                </div>
              </div>

              <div className="rowLine" />

              <div className="produceData-data">
                <div>제작 묶음 수량</div>
                <input className="dataInput"></input>
              </div>
              <div className="produceData-data">
                <div>총 제작 비용</div>
                <div className="bold flexCenter">
                  1<div className="coin "></div>
                </div>
              </div>
            </div>

            <div className="DetailDataPage">
              <div className="produceData-Title bold">판매 정보</div>
              <div className="produceData-data">
                <div>판매 단위</div>
                <div className="bold">{itemData?.BundleCount}</div>
              </div>
              <div className="produceData-data">
                <div>시세</div>
                <input defaultValue={itemData?.CurrentMinPrice} className="dataInput" />
              </div>
              <div className="produceData-data">
                <div>판매 단위 당 수수료</div>
                <div className="bold flexCenter">
                  3<div className="coin "></div>
                </div>
              </div>
              <div className="produceData-data">
                <div>판매 단위 당 원가</div>
                <div className="bold flexCenter">
                  {itemData? itemData.CurrentMinPrice! - 3 : "-"}<div className="coin "></div>
                </div>
              </div>
              <div className="produceData-data">
                <div>판매 단위 당 판매 차익</div>
                <div className="bold flexCenter">
                  -1.66<div className="coin "></div>
                </div>
              </div>

              <div className="rowLine" />

              <div className="produceData-data">
                <div>판매 묶음 수량</div>
                <input className="dataInput"></input>
              </div>
              <div className="produceData-data">
                <div>총 수수료</div>
                <div className="bold flexCenter">
                  45<div className="coin "></div>
                </div>
              </div>
              <div className="produceData-data">
                <div>총 원가</div>
                <div className="bold flexCenter">
                  894.88<div className="coin "></div>
                </div>
              </div>
              <div className="produceData-data">
                <div>총 판매 차익</div>
                <div className="bold flexCenter">
                  -25<div className="coin "></div>
                </div>
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
          <div className="itemIngredientInfo">
            <div className="ingredientListLayout">
              <div className="produceData-Title bold">재료 정보</div>

              <div className="ingredientList">
                <div className="ingredientData">
                  <div className="ingredientLarge">재료</div>
                  <div className="ingredientSmall">필요개수</div>
                  <div className="ingredientSmall">판매단위</div>
                  <div className="ingredientSmall">시세</div>
                  <div className="ingredientSmall">단가</div>
                  <div className="ingredientSmall">합계</div>
                </div>
                <div className="ingreLine"></div>
                {itemData?.ingredients?.map((v)=>{
                  return(
                    <div key={v.Name}>
                      <div className="ingredientData">
                      <div className="ingredientLarge">
                      <div className="IName">
                          <div className={v.Grade == "일반" ?"normalBackground" : v.Grade == "고급" ? "rareBackground" :  v.Grade == "희귀" ? "uniqueBackground" :" heroBackground"}><img className="IImage" src={v.Icon}/></div>
                          <div className="ingredientText">{v.Name}</div>
                        </div>
                      </div>
                      <div className="ingredientSmall">
                        <div className="ingredientText">{v.needCount}</div>

                      </div>
                      <div className="ingredientSmall">{v.BundleCount}</div>
                      <div className="ingredientSmall">
                        <div className="ingredientText">
                          <input onChange={(e)=>changePriceFunc(e,v.Name!)} defaultValue={v.CurrentMinPrice} className="dataInput" />
                        <div className="coin"/></div>
                      </div>
                      <div className="ingredientSmall">
                        <div className="ingredientText">
                          {(v.CurrentMinPrice && v.BundleCount) &&v.CurrentMinPrice / v.BundleCount}<div className="coin "/>
                        </div>
                      </div>
                      <div className="ingredientSmall">
                        <div className="ingredientText">
                        {(v.CurrentMinPrice && v.BundleCount && v.needCount) && Math.round(v.CurrentMinPrice / v.BundleCount * v.needCount * 100)/100}<div className="coin "/>
                        </div>
                      </div>
                    </div>
                    <div className="ingreLine"></div>
                  </div>
                )
                })}
                

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
