import { useState } from "react"

const ParentHoc = (Parent) => {
    function ParentHoc() {
        const [count, setCount] = useState(0);
        const handleCount = () => {
            setCount(count + 1)
        }
        return (
            <Parent counter={count} handleCounter={handleCount} />
        )
    }
    return ParentHoc;
}
export default ParentHoc;