import {FC, useState} from "react";
import IconIndustry from "../../Icon/IconIndustry/IconIndustry";
import Divider from "../../Divider/Divider";
import Tabs from "../../Tabs/Tabs";
import TabPane from "../../Tabs/TabPane/TabPane";
import TabContent from "../../Tabs/TabContent/TabContent";
import Button from "../../Button/Button";
import ButtonGroup from "../../ButtonGroup/ButtonGroup";
import Modal from "../../Modal/Modal";
import CompanyAbout from "./CompanyAbout";
import CompanyProducts from "./CompanyProducts";
import TenderModal from "./TenderModal";
import FeedbackModal from "./FeedbackModal";

interface CompanySidebarProps {
    companyInfoOpen: boolean;
}

const CompanySidebar: FC<CompanySidebarProps> = (props) => {
    const {
        companyInfoOpen
    } = props;

    const [tenderModalOpen, setTenderModalOpen] = useState<boolean>(false);
    const [feedbackModalOpen, setFeedbackModalOpen] = useState<boolean>(false);
    const [selectedTab, setSelectedTab] = useState<string>("о компании");

    return <>
        <div className={companyInfoOpen ? "company-info open" : "company-info"}>
            <div className={"company-info__content"}>
                <div className={"company-info__title"}>
                    <IconIndustry width={20} height={16} color={"#434A54"}/>
                    <h3>Актобе Монтаж Автоматика</h3>
                </div>
                <Divider color={"#B9BDC3"}/>
                <Tabs
                    className={"company-info__tabs"}
                    tabs={["о компании", "Товары"]}
                    selected={selectedTab}
                    setSelected={setSelectedTab}
                />
                <Divider color={"#B9BDC3"}/>
                <TabPane
                    key={`tab-one`}
                    isSelected={selectedTab === "о компании"}
                >
                    <TabContent className={"company-info__about"}>
                        <CompanyAbout />
                    </TabContent>
                </TabPane>
                <TabPane
                    key={`tab-two`}
                    isSelected={selectedTab === "Товары"}
                >
                    <TabContent className={"company-info__products"}>
                        <CompanyProducts />
                    </TabContent>
                </TabPane>
                <div className={"company-info__btn"}>
                    <ButtonGroup>
                        <Button
                            width={160}
                            className={"btn-primary"}
                            onClick={() => setTenderModalOpen(true)}
                        >
                            пригласить в тендер
                        </Button>
                        <Button
                            width={147}
                            className={"btn-ghost"}
                        >
                            в мои поставщики
                        </Button>
                        <Button
                            width={128}
                            className={"btn-ghost"}
                            onClick={() => setFeedbackModalOpen(true)}
                        >
                            оставить отзыв
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
        <Modal
            active={tenderModalOpen}
            setActive={setTenderModalOpen}
            width={368}
        >
            <TenderModal setTenderModalOpen={setTenderModalOpen} />
        </Modal>
        <Modal
            active={feedbackModalOpen}
            setActive={setFeedbackModalOpen}
            width={464}
        >
            <FeedbackModal setFeedbackModalOpen={setFeedbackModalOpen} />
        </Modal>
    </>
};

export default CompanySidebar;