import Property1Variant2 from "./Property1Variant2";
import Property1Default from "./Property1Default";
import "./SectionCard.css";

const SectionCard = () => {
  return (
    <div className="frame-inner1">
      <div className="frame-wrapper">
        <div className="instance-parent">
          <Property1Variant2
            iconshome="/iconsdescription1.svg"
            home="My Notes"
            showIconshome
            property1Variant2BackgroundColor="unset"
            property1Variant2Padding="var(--padding-5xs) 0px"
            homeFontWeight="600"
            homeColor="#203562"
            homeFontSize="24px"
            homeLineHeight="33.6px"
            homeOpacity="unset"
          />
          <Property1Variant2
            iconshome="/iconsdescription1.svg"
            home="Recently viewed"
            showIconshome={false}
            property1Variant2BackgroundColor="unset"
            property1Variant2Padding="8px 16px"
            homeFontWeight="600"
            homeColor="#203562"
            homeFontSize="16px"
            homeLineHeight="22.4px"
            homeOpacity="0.7"
          />
          <div className="notes-card-parent">
            <Property1Default
              weeksAgo="5 days ago"
              lorenIpsum="Feedbacks"
              property1DefaultPosition="relative"
              lorenIpsumWidth="155px"
            />
            <Property1Default
              weeksAgo="2 weeks ago"
              lorenIpsum="Weekly Task"
              property1DefaultPosition="relative"
              lorenIpsumWidth="155px"
            />
            <Property1Default
              weeksAgo="3 weeks ago"
              lorenIpsum="Lyrics"
              property1DefaultPosition="relative"
              lorenIpsumWidth="155px"
            />
            <Property1Default
              weeksAgo="3 weeks ago"
              lorenIpsum="Loren ipsum"
              property1DefaultPosition="relative"
              lorenIpsumWidth="unset"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
