import React from "react";
import { FlexWrapper } from "../FlexWrapper.ts";
import { S } from "./Slider_Styles";

export const Slider: React.FC = () => {
    return (
        <S.Slider>
            <FlexWrapper>
                <S.Slide>
                    <S.Text>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus iste eaque provident blanditiis non asperiores labore possimus corrupti maxime officia tempore iusto consectetur natus eos sint, sit, quae assumenda enim!
                    </S.Text>
                    <S.Name>Petrov Peter</S.Name>
                </S.Slide>
            </FlexWrapper>
            <S.Pagination>
                <span> </span>
                <span className={"active"}> </span>
                <span> </span>
            </S.Pagination>
        </S.Slider>
    )
}