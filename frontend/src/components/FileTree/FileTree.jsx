import FileItem from "./FileItem";
import '../../styles/FileExplorer.css'

function FileTree() {
    return(
        <div className="page-center">
            <div className="file-explorer-wrapper">
                <div className="folder">📁 root</div>

                <div className="tree-level">
                    <FileItem label="home" to="/" />
                    <FileItem label="gallery" to="/gallery" />
                    <FileItem label = "README.txt" to="/readme"/>
                    <FileItem label = "league-history" to="/league-history"/>
                    <FileItem label = "blog" to="/blog"/>
                </div>
            </div>
        </div>
    )
}

export default FileTree;