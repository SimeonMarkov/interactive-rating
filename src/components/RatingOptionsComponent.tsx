import '../rating-options.css';
import {useState} from "react";

export function RatingOptionsComponent() {
    const maxRate = 5;
    const [selectedRateId, setSelectedRateId] = useState<number>(0);

    return <>
        {Array.from({ length: maxRate }, (_, i) => i + 1).map(num => (
            <span className={`rating-option ${selectedRateId === num && 'selected'}`} onClick={() => setSelectedRateId(num)} key={num}>{num}</span>
        ))}
    </>;
}