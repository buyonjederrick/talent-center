import { useState } from "react";
import parse, { DOMNode, Element, HTMLReactParserOptions } from "html-react-parser";

interface ShowMoreTextProps {
    text: string | null | undefined;
    length?: number;
    parseHtml?: boolean;
}

const ShowMoreText: React.FC<ShowMoreTextProps> = ({ text, length = 100, parseHtml = false }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Defaulting to empty string if text is null or undefined
    const validText = text || '';

    const truncatedText = validText.length > length 
        ? validText.substring(0, length) + "..." 
        : validText;

    const displayText = isExpanded ? validText : truncatedText;

    const options: HTMLReactParserOptions = {
        replace: (domNode: DOMNode) => {
            if (
                domNode instanceof Element &&
                domNode.attribs &&
                domNode.attribs.class === "remove"
            ) {
                return <></>;
            }
        }
    };

    return (
        <div className="">
            <p className="my-container break-words text-neutral-500 font-light">{parseHtml ? parse(displayText, options) : displayText}</p>
            {validText.length > length && (
               <button 
               className="mt-2 text-white hover:bg-indigo-300 transition duration-150 ease-in-out bg-indigo-500 py-1 px-3 rounded-md mx-auto block mb-4"
               onClick={() => setIsExpanded(!isExpanded)}
             >
               {isExpanded ? "Show less" : "Show more"}
             </button>
             
            )}
        </div>
    );
}

export default ShowMoreText;
