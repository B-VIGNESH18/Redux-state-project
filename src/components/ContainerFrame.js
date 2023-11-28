import Property1Variant2 from "./Property1Variant2";
import "./ContainerFrame.css";

const ContainerFrame = () => {
  return (
    <div className="frame1">
      <div className="frame-inner">
        <div />
      </div>
      <div className="notes-app">Notes App</div>
      <div className="frame-div">
        <div className="instance-wrapper">
          <Property1Variant2
            iconshome="/iconsdescription.svg"
            home="Notes"
            showIconshome
            property1Variant2BackgroundColor="#203562"
            property1Variant2Padding="var(--padding-5xs) var(--padding-base)"
            homeFontWeight="500"
            homeColor="#f5f5f5"
            homeFontSize="24px"
            homeLineHeight="33.6px"
            homeOpacity="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default ContainerFrame;
