import { Author } from "../../Models/Author";
import "./singleWriter.css";

interface writerProps {
    writer: Author;
}

function SingleWriter(props: writerProps): JSX.Element {
    return (
        <div className="singleWriter box">
			<b>{props.writer.name} {props.writer.surname}</b>
        </div>
    );
}

export default SingleWriter;
