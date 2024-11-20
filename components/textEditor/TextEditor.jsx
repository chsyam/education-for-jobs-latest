import dynamic from 'next/dynamic';
// const Editor = dynamic(
//     () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
//     { ssr: false }
// )
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = () => {
    return (
        <div className="container my-5">
            {/* <Editor
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
            /> */}
            
        </div>
    )
}

export default TextEditor