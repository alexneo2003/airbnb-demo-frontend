import React from "react";
import MediaQuery from "react-responsive";
import Desktop from "./MoreDesktop";
import Mobile from "./MoreMobile";
import Tablet from "./MoreTablet";

export default class extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery maxWidth={767}>
          <Mobile
            className={this.props.className}
            title={this.props.title}
            checkedTitle={this.props.checkedTitle}
            moreFilters={this.props.moreFilters}
          />
        </MediaQuery>

        <MediaQuery minWidth={768} maxWidth={991}>
          <Tablet
            className={this.props.className}
            title={this.props.title}
            checkedTitle={this.props.checkedTitle}
            moreFilters={this.props.moreFilters}
          />
        </MediaQuery>

        <MediaQuery minWidth={992}>
          <Desktop
            className={this.props.className}
            title={this.props.title}
            checkedTitle={this.props.checkedTitle}
            moreFilters={this.props.moreFilters}
          />
        </MediaQuery>
      </div>
    );
  }
}
