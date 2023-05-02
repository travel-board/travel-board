import styled from "styled-components";

export const Form = styled.form`
    width: 250px;
    height: 300px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    div{
        width: 100%;
    }
    .select{
        height: 35px;
            border: 1px solid var(--gray-3);
            border-radius: 34px;
            display: flex;
            align-items: center;
            background: #FAFAFA;
            gap: 10px;
            position: relative;
            -webkit-appearance: none;
            color: #d9d9d9;
            line-height: 19px;
            font-size: 13px;
        select{
            width: 100%;
            height: 32px;
            border: none;
            border-radius: 34px;
            display: flex;
            align-items: center;
            padding-left: 14px;
            padding-right: 5px;
            box-sizing: border-box;
            background: #FAFAFA;
            gap: 10px;
            position: relative;
            -webkit-appearance: none;
            color: #d9d9d9;
            line-height: 19px;
            font-size: 13px;
            option{
                color: black;
                :disabled{
                    color: #d9d9d9;
                }
            }
            option[value=""][disabled] {
                color: red;
            }
            select {
                -moz-appearance:none; /* Firefox */
                -webkit-appearance:none; /* Safari and Chrome */
                appearance:none;
            }
        }
        :has(select:focus) {
            border: 1px solid var(--primary);
        }
    }
`