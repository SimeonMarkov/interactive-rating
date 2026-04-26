import '../rating-options.css';

export function RatingOptionsComponent() {
    const maxRate = 5;

    const ratingOptions = () => {
        const result = [];
        for (let i = 1; i <= maxRate; i++) {
            result.push(<span className='rating-option' key={i}>{i}</span>);
        }
        return result;
    }

    return <>{ratingOptions()}</>;
}