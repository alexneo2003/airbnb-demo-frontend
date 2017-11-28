import React from "react";
import Desktop from "./MoreDesktop";
import Mobile from "./MoreMobile";
import Tablet from "./MoreTablet";

import { MobileOnly, TabletOnly, DesktopOnly } from "../../Media";

export default class extends React.Component {
  render() {
    return (
      <div>
        <Desktop
          className={this.props.className}
          title={this.props.title}
          checkedTitle={this.props.checkedTitle}
          moreFilters={this.props.moreFilters}
        />
      </div>
    );
  }
}
