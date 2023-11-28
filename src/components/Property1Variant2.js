import { useMemo } from "react";
import "./Property1Variant2.css";

const Property1Variant2 = ({
  iconshome,
  home,
  showIconshome,
  property1Variant2BackgroundColor,
  property1Variant2Padding,
  homeFontWeight,
  homeColor,
  homeFontSize,
  homeLineHeight,
  homeOpacity,
}) => {
  const property1Variant2Style = useMemo(() => {
    return {
      backgroundColor: property1Variant2BackgroundColor,
      padding: property1Variant2Padding,
    };
  }, [property1Variant2BackgroundColor, property1Variant2Padding]);

  const home1Style = useMemo(() => {
    return {
      fontWeight: homeFontWeight,
      color: homeColor,
      fontSize: homeFontSize,
      lineHeight: homeLineHeight,
      opacity: homeOpacity,
    };
  }, [homeFontWeight, homeColor, homeFontSize, homeLineHeight, homeOpacity]);

  return (
    <div className="property-1variant2" style={property1Variant2Style}>
      <div className="iconshome-group">
        {showIconshome && <img className="iconshome2" alt="" src={iconshome} />}
        <div className="home1" style={home1Style}>
          {home}
        </div>
      </div>
    </div>
  );
};

export default Property1Variant2;
