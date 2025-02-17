export default function Heading({ text, isH1 = false }) {
    const Tag = isH1 ? 'h1' : 'h2';
    const size = isH1 ? 'text-5xl' : 'text-3xl';
    return <Tag className={`${size} my-1`}>{text}</Tag>;
}