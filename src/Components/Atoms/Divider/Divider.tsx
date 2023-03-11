import { FC } from "react";
import { DividerContainer } from "./styles";

const Divider: FC<any> = ({ lineUnique = false }) => {
  return (
    <DividerContainer lineUnique={lineUnique}>
      {!lineUnique ? <span>O</span> : <span></span>}
    </DividerContainer>
  );
};

export default Divider;
