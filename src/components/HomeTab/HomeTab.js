import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./HomeTab.css";
import BreakFast from "../BreakFast/BreakFast";
import Lunch from "../Lunch/Lunch";
import Dinner from "../Dinner/Dinner";
import { useSelector } from "react-redux";
import fakeData from "../../fakeData/fakeData.json";

const HomeTab = () => {
    const products = useSelector((state) => state.allProducts.products);
    console.log(products);

    const breakFast = fakeData.filter((brk) => brk.type === "breakfast");
    const lunch = fakeData.filter((lnch) => lnch.type === "lunch");
    const dinner = fakeData.filter((dnr) => dnr.type === "dinner");



    return (
        <div>
            <Tabs>
                <TabList className="list">
                    <Tab className="tabItem"><strong>Breakfast</strong></Tab>
                    <Tab className="tabItem"><strong>Lunch</strong></Tab>
                    <Tab className="tabItem"><strong>Dinner</strong></Tab>
                </TabList>

                <TabPanel className="row d-flex justify-content-center">
                    {breakFast.map((bf) => (
                        <BreakFast foodB={bf} key={bf.id}></BreakFast>
                    ))}
                </TabPanel>

                <TabPanel className="row d-flex justify-content-center">
                    {lunch.map((ln) => (
                        <Lunch foodL={ln} key={ln.id}></Lunch>
                    ))}
                </TabPanel>
                <TabPanel className="row d-flex justify-content-center">
                    {dinner.map((dn) => (
                        <Dinner foodD={dn} key={dn.id}></Dinner>
                    ))}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default HomeTab;