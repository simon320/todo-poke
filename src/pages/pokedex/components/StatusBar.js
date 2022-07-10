import React from "react";
import {
  StatusBarActiveStyled,
  StatusBarContainerStyled,
  StatusBarLineStyled,
  StatusBarTitleStyled,
} from "../PokeApiStyles";

const StatusBar = (props) => {
  const {
    base_stat,
    stat: { name },
  } = props;

  return (
    <StatusBarContainerStyled>
      <StatusBarTitleStyled>{name}</StatusBarTitleStyled>
      <StatusBarLineStyled>
        <StatusBarActiveStyled
          power={base_stat}
        ></StatusBarActiveStyled>
      </StatusBarLineStyled>
    </StatusBarContainerStyled>
  );
};

export default StatusBar;