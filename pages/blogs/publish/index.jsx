// import TextEditor from "@/components/textEditor/TextEditor";

// export default function PublishBlog() {
//     return (
//         <div>
//             <TextEditor />
//         </div>
//     );
// }

import dynamic from 'next/dynamic';
import React, { useState, useRef, useMemo } from 'react';
// import JoditEditor from 'jodit-react';

const JoditEditor = dynamic(() => import("jodit-react"), {
	ssr: false
});

const Example = ({ placeholder }) => {
	const editor = useRef(null);
	const [content, setContent] = useState('');

	const config = useMemo(
		() => ({
			readonly: false,
			placeholder: placeholder || 'Start typings...'
		}),
		[placeholder]
	);

	const createMarkup = (content) => {
		return { __html: content };
	};

	return (
		<div>
			<JoditEditor
				ref={editor}
				value={content}
				config={config}
				tabIndex={1}
				onBlur={(newContent) => setContent(newContent)}
				onChange={(newContent) => { setContent(newContent) }}
			/>
			<div dangerouslySetInnerHTML={createMarkup(content)} />
			<div>{content}</div>
		</div>
	);
};

export default Example;