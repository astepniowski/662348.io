import { Link } from "react-router-dom";
import '../../styles/FileExplorer.css'

function FileItem({label, to}) {
    return (
        <div className = "file-item">
            <Link to={to}>
                📄 {label}
            </Link>
        </div>
    )
}

export default FileItem;