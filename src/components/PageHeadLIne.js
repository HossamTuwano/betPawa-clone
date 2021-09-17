import React from "react";
import OfflineBoltOutlinedIcon from "@material-ui/icons/OfflineBoltOutlined";
import InfoIcon from "@material-ui/icons/Info";

import "../PageHeadline.css";

function PageHeadLIne() {
  return (
    <div className="page-headline">
      <div className="page-headline__title">
        <div className="page-headline__flex-left">
          <OfflineBoltOutlinedIcon className="bolt-icon" />
          <h1 className="page-headline-title">PAWABOOST</h1>
        </div>

        <InfoIcon className="info-icon" />
      </div>
    </div>
  );
}

export default PageHeadLIne;
