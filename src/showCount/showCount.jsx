import "./showCount.css";

const showCount = ({number, calc}) => {
    return (calc === "+" ? number+1 : number-1);
}

export default showCount;