import '../rating-options.css';

type Props = {
    selectedRate: number | null;
    onSelect: (rate: number) => void;
};

export function RatingOptionsComponent({selectedRate, onSelect}: Props) {
    const maxRate = 5;

    return <>
        {Array.from({ length: maxRate }, (_, i) => i + 1).map(num => (
            <span className={`rating-option ${selectedRate === num && 'selected'}`} onClick={() => onSelect(num)} key={num}>{num}</span>
        ))}
    </>;
}