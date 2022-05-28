import { useEffect, useState } from "react";

export default function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    return time

}
setInterval(Clock,1000)