import { FC } from "react";
import ReactQuill from "react-quill";
import styled from "styled-components";

const StyledQuill = styled(ReactQuill)`
    margin-top: 0.4em;
    max-width: 100%;
    max-height: 20em;
    height: 10em;
    background-color: #ffffff;
    color: #000000;

    .ql-container {
        background-color: #ffffff;
    }
    .ql-editor {
        padding: 0.2em 0.5em 0.5em;
    }
`

const QuillText: FC<{ value: string, setState: (value: string) => void }> = ({ value, setState }) => {
    return (
        <StyledQuill
            value={value}
            onChange={(valueQuill) => setState(valueQuill)}
        />
    )
}

export default QuillText