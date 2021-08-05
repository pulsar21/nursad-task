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
import {useTypeAction} from "../../../hooks/useTypedAction";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import Icon from "../../Icon/Icon";
import closeSvg from "../../../assets/images/svg/close.svg";

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

    const { setVisibleCompanyInfo } = useTypeAction();

    const { companies } = useTypedSelector(state => state.company);

    return <>
        <div
            className={companyInfoOpen ? "company-info open" : "company-info"}
            onClick={() => setVisibleCompanyInfo(false)}
        >
            <div
                className={companyInfoOpen ? "company-info__content open" : "company-info__content"}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={"company-info__title"}>
                    <IconIndustry width={20} height={16} color={"#434A54"}/>
                    <h3>Актобе Монтаж Автоматика</h3>
                    <Icon
                        src={closeSvg}
                        alt={"close"}
                        width={20}
                        height={16}
                        className={"icon-close"}
                        onClick={() => setVisibleCompanyInfo(false)}
                    />
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
                        <CompanyAbout/>
                    </TabContent>
                </TabPane>
                <TabPane
                    key={`tab-two`}
                    isSelected={selectedTab === "Товары"}
                >
                    <TabContent className={"company-info__products"}>
                        <CompanyProducts/>
                    </TabContent>
                </TabPane>
                <div className={"company-info__btn"}>
                    <ButtonGroup>
                        <Button
                            className={"btn-primary"}
                            onClick={() => setTenderModalOpen(true)}
                        >
                            пригласить в тендер
                        </Button>
                        <Button
                            className={"btn-ghost"}
                        >
                            в мои поставщики
                        </Button>
                        <Button
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
            className={"modal-tender"}
        >
            <TenderModal setTenderModalOpen={setTenderModalOpen}/>
        </Modal>
        <Modal
            active={feedbackModalOpen}
            setActive={setFeedbackModalOpen}
            className={"modal-feedback"}
        >
            <FeedbackModal setFeedbackModalOpen={setFeedbackModalOpen}/>
        </Modal>
    </>
};

export default CompanySidebar;