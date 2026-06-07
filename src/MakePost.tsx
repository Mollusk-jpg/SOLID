import { useCallback, useState } from "react";
import type { FunctionComponent } from "react";

export const MakePost: FunctionComponent = () => {
const [message, setMessage] = useState("");
const [selectedFile, setSelectedFile] = useState<File | undefined>();

const onSubmit = useCallback(
    async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
      // We will add upload functionality here
    console.log("Submitting:", { message, selectedFile });
    },
    [message, selectedFile]
);

return (
    <form onSubmit={onSubmit}>
    <input
        type="text"
        placeholder="Make a Post"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
    />
    <input
        type="file"
        accept="image/*"
        onChange={(e) => setSelectedFile(e.target.files?.[0])}
    />
    <input type="submit" value="Post" />
    </form>
);
};